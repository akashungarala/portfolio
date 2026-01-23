import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { GitHubActivity } from '@/components/sections/GitHubActivity';
import { Hero } from '@/components/sections/Hero';
import { getFeaturedProjects, getProfileContent } from '@/lib/get-content';

export default function Home() {
  const content = getProfileContent();
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero content={content} />
      <About content={content} />
      <Experience content={content} />
      <FeaturedProjects projects={featuredProjects} />
      <GitHubActivity />
      <Contact content={content} />
    </>
  );
}
