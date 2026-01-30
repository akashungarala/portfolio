'use client';

import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FadeIn } from '@/components/motion';
import type { ProfileContent } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ExperienceProps {
  content: ProfileContent;
}

export function Experience({ content }: ExperienceProps) {
  const { workExperience, education } = content;
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const tabs = [
    { id: 'work' as const, label: 'Work', icon: Briefcase },
    { id: 'education' as const, label: 'Education', icon: GraduationCap },
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--highlight)]">
              Background
            </p>
            <h2 className="section-title">Experience & Education</h2>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="mb-8 flex gap-1" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-3 py-1.5',
                  'text-sm font-medium transition-all duration-200',
                  activeTab === tab.id
                    ? 'bg-[var(--highlight)] text-white shadow-md shadow-[var(--highlight)]/20'
                    : 'text-muted-foreground hover:text-[var(--highlight)] hover:bg-[var(--highlight)]/10',
                )}
              >
                <tab.icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Work Experience */}
        <div role="tabpanel">
          {activeTab === 'work' && (
            <FadeIn delay={0.2}>
              <div className="space-y-0">
                {workExperience.map((job) => (
                  <div key={job.id} className="timeline-item">
                    <div className="flex items-start gap-3 mb-2">
                      {job.logo && (
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted/50 p-1.5 flex items-center justify-center">
                          <Image
                            src={job.logo}
                            alt={job.company}
                            width={28}
                            height={28}
                            className="text-foreground"
                          />
                        </div>
                      )}
                      <div className="flex flex-col gap-0.5">
                        <h3 className="font-medium">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {job.company} · {job.location}
                        </p>
                        <p className="text-xs text-muted-foreground/75">
                          {job.startDate} — {job.endDate}
                        </p>
                      </div>
                    </div>

                    <p className="mb-2 text-sm text-muted-foreground leading-relaxed">
                      {job.description.trim()}
                    </p>

                    <ul className="space-y-1 mb-3">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight.trim()}</span>
                        </li>
                      ))}
                    </ul>

                    {job.projectId && (
                      <Link
                        href={`/projects/${job.projectId}`}
                        className={cn(
                          'inline-flex items-center gap-1.5 text-sm font-medium',
                          'text-[var(--highlight)] hover:underline underline-offset-4',
                        )}
                      >
                        View Project
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <FadeIn delay={0.2}>
              <div className="space-y-0">
                {education.map((edu) => (
                  <div key={edu.id} className="timeline-item">
                    <div className="flex items-start gap-3 mb-2">
                      {edu.logo && (
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted/50 p-1.5 flex items-center justify-center">
                          <Image
                            src={edu.logo}
                            alt={edu.school}
                            width={28}
                            height={28}
                            className="text-foreground"
                          />
                        </div>
                      )}
                      <div className="flex flex-col gap-0.5">
                        <h3 className="font-medium">
                          {edu.degree} in {edu.field}
                        </h3>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                        <p className="text-xs text-muted-foreground/75">
                          {edu.startDate} — {edu.endDate} · {edu.location}
                        </p>
                      </div>
                    </div>

                    <p className="mb-2 text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    <ul className="space-y-1">
                      {edu.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
