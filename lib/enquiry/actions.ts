"use server";

import { db } from "@/lib/db";
import {
  enquiries,
  enquirySourceEnum,
  type EnquirySource,
} from "@/lib/db/schema";

import { HONEYPOT_FIELD } from "./constants";
import { getSubmitterIpHash, isRateLimited } from "./rate-limit";

export type EnquiryActionState = {
  error?: string;
  success?: string;
} | null;

const enquirySources = new Set<string>(enquirySourceEnum.enumValues);

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitEnquiry(
  expectedSource: EnquirySource,
  _prevState: EnquiryActionState,
  formData: FormData,
): Promise<EnquiryActionState> {
  const honeypot = readString(formData, HONEYPOT_FIELD);
  if (honeypot) {
    return {
      success:
        "Thank you — we've received your enquiry. A consultant will be in touch within one working day.",
    };
  }

  const sourceRaw = readString(formData, "source");
  if (sourceRaw !== expectedSource || !enquirySources.has(sourceRaw)) {
    return { error: "This form could not be verified. Please refresh and try again." };
  }

  const ipHash = await getSubmitterIpHash();
  if (await isRateLimited(ipHash)) {
    return {
      error:
        "You've sent several enquiries recently. Please wait about an hour before trying again, or email us directly.",
    };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email").toLowerCase();
  const phone = readString(formData, "phone") || null;
  const destination = readString(formData, "destination") || null;
  const message = readString(formData, "message") || null;
  const company = readString(formData, "company") || null;
  const programmeType = readString(formData, "programme_type") || null;
  const travelDates = readString(formData, "travel_dates") || null;

  if (!name) {
    return { error: "Please enter your name." };
  }

  if (!email) {
    return { error: "Please enter your email address." };
  }

  if (!isValidEmail(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    await db.insert(enquiries).values({
      source: expectedSource,
      name,
      email,
      phone,
      destination,
      message,
      company: expectedSource === "contact_page" ? company : null,
      programmeType: expectedSource === "contact_page" ? programmeType : null,
      travelDates: expectedSource === "contact_page" ? travelDates : null,
      submitterIpHash: ipHash,
    });
  } catch {
    return {
      error:
        "We couldn't save your enquiry right now. Please try again in a few minutes or contact us by email.",
    };
  }

  return {
    success:
      "Thank you — we've received your enquiry. A consultant will be in touch within one working day.",
  };
}
