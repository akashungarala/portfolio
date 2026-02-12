import { describe, it, expect, beforeEach, vi } from 'vitest';
import { contactFormLimiter, getClientIp } from '@/lib/rate-limit';

describe('Rate Limiter', () => {
  beforeEach(() => {
    // Reset rate limiter state before each test
    contactFormLimiter.reset('test-ip');
  });

  describe('contactFormLimiter', () => {
    it('should allow first request', () => {
      const result = contactFormLimiter.check('test-ip');

      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(2); // 3 max - 1 used = 2 remaining
    });

    it('should allow up to 3 requests', () => {
      const result1 = contactFormLimiter.check('test-ip');
      const result2 = contactFormLimiter.check('test-ip');
      const result3 = contactFormLimiter.check('test-ip');

      expect(result1.allowed).toBe(true);
      expect(result2.allowed).toBe(true);
      expect(result3.allowed).toBe(true);
      expect(result3.remaining).toBe(0);
    });

    it('should block 4th request', () => {
      // Use up the 3 allowed requests
      contactFormLimiter.check('test-ip');
      contactFormLimiter.check('test-ip');
      contactFormLimiter.check('test-ip');

      // 4th request should be blocked
      const result = contactFormLimiter.check('test-ip');

      expect(result.allowed).toBe(false);
      expect(result.remaining).toBe(0);
    });

    it('should track different IPs separately', () => {
      const result1 = contactFormLimiter.check('ip-1');
      const result2 = contactFormLimiter.check('ip-2');

      expect(result1.allowed).toBe(true);
      expect(result2.allowed).toBe(true);
      expect(result1.remaining).toBe(2);
      expect(result2.remaining).toBe(2);
    });

    it('should reset after time window', () => {
      vi.useFakeTimers();

      // Use up all requests
      contactFormLimiter.check('test-ip');
      contactFormLimiter.check('test-ip');
      contactFormLimiter.check('test-ip');

      // Should be blocked
      const blockedResult = contactFormLimiter.check('test-ip');
      expect(blockedResult.allowed).toBe(false);

      // Advance time by 61 seconds (past the 60s window)
      vi.advanceTimersByTime(61000);

      // Should be allowed again
      const allowedResult = contactFormLimiter.check('test-ip');
      expect(allowedResult.allowed).toBe(true);
      expect(allowedResult.remaining).toBe(2);

      vi.useRealTimers();
    });
  });

  describe('getClientIp', () => {
    it('should extract IP from x-forwarded-for header', () => {
      const request = new Request('http://localhost', {
        headers: {
          'x-forwarded-for': '192.168.1.1, 10.0.0.1',
        },
      });

      const ip = getClientIp(request);
      expect(ip).toBe('192.168.1.1');
    });

    it('should extract IP from x-real-ip header', () => {
      const request = new Request('http://localhost', {
        headers: {
          'x-real-ip': '192.168.1.2',
        },
      });

      const ip = getClientIp(request);
      expect(ip).toBe('192.168.1.2');
    });

    it('should extract IP from cf-connecting-ip header (Cloudflare)', () => {
      const request = new Request('http://localhost', {
        headers: {
          'cf-connecting-ip': '192.168.1.3',
        },
      });

      const ip = getClientIp(request);
      expect(ip).toBe('192.168.1.3');
    });

    it('should prioritize x-forwarded-for over other headers', () => {
      const request = new Request('http://localhost', {
        headers: {
          'x-forwarded-for': '192.168.1.1',
          'x-real-ip': '192.168.1.2',
          'cf-connecting-ip': '192.168.1.3',
        },
      });

      const ip = getClientIp(request);
      expect(ip).toBe('192.168.1.1');
    });

    it('should return "unknown" if no IP headers present', () => {
      const request = new Request('http://localhost');

      const ip = getClientIp(request);
      expect(ip).toBe('unknown');
    });
  });
});
