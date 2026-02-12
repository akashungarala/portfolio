import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { contactFormLimiter, getClientIp } from '@/lib/rate-limit';

describe('Rate Limiter', () => {
  // Use unique IP for each test to avoid cross-test pollution
  let testIp: string;

  beforeEach(() => {
    testIp = `test-ip-${Date.now()}-${Math.random()}`;
  });

  afterEach(() => {
    // Clean up after each test
    if (testIp) {
      contactFormLimiter.reset(testIp);
    }
  });

  describe('contactFormLimiter', () => {
    it('should allow first request', () => {
      const result = contactFormLimiter.check(testIp);

      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(2); // 3 max - 1 used = 2 remaining
    });

    it('should allow up to 3 requests', () => {
      const result1 = contactFormLimiter.check(testIp);
      const result2 = contactFormLimiter.check(testIp);
      const result3 = contactFormLimiter.check(testIp);

      expect(result1.allowed).toBe(true);
      expect(result2.allowed).toBe(true);
      expect(result3.allowed).toBe(true);
      expect(result3.remaining).toBe(0);
    });

    it('should block 4th request', () => {
      // Use up the 3 allowed requests
      contactFormLimiter.check(testIp);
      contactFormLimiter.check(testIp);
      contactFormLimiter.check(testIp);

      // 4th request should be blocked
      const result = contactFormLimiter.check(testIp);

      expect(result.allowed).toBe(false);
      expect(result.remaining).toBe(0);
    });

    it('should track different IPs separately', () => {
      const ip1 = `${testIp}-1`;
      const ip2 = `${testIp}-2`;

      const result1 = contactFormLimiter.check(ip1);
      const result2 = contactFormLimiter.check(ip2);

      expect(result1.allowed).toBe(true);
      expect(result2.allowed).toBe(true);
      expect(result1.remaining).toBe(2);
      expect(result2.remaining).toBe(2);

      // Clean up
      contactFormLimiter.reset(ip1);
      contactFormLimiter.reset(ip2);
    });

    it('should reset after time window', () => {
      vi.useFakeTimers();

      // Use up all requests
      contactFormLimiter.check(testIp);
      contactFormLimiter.check(testIp);
      contactFormLimiter.check(testIp);

      // Should be blocked
      const blockedResult = contactFormLimiter.check(testIp);
      expect(blockedResult.allowed).toBe(false);

      // Advance time by 61 seconds (past the 60s window)
      vi.advanceTimersByTime(61000);

      // Should be allowed again
      const allowedResult = contactFormLimiter.check(testIp);
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
