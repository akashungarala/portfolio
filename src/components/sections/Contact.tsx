'use client';

import { ArrowUpRight, CheckCircle, Github, Linkedin, Mail, Send, XCircle } from 'lucide-react';
import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { FadeIn } from '@/components/motion';
import type { ProfileContent } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ContactProps {
  content: ProfileContent;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact({ content }: ContactProps) {
  const { email, social, contact: contactInfo } = content;

  const socialLinks = [
    {
      href: social.github,
      label: 'GitHub',
      username: '@akashungarala',
      icon: Github,
    },
    {
      href: social.linkedin,
      label: 'LinkedIn',
      username: '/in/akashungarala',
      icon: Linkedin,
    },
    {
      href: `mailto:${email}`,
      label: 'Email',
      username: email,
      icon: Mail,
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Check if Turnstile is required but not completed
    if (turnstileSiteKey && !turnstileToken) {
      setStatus('error');
      setErrorMessage('Please complete the CAPTCHA verification');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken: turnstileToken || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTurnstileToken(null);

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');

      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--highlight)]">
              Contact
            </p>
            <h2 className="section-title">{contactInfo.heading}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {contactInfo.description.trim()}
            </p>
          </div>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.1}>
          <div className="mb-8 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group inline-flex items-center gap-2 rounded-md px-3 py-1.5',
                  'bg-muted/50 border border-border/50',
                  'hover:bg-muted hover:border-border transition-colors',
                  'text-sm',
                )}
                aria-label={link.label}
              >
                <link.icon className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{link.label}</span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn delay={0.2}>
          <div className="rounded-lg border border-border/50 bg-card/50 p-6">
            <h3 className="mb-4 text-sm font-medium">Send a Message</h3>

            {/* Success Message */}
            {status === 'success' && (
              <div className="mb-4 flex items-center gap-2 rounded-md bg-green-500/10 border border-green-500/20 px-4 py-3 text-sm text-green-600 dark:text-green-400">
                <CheckCircle className="h-4 w-4" />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="mb-4 flex items-center gap-2 rounded-md bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                <XCircle className="h-4 w-4" />
                {errorMessage || 'Failed to send message. Please try again.'}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                    className={cn(
                      'w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm',
                      'placeholder:text-muted-foreground/50',
                      'focus:outline-none focus:border-border focus:ring-1 focus:ring-ring/20',
                      'transition-colors',
                      'disabled:opacity-50 disabled:cursor-not-allowed',
                    )}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                    className={cn(
                      'w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm',
                      'placeholder:text-muted-foreground/50',
                      'focus:outline-none focus:border-border focus:ring-1 focus:ring-ring/20',
                      'transition-colors',
                      'disabled:opacity-50 disabled:cursor-not-allowed',
                    )}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  rows={4}
                  className={cn(
                    'w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm',
                    'placeholder:text-muted-foreground/50',
                    'focus:outline-none focus:border-border focus:ring-1 focus:ring-ring/20',
                    'transition-colors resize-none',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                  )}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Cloudflare Turnstile CAPTCHA */}
              {turnstileSiteKey && (
                <div className="flex justify-center">
                  <Turnstile
                    siteKey={turnstileSiteKey}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => {
                      setTurnstileToken(null);
                      setStatus('error');
                      setErrorMessage('CAPTCHA verification failed. Please refresh and try again.');
                    }}
                    onExpire={() => setTurnstileToken(null)}
                    options={{
                      theme: 'auto',
                      size: 'normal',
                    }}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting' || (turnstileSiteKey ? !turnstileToken : false)}
                className={cn(
                  'group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5',
                  'bg-foreground text-background text-sm font-medium',
                  'hover:bg-[var(--highlight)] hover:scale-105',
                  'transition-all duration-300 ease-out',
                  'shadow-lg hover:shadow-xl hover:shadow-[var(--highlight)]/20',
                  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-foreground',
                )}
              >
                {status === 'submitting' ? (
                  <>
                    <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </FadeIn>

        {/* Availability */}
        <FadeIn delay={0.3}>
          <div className="mt-6 rounded-lg bg-muted/30 border border-border/30 p-4">
            <p className="text-xs text-muted-foreground mb-1">Current availability</p>
            <p className="text-sm">{contactInfo.availability}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
