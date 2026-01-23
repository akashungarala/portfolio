import { describe, expect, it } from 'vitest';
import { formatRelativeTime } from '@/lib/github';

describe('GitHub Utils', () => {
  describe('formatRelativeTime', () => {
    it('should return "just now" for times less than a minute ago', () => {
      const now = new Date();
      expect(formatRelativeTime(now.toISOString())).toBe('just now');
    });

    it('should return minutes ago for times less than an hour ago', () => {
      const date = new Date(Date.now() - 5 * 60 * 1000); // 5 minutes ago
      expect(formatRelativeTime(date.toISOString())).toBe('5 minutes ago');
    });

    it('should return singular minute for 1 minute ago', () => {
      const date = new Date(Date.now() - 1 * 60 * 1000); // 1 minute ago
      expect(formatRelativeTime(date.toISOString())).toBe('1 minute ago');
    });

    it('should return hours ago for times less than a day ago', () => {
      const date = new Date(Date.now() - 3 * 60 * 60 * 1000); // 3 hours ago
      expect(formatRelativeTime(date.toISOString())).toBe('3 hours ago');
    });

    it('should return singular hour for 1 hour ago', () => {
      const date = new Date(Date.now() - 1 * 60 * 60 * 1000); // 1 hour ago
      expect(formatRelativeTime(date.toISOString())).toBe('1 hour ago');
    });

    it('should return days ago for times less than a week ago', () => {
      const date = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000); // 3 days ago
      expect(formatRelativeTime(date.toISOString())).toBe('3 days ago');
    });

    it('should return weeks ago for times less than a month ago', () => {
      const date = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000); // 2 weeks ago
      expect(formatRelativeTime(date.toISOString())).toBe('2 weeks ago');
    });

    it('should return months ago for older times', () => {
      const date = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000); // ~2 months ago
      expect(formatRelativeTime(date.toISOString())).toBe('2 months ago');
    });
  });
});
