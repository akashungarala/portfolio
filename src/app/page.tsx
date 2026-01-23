import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { GitHubActivity } from '@/components/sections/GitHubActivity';
import { Hero } from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <GitHubActivity />
      <Contact />
    </>
  );
}
