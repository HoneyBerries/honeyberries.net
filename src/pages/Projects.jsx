import { ProjectCard } from '../components/cards';
import { Button } from '../components/ui';
import { PROJECTS } from '../lib/data';
import { ICON_PATHS } from '../lib/constants';
import { PROJECTS_COPY } from '../lib/content';
import SEO from '../components/SEO';

/**
 * Projects page component
 */
export default function Projects() {
  return (
    <>
      <SEO
        title="Projects — HoneyBerries"
        description="A list of projects, Minecraft plugins, and tools built by HoneyBerries."
        ogImage="/assets/backgrounds/modcord-background.webp"
        pathname="/projects"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://honeyberries.net/" },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://honeyberries.net/projects" }
          ]
        }}
      />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <ProjectsHeader />
        <ProjectsGrid />
      </section>
    </>
  );
}

/**
 * Projects page header
 */
function ProjectsHeader() {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold"><span className="accent-text">My Projects</span></h1>
      </div>
      <div>
        <Button
          as="a"
          href="https://github.com/HoneyBerries"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View HoneyBerries on GitHub"
          variant="secondary"
          size="sm"
          className="whitespace-nowrap rounded-full px-3 py-2 group"
        >
          <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
            <img
              src={ICON_PATHS.github}
              alt="GitHub"
              className="w-3 h-3 opacity-80 group-hover:opacity-100 transition-opacity duration-150"
            />
          </span>
          <span className="ml-1">{PROJECTS_COPY.githubCtaLabel}</span>
        </Button>
      </div>
    </div>
  );
}

/**
 * Projects grid display
 */
function ProjectsGrid() {
  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}

      {/* Mods and plugins are now shown on their own page (/projects/minecraft-mods-plugins) */}
    </div>
  );
}
