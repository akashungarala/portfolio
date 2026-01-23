'use client';

import { GitBranch, Github } from 'lucide-react';
import { FadeIn } from '@/components/motion';
import type { GitHubCommit } from '@/lib/github';
import { formatRelativeTime } from '@/lib/github';
import { cn } from '@/lib/utils';

interface GitHubActivityClientProps {
  commits: GitHubCommit[];
}

export function GitHubActivityClient({ commits }: GitHubActivityClientProps) {
  return (
    <section id="github" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Activity
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">Recent Commits</h2>
            </div>
            <a
              href="https://github.com/akashungarala"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5 text-sm',
                'text-muted-foreground hover:text-foreground transition-colors',
              )}
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </FadeIn>

        {commits.length > 0 ? (
          <div className="space-y-3">
            {commits.map((commit, index) => (
              <FadeIn key={`${commit.repo}-${commit.sha}`} delay={0.05 * index}>
                <a
                  href={commit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4',
                    'hover:border-border hover:bg-card transition-colors',
                  )}
                >
                  <div className="mt-0.5 rounded-md bg-muted/50 p-1.5">
                    <GitBranch className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-foreground group-hover:underline underline-offset-2">
                      {commit.message}
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-mono">{commit.repo}</span>
                      <span>·</span>
                      <span>{formatRelativeTime(commit.date)}</span>
                      <span className="hidden sm:inline">·</span>
                      <span className="hidden sm:inline font-mono">{commit.sha}</span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn delay={0.1}>
            <div
              className={cn(
                'flex flex-col items-center justify-center rounded-lg border border-border/50 p-8',
                'bg-card/50 text-center',
              )}
            >
              <Github className="mb-3 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">No recent activity to display.</p>
              <p className="mt-1 text-xs text-muted-foreground/75">Check back later for updates!</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
