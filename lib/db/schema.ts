import {
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
