'use client';

import { ArrowUpRight, Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { FadeIn } from '@/components/motion';
import type { ProfileContent } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ContactProps {
  content: ProfileContent;
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission with Resend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
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
                    className={cn(
                      'w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm',
                      'placeholder:text-muted-foreground/50',
                      'focus:outline-none focus:border-border focus:ring-1 focus:ring-ring/20',
                      'transition-colors',
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
                    className={cn(
                      'w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm',
                      'placeholder:text-muted-foreground/50',
                      'focus:outline-none focus:border-border focus:ring-1 focus:ring-ring/20',
                      'transition-colors',
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
                  rows={4}
                  className={cn(
                    'w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm',
                    'placeholder:text-muted-foreground/50',
                    'focus:outline-none focus:border-border focus:ring-1 focus:ring-ring/20',
                    'transition-colors resize-none',
                  )}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2',
                  'bg-foreground text-background text-sm font-medium',
                  'hover:bg-foreground/90 transition-colors',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
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
