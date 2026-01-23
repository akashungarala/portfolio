# Library Functions

Utility functions and API clients used across the application.

## Files

### github.ts
GitHub GraphQL API client for fetching recent commits.
- Uses ISR with 1-hour revalidation
- Graceful fallback on API failures
- Rate limit aware

### resend.ts
Email delivery via Resend API.
- Server-side only (API route)
- Zod validation for contact form data
- Error handling with user-friendly messages

### utils.ts
General utilities: class name merging, date formatting, etc.
