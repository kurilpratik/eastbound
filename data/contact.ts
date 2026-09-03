import { site } from "./site";

export const contactHero = {
  eyebrow: "Contact",
  title: "Let's Create Remarkable Journeys Together",
  copy: "Whether you're planning bespoke luxury travel, incentive programmes or specialist group tours, our experts are ready to help.",
};

export const programmeTypes = [
  "Luxury FIT",
  "Incentives & Meetings",
  "Educational",
  "Special Interest",
] as const;

export const destinationOptions = [
  "India",
  "Nepal",
  "Bhutan",
  "Sri Lanka",
  "UAE",
  "Multi-country",
] as const;

export const offices = site.offices;

export const paymentPolicy = {
  eyebrow: "Payment policy",
  title: "Clear terms, before anything is confirmed",
  points: [
    "A deposit confirms every programme; the balance is due prior to arrival as set out in your proposal.",
    "All quotations are issued in writing with inclusions, exclusions and cancellation terms stated up front.",
    "Payments are accepted by bank transfer to the relevant Eastbound entity — India, UAE or Sri Lanka.",
    "Any revision to dates, party size or services is re-quoted in writing before it is actioned.",
  ],
};

export const contactSignature =
  "Eastbound — Twenty Years of Local Knowledge, Global Standards, Extraordinary Journeys.";
