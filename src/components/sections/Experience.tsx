'use client';

import { Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { FadeIn } from '@/components/motion';
import educationData from '@/data/education.json';
import experienceData from '@/data/experience.json';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

interface EducationItem {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

type TabType = 'work' | 'education';

export function Experience() {
  const [activeTab, setActiveTab] = useState<TabType>('work');

  return (
    <section id="experience" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="mb-8" role="tablist">
            <div className="inline-flex rounded-lg border border-border p-1">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'work'}
                onClick={() => setActiveTab('work')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors',
                  activeTab === 'work'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <Briefcase className="h-4 w-4" />
                Work
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'education'}
                onClick={() => setActiveTab('education')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors',
                  activeTab === 'education'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <GraduationCap className="h-4 w-4" />
                Education
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Content */}
        <div role="tabpanel">
          {activeTab === 'work' && (
            <div className="space-y-8">
              {(experienceData as ExperienceItem[]).map((item, index) => (
                <FadeIn key={item.id} delay={0.1 * index}>
                  <div className="relative pl-8 pb-8 last:pb-0">
                    {/* Timeline line */}
                    {index < experienceData.length - 1 && (
                      <div className="absolute left-[11px] top-3 h-full w-px bg-border" />
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-background" />

                    {/* Content */}
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className="text-muted-foreground">@</span>
                        <span className="font-medium text-foreground">{item.company}</span>
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {item.startDate} - {item.endDate} • {item.location}
                      </p>
                      <p className="mb-3 text-muted-foreground">{item.description}</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="text-primary">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {(educationData as EducationItem[]).map((item, index) => (
                <FadeIn key={item.id} delay={0.1 * index}>
                  <div className="relative pl-8 pb-8 last:pb-0">
                    {/* Timeline line */}
                    {index < educationData.length - 1 && (
                      <div className="absolute left-[11px] top-3 h-full w-px bg-border" />
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-primary bg-background" />

                    {/* Content */}
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-foreground">{item.degree}</h3>
                        <span className="text-muted-foreground">in</span>
                        <span className="font-medium text-foreground">{item.field}</span>
                      </div>
                      <p className="mb-1 text-foreground">{item.school}</p>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {item.startDate} - {item.endDate} • {item.location}
                      </p>
                      <p className="mb-3 text-muted-foreground">{item.description}</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span className="text-primary">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
