import { describe, expect, it } from 'vitest';
import { cn } from '@/lib/utils';

describe('utils', () => {
  describe('cn (className merge utility)', () => {
    it('should merge class names correctly', () => {
      const result = cn('px-4', 'py-2');
      expect(result).toBe('px-4 py-2');
    });

    it('should handle conditional classes', () => {
      const isActive = true;
      const result = cn('base-class', isActive && 'active-class');
      expect(result).toBe('base-class active-class');
    });

    it('should handle falsy values', () => {
      const result = cn('base', false, null, undefined, 'end');
      expect(result).toBe('base end');
    });

    it('should merge conflicting Tailwind classes correctly', () => {
      // twMerge should keep the last conflicting class
      const result = cn('px-4', 'px-8');
      expect(result).toBe('px-8');
    });

    it('should handle arrays of classes', () => {
      const result = cn(['px-4', 'py-2'], 'mx-auto');
      expect(result).toBe('px-4 py-2 mx-auto');
    });
  });
});
