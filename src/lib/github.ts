const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'akashungarala';

export interface GitHubCommit {
  sha: string;
  message: string;
  date: string;
  repo: string;
  url: string;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  payload: {
    commits?: Array<{
      sha: string;
      message: string;
      url: string;
    }>;
  };
  created_at: string;
}

/**
 * Fetches recent public commits from GitHub
 * Uses the Events API to get push events with commits
 */
export async function getRecentCommits(limit = 5): Promise<GitHubCommit[]> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App',
    };

    // Add auth token if available (increases rate limit from 60 to 5000 requests/hour)
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/events/public`, {
      headers,
      next: {
        revalidate: 3600, // Cache for 1 hour (ISR)
      },
    });

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      return [];
    }

    const events: GitHubEvent[] = await response.json();

    // Filter for push events and extract commits
    const commits: GitHubCommit[] = [];

    for (const event of events) {
      if (event.type === 'PushEvent' && event.payload.commits) {
        for (const commit of event.payload.commits) {
          commits.push({
            sha: commit.sha.substring(0, 7),
            message: commit.message.split('\n')[0], // First line only
            date: event.created_at,
            repo: event.repo.name.replace(`${GITHUB_USERNAME}/`, ''),
            url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
          });

          if (commits.length >= limit) {
            return commits;
          }
        }
      }
    }

    return commits;
  } catch (error) {
    console.error('Error fetching GitHub commits:', error);
    return [];
  }
}

/**
 * Formats a date string to a relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} week${diffInWeeks === 1 ? '' : 's'} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`;
}
