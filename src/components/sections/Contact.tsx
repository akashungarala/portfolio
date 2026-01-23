'use client';

import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    href: 'https://github.com/akashungarala',
    label: 'GitHub',
    username: '@akashungarala',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/akashungarala',
    label: 'LinkedIn',
    username: '/in/akashungarala',
    icon: Linkedin,
  },
  {
    href: 'mailto:akash.ungarala@gmail.com',
    label: 'Email',
    username: 'akash.ungarala@gmail.com',
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
    <section id="contact" className="relative container py-20 md:py-32">
      {/* Background accent */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s <span className="gradient-text">work together</span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
              Have a question or want to collaborate? I&apos;m always open to discussing new
              projects, creative ideas, or opportunities.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <div
                className={cn(
                  'rounded-xl border border-border/50 p-6 sm:p-8',
                  'bg-card/80 backdrop-blur-sm',
                )}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
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
                          'w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3',
                          'text-foreground placeholder:text-muted-foreground',
                          'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
                          'transition-all duration-200',
                        )}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
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
                          'w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3',
                          'text-foreground placeholder:text-muted-foreground',
                          'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
                          'transition-all duration-200',
                        )}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
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
                        'w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3',
                        'text-foreground placeholder:text-muted-foreground',
                        'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
                        'transition-all duration-200 resize-none',
                      )}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'group w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4',
                      'gradient-bg text-white font-semibold',
                      'shadow-lg shadow-primary/25',
                      'hover:shadow-xl hover:shadow-primary/30',
                      'transition-all duration-300',
                      'disabled:opacity-50 disabled:cursor-not-allowed',
                      'btn-shine',
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
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
              <div
                className={cn(
                  'rounded-xl border border-border/50 p-6',
                  'bg-card/80 backdrop-blur-sm',
                  'card-hover',
                )}
              >
                <h3 className="mb-4 text-lg font-bold text-foreground">Connect with me</h3>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  Feel free to reach out through any of these platforms. I typically respond within
                  24 hours.
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
                        'hover:bg-primary/5 transition-colors',
                      )}
                      aria-label={link.label}
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-muted p-2">
                          <link.icon className="h-5 w-5 text-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{link.label}</p>
                          <p className="text-sm text-muted-foreground">{link.username}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div
                className={cn(
                  'rounded-xl p-6',
                  'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent',
                  'border border-primary/20',
                )}
              >
                <p className="text-sm font-semibold text-primary">Current availability</p>
                <p className="mt-2 text-foreground font-medium">Open to new opportunities</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Looking for senior backend or platform engineering roles.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
