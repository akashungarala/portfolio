'use client';

import { Briefcase, GraduationCap } from 'lucide-react';
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
    <section id="experience" className="relative container section-padding">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Background
            </p>
            <h2>Experience & Education</h2>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="mb-10 flex gap-2" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-lg px-4 py-2',
                  'text-sm font-medium transition-colors',
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                )}
              >
                <tab.icon className="h-4 w-4" />
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
                    <div className="flex flex-col gap-1 mb-3">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <span className="text-muted-foreground">at</span>
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span>
                          {job.startDate} — {job.endDate}
                        </span>
                        <span>·</span>
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <p className="mb-3 text-muted-foreground">{job.description.trim()}</p>

                    <ul className="space-y-2">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
                          <span>{highlight.trim()}</span>
                        </li>
                      ))}
                    </ul>
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
                    <div className="flex flex-col gap-1 mb-3">
                      <h3 className="text-lg font-semibold">
                        {edu.degree} in {edu.field}
                      </h3>
                      <div className="font-medium">{edu.school}</div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span>
                          {edu.startDate} — {edu.endDate}
                        </span>
                        <span>·</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="mb-3 text-muted-foreground">{edu.description}</p>

                    <ul className="space-y-2">
                      {edu.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
                          <span>{highlight}</span>
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
