'use client';

import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    href: 'https://github.com/akashungarala',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/akashungarala',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:akash.ungarala@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];

export function Contact() {
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
    // For now, just simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out through the form below
            or connect with me on social media.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
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
                    'w-full rounded-md border border-input bg-background px-4 py-2',
                    'text-foreground placeholder:text-muted-foreground',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    'focus:ring-offset-background transition-colors',
                  )}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
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
                    'w-full rounded-md border border-input bg-background px-4 py-2',
                    'text-foreground placeholder:text-muted-foreground',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    'focus:ring-offset-background transition-colors',
                  )}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    'w-full rounded-md border border-input bg-background px-4 py-2',
                    'text-foreground placeholder:text-muted-foreground',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    'focus:ring-offset-background transition-colors resize-none',
                  )}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3',
                  'bg-primary text-primary-foreground font-medium',
                  'hover:bg-primary/90 transition-colors',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                )}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div
                className={cn(
                  'rounded-lg border border-border/50 p-6',
                  'bg-card/50 backdrop-blur-sm',
                )}
              >
                <h3 className="mb-4 font-semibold text-foreground">Connect With Me</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision.
                </p>

                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'flex items-center gap-3 text-sm',
                        'text-muted-foreground hover:text-foreground transition-colors',
                      )}
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div
                className={cn(
                  'rounded-lg border border-border/50 p-6',
                  'bg-card/50 backdrop-blur-sm',
                )}
              >
                <h3 className="mb-2 font-semibold text-foreground">Email</h3>
                <a
                  href="mailto:akash.ungarala@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  akash.ungarala@gmail.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
