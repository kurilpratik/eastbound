# Public enquiry forms

Marketing-site enquiry submissions from the **Footer** band and **Contact page** are stored in Neon Postgres via a server action.

## Data model

Table: `enquiries` (Drizzle: `lib/db/schema.ts`)

| Column | Footer | Contact page | Notes |
|--------|--------|--------------|--------|
| `source` | `footer` | `contact_page` | Enum `enquiry_source` |
| `name` | required | required | |
| `email` | required | required | Normalised to lowercase |
| `phone` | optional | optional | |
| `destination` | optional | optional | From shared destination list |
| `message` | optional | optional | Trip notes / message |
| `company` | — | optional | Not stored for footer |
| `programme_type` | — | optional | Contact page only |
| `travel_dates` | — | optional | Contact page only |
| `submitter_ip_hash` | set when IP known | same | SHA-256(IP + salt); rate limiting only |
| `created_at` | auto | auto | |

Display labels for `source` (for reporting): **Footer**, **Contact page** — see `enquirySourceLabels` in `lib/enquiry/constants.ts`.

## Request flow

1. `EnquiryForm` (`components/EnquiryForm.tsx`) posts `FormData` to `submitEnquiry` in `lib/enquiry/actions.ts`.
2. The action is bound to the expected `source` (`footer` or `contact_page`) so the hidden `source` field must match.
3. On success: row inserted, form reset, success notice shown.
4. On failure: inline error (`role="alert"`) with a specific message; fields are kept.

## Spam controls

### Honeypot

- Field name: `company_website` (`HONEYPOT_FIELD` in `lib/enquiry/constants.ts`).
- Hidden off-screen; humans should leave it empty.
- If filled: the action returns the same success message **without** writing to the database (no error text that reveals the honeypot).

### Rate limit

- **5** submissions per hashed IP per **1 hour** (`RATE_LIMIT_MAX`, `RATE_LIMIT_WINDOW_MS`).
- Counts rows in `enquiries` with the same `submitter_ip_hash` in the window.
- Over limit: user sees an error suggesting they wait or email the team.

IP is taken from `x-forwarded-for` (first hop) or `x-real-ip`. If no IP is present, rate limiting is skipped (edge case on local dev).

### Salt for IP hashing

Set in production (recommended):

```bash
ENQUIRY_RATE_LIMIT_SALT="long-random-string"
```

If unset, a dev default is used — **set a unique salt in production** so hashes are not guessable across deployments.

## Environment

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Runtime queries (pooled), used by `lib/db/index.ts` |
| `DATABASE_URL_UNPOOLED` | Migrations via `drizzle-kit` |
| `ENQUIRY_RATE_LIMIT_SALT` | Optional but recommended for IP hashing |

## Migrations

Enquiry forms **require** the `enquiries` table. If it is missing, submissions will fail (rate-limit check or insert).

After pulling schema changes:

```bash
npm run db:generate   # if you change schema locally
npm run db:migrate    # apply to the target Neon branch (e.g. production)
```

Ensure `.env.local` points at the same Neon branch you migrate before testing locally.

Inspect data (optional):

```bash
npm run db:studio
```

Example SQL:

```sql
SELECT source, name, email, destination, created_at
FROM enquiries
ORDER BY created_at DESC
LIMIT 20;
```

## UI entry points

| Location | Prop | Form fields |
|----------|------|-------------|
| `components/Footer.tsx` | `source="footer"` | Short form |
| `app/(website)/contact/page.tsx` | `source="contact_page"` | Detailed form |

## Future work (not implemented)

- Email notifications to the team on new enquiries
- Admin UI to list and update enquiry status
- Stricter bot protection (CAPTCHA) if honeypot + rate limit are insufficient
