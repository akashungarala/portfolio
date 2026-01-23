'use client';

interface HighlightTextProps {
  text: string;
  highlights: string[];
  className?: string;
}

/**
 * Highlights specific keywords within text
 * Keywords are rendered with the .highlight class for accent color styling
 */
export function HighlightText({ text, highlights, className = '' }: HighlightTextProps) {
  if (!highlights || highlights.length === 0) {
    return <span className={className}>{text}</span>;
  }

  // Create a regex pattern that matches any of the highlight words (case-insensitive)
  const pattern = new RegExp(`(${highlights.map(escapeRegex).join('|')})`, 'gi');
  const parts = text.split(pattern);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
        // Using part content + index as key since parts come from deterministic split
        const key = `${part.slice(0, 10)}-${index}`;

        if (isHighlight) {
          return (
            <span key={key} className="highlight">
              {part}
            </span>
          );
        }

        return <span key={key}>{part}</span>;
      })}
    </span>
  );
}

function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
