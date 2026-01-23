import { getRecentCommits } from '@/lib/github';
import { GitHubActivityClient } from './GitHubActivityClient';

export async function GitHubActivity() {
  const commits = await getRecentCommits(5);

  return <GitHubActivityClient commits={commits} />;
}
