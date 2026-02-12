declare module '@marsidev/react-turnstile' {
  import type { FC } from 'react';

  export interface TurnstileOptions {
    theme?: 'light' | 'dark' | 'auto';
    size?: 'normal' | 'compact';
    tabindex?: number;
    responseField?: boolean;
    responseFieldName?: string;
    retry?: 'auto' | 'never';
    'retry-interval'?: number;
    language?: string;
  }

  export interface TurnstileProps {
    siteKey: string;
    onSuccess?: (token: string) => void;
    onError?: (error?: Error) => void;
    onExpire?: () => void;
    onBeforeInteractive?: () => void;
    onAfterInteractive?: () => void;
    onUnsupported?: () => void;
    options?: TurnstileOptions;
    scriptOptions?: {
      async?: boolean;
      defer?: boolean;
      appendTo?: 'head' | 'body';
      nonce?: string;
    };
    id?: string;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    style?: React.CSSProperties;
    injectScript?: boolean;
  }

  export const Turnstile: FC<TurnstileProps>;
}
