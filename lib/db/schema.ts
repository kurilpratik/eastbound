import {
  index,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const portalRoleEnum = pgEnum("portal_role", ["agent", "event"]);
export const profileStatusEnum = pgEnum("profile_status", [
  "pending",
  "approved",
  "rejected",
]);

/**
 * App-owned profile row linked 1:1 to a Neon Auth user.
 * Role is fixed at signup (one account = one portal).
 * Status is stored for a future approval flow — not enforced yet.
 * Application JSON is reserved for a future application form.
 */
export const profiles = pgTable("profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().unique(),
  email: text("email").notNull().unique(),
  role: portalRoleEnum("role").notNull(),
  status: profileStatusEnum("status").notNull().default("pending"),
  name: text("name").notNull(),
  company: text("company"),
  country: text("country").notNull(),
  phone: text("phone"),
  application: jsonb("application").$type<Record<string, unknown> | null>(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;
export type PortalRole = (typeof portalRoleEnum.enumValues)[number];
export type ProfileStatus = (typeof profileStatusEnum.enumValues)[number];

/** Where the public enquiry form was submitted (Footer band vs Contact page). */
export const enquirySourceEnum = pgEnum("enquiry_source", [
  "footer",
  "contact_page",
]);

export const enquiries = pgTable(
  "enquiries",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    source: enquirySourceEnum("source").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    destination: text("destination"),
    message: text("message"),
    company: text("company"),
    programmeType: text("programme_type"),
    travelDates: text("travel_dates"),
    /** SHA-256 of client IP + salt; used for rate limiting only. */
    submitterIpHash: text("submitter_ip_hash"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("enquiries_ip_hash_created_at_idx").on(
      table.submitterIpHash,
      table.createdAt,
    ),
  ],
);

export type Enquiry = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;
export type EnquirySource = (typeof enquirySourceEnum.enumValues)[number];
