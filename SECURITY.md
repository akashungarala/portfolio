# Security Policy

## Overview

This portfolio website implements multiple security layers to protect against common web vulnerabilities and spam attacks.

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please email [akash.ungarala@gmail.com](mailto:akash.ungarala@gmail.com) with:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

**Please do not** open a public issue for security vulnerabilities.

## Security Features

### Contact Form Protection

#### 1. Rate Limiting
- **Implementation:** In-memory rate limiter (production-ready for single-instance deployments)
- **Limit:** 3 requests per minute per IP address
- **Headers:** Returns standard `X-RateLimit-*` and `Retry-After` headers
- **IP Detection:** Handles `x-forwarded-for`, `x-real-ip`, and Cloudflare's `cf-connecting-ip`
- **Memory Management:** Automatic cleanup of expired entries to prevent memory leaks

```typescript
// Example rate limit response
HTTP/1.1 429 Too Many Requests
Retry-After: 45
X-RateLimit-Limit: 3
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 2026-02-11T10:30:00.000Z
```

#### 2. CAPTCHA (Cloudflare Turnstile)
- **Purpose:** Prevents automated spam and bot submissions
- **Privacy:** More privacy-friendly than Google reCAPTCHA
- **Optional:** Form works without CAPTCHA if not configured
- **Client-side:** Widget auto-themes based on light/dark mode
- **Server-side:** Token verification with Cloudflare's API
- **Fallback:** Graceful degradation if service is unavailable

**Setup:**
1. Create a free account at [Cloudflare Turnstile](https://dash.cloudflare.com/turnstile)
2. Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` to `.env.local` (public key)
3. Add `TURNSTILE_SECRET_KEY` to `.env.local` (secret key)
4. Deploy - the CAPTCHA will automatically appear on the contact form

#### 3. Input Sanitization (XSS Protection)
- **HTML Escaping:** All user inputs are escaped before embedding in HTML emails
- **Characters Escaped:** `&`, `<`, `>`, `"`, `'`
- **Context:** Prevents XSS attacks when viewing emails in HTML-capable clients
- **Text Version:** Plain text email also sent for compatibility

```typescript
// HTML email sanitization
const sanitizedName = escapeHtml(name);  // John<script> → John&lt;script&gt;
```

#### 4. Email Validation
- **Server-side:** Regex validation for proper email format
- **Client-side:** HTML5 email input validation
- **Required Fields:** Name, email, and message must be non-empty
- **Error Handling:** User-friendly error messages

### Next.js Security Features

#### Headers & CSP
- **X-Frame-Options:** Prevents clickjacking
- **X-Content-Type-Options:** Prevents MIME sniffing
- **Referrer-Policy:** Controls referrer information
- **Permissions-Policy:** Restricts browser features

#### Environment Variables
- **Server-only:** API keys (RESEND_API_KEY, TURNSTILE_SECRET_KEY) never exposed to client
- **Public variables:** Only NEXT_PUBLIC_* prefixed vars are client-accessible
- **Git-ignored:** `.env*` files (except `.env.example`) are excluded from version control

#### Docker Security
- **Non-root user:** Container runs as `nextjs:nodejs` (UID/GID 1001)
- **Multi-stage build:** Minimal final image with only production dependencies
- **Alpine base:** Small attack surface with security-focused Linux distribution

### Code Quality

#### TypeScript
- **Strict Mode:** Enabled for maximum type safety
- **No `any` types:** All code is properly typed
- **Null Safety:** Strict null checks enforced

#### Linting & Formatting
- **Biome:** Unified linting and formatting tool
- **Pre-commit Hooks:** Husky + commitlint ensure code quality
- **CI/CD:** Automated checks on every push

#### Dependencies
- **Regular Updates:** Dependabot or manual updates for security patches
- **Minimal Dependencies:** Only essential packages included
- **Trusted Sources:** All packages from npm registry

## Best Practices

### For Production Deployment

1. **Environment Variables**
   ```bash
   # Never commit these to version control
   RESEND_API_KEY=your_actual_key
   TURNSTILE_SECRET_KEY=your_actual_secret
   ```

2. **Rate Limiting (Advanced)**
   - For multi-instance deployments, use Redis-based rate limiting
   - Consider adding IP whitelisting for trusted sources
   - Monitor rate limit hits in application logs

3. **Email Security**
   - Verify Resend domain authentication (SPF, DKIM, DMARC)
   - Use a dedicated sending domain (e.g., `contact@yourdomain.com`)
   - Monitor email delivery rates and spam reports

4. **HTTPS**
   - Always deploy with HTTPS enabled
   - Use HSTS headers to enforce HTTPS
   - Configure automatic certificate renewal

5. **Monitoring**
   - Set up error tracking (e.g., Sentry)
   - Monitor contact form submissions for patterns
   - Alert on rate limit violations or suspicious activity

## Scaling Considerations

### Rate Limiting with Redis

For production with multiple instances:

```typescript
import { Redis } from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

async function checkRateLimit(ip: string): Promise<boolean> {
  const key = `ratelimit:contact:${ip}`;
  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, 60); // 60 second window
  }

  return count <= 3; // 3 requests per minute
}
```

### CAPTCHA Alternatives

- **hCaptcha:** Similar to Turnstile, privacy-focused
- **reCAPTCHA v3:** Google's invisible CAPTCHA (less private)
- **Custom Challenge:** Math problems, questions, etc.

## Compliance

- **GDPR:** No personal data stored without consent
- **Privacy:** Turnstile is privacy-focused (no Google tracking)
- **Data Retention:** Emails stored only in recipient's inbox
- **Right to be Forgotten:** Contact form data not persisted in database

## Security Checklist

- [x] Rate limiting implemented
- [x] CAPTCHA integrated (optional)
- [x] XSS protection via HTML escaping
- [x] Email validation (server + client)
- [x] Environment variables secured
- [x] Docker runs as non-root
- [x] TypeScript strict mode
- [x] No sensitive data in git history
- [x] Dependencies are up-to-date
- [x] HTTPS enforced in production

## Updates

This security policy is reviewed quarterly and updated as needed.

**Last updated:** February 11, 2026
