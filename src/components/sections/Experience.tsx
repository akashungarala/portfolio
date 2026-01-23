'use client';

import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
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
    <section id="experience" className="relative container py-20 md:py-32">
      {/* Background accent */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        <FadeIn>
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Career
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Experience & Education
            </h2>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="mb-10" role="tablist">
            <div className="inline-flex rounded-xl border border-border/50 bg-card/50 p-1.5 backdrop-blur-sm">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'work'}
                onClick={() => setActiveTab('work')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300',
                  activeTab === 'work'
                    ? 'gradient-bg text-white shadow-lg shadow-primary/25'
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
                  'inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300',
                  activeTab === 'education'
                    ? 'gradient-bg text-white shadow-lg shadow-primary/25'
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
            <div className="space-y-6">
              {(experienceData as ExperienceItem[]).map((item, index) => (
                <FadeIn key={item.id} delay={0.1 * index}>
                  <div
                    className={cn(
                      'group relative rounded-xl border border-border/50 p-6',
                      'bg-card/50 backdrop-blur-sm',
                      'card-hover hover:border-primary/30',
                    )}
                  >
                    {/* Gradient accent on left */}
                    <div
                      className="absolute left-0 top-0 h-full w-1 rounded-l-xl gradient-bg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-lg font-semibold text-foreground/80">
                          {item.company}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {item.startDate} - {item.endDate}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-muted-foreground leading-relaxed">{item.description}</p>

                    {item.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              {(educationData as EducationItem[]).map((item, index) => (
                <FadeIn key={item.id} delay={0.1 * index}>
                  <div
                    className={cn(
                      'group relative rounded-xl border border-border/50 p-6',
                      'bg-card/50 backdrop-blur-sm',
                      'card-hover hover:border-primary/30',
                    )}
                  >
                    {/* Gradient accent on left */}
                    <div
                      className="absolute left-0 top-0 h-full w-1 rounded-l-xl gradient-bg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.degree} in {item.field}
                        </h3>
                        <p className="mt-1 text-lg font-semibold text-foreground/80">
                          {item.school}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {item.startDate} - {item.endDate}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-muted-foreground leading-relaxed">{item.description}</p>

                    {item.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
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
