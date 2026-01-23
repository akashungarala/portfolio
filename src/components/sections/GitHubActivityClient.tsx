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
    <section id="github" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recent Activity</h2>
            <a
              href="https://github.com/akashungarala"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 text-sm font-medium',
                'text-muted-foreground hover:text-foreground transition-colors',
              )}
            >
              <Github className="h-4 w-4" />
              View GitHub
            </a>
          </div>
        </FadeIn>

        {commits.length > 0 ? (
          <div className="space-y-4">
            {commits.map((commit, index) => (
              <FadeIn key={`${commit.repo}-${commit.sha}`} delay={0.1 * index}>
                <a
                  href={commit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group flex items-start gap-4 rounded-lg border border-border/50 p-4',
                    'bg-card/50 backdrop-blur-sm',
                    'hover:border-border hover:bg-card transition-colors',
                  )}
                >
                  <div className="mt-1 rounded-full bg-muted p-2">
                    <GitBranch className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {commit.message}
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-mono">{commit.repo}</span>
                      <span>•</span>
                      <span>{formatRelativeTime(commit.date)}</span>
                      <span>•</span>
                      <span className="font-mono">{commit.sha}</span>
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
                'bg-card/50 backdrop-blur-sm text-center',
              )}
            >
              <Github className="mb-4 h-12 w-12 text-muted-foreground/50" />
              <p className="text-muted-foreground">No recent activity to display.</p>
              <p className="mt-1 text-sm text-muted-foreground/75">Check back later for updates!</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
