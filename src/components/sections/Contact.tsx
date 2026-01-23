'use client';

import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';
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
    <section id="contact" className="relative container section-padding">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Contact
            </p>
            <h2>{contactInfo.heading}</h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
              {contactInfo.description.trim()}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <div className={cn('rounded-xl border border-border p-6 sm:p-8', 'bg-card')}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-secondary p-2.5">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
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
                          'w-full rounded-lg border border-border bg-background px-4 py-3',
                          'placeholder:text-muted-foreground',
                          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
                          'transition-all',
                        )}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
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
                          'w-full rounded-lg border border-border bg-background px-4 py-3',
                          'placeholder:text-muted-foreground',
                          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
                          'transition-all',
                        )}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
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
                        'w-full rounded-lg border border-border bg-background px-4 py-3',
                        'placeholder:text-muted-foreground',
                        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
                        'transition-all resize-none',
                      )}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3',
                      'bg-primary text-primary-foreground font-medium',
                      'hover:opacity-90 transition-opacity',
                      'disabled:opacity-50 disabled:cursor-not-allowed',
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn delay={0.2}>
              <div className={cn('rounded-xl border border-border p-6', 'bg-card', 'card-hover')}>
                <h3 className="mb-4 text-lg font-semibold">Connect with me</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Feel free to reach out through any of these platforms.
                </p>

                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'group flex items-center justify-between rounded-lg p-3 -mx-3',
                        'hover:bg-secondary transition-colors',
                      )}
                      aria-label={link.label}
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-secondary p-2">
                          <link.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{link.label}</p>
                          <p className="text-xs text-muted-foreground">{link.username}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className={cn('rounded-xl p-6', 'bg-secondary border border-border')}>
                <p className="text-sm font-medium text-muted-foreground">Current availability</p>
                <p className="mt-2 font-medium">{contactInfo.availability}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
