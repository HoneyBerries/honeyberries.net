import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import githubIcon from '../assets/icons/github-icon.svg';
import { PROJECTS } from '../lib/data';

/**
 * Projects page component
 */
export default function Projects() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <ProjectsHeader />
        <ProjectsGrid />
      </section>
      <Footer />
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
        <h1 className="text-3xl sm:text-4xl font-bold">My <span className="accent-text">Projects</span></h1>
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
          className="whitespace-nowrap rounded-full px-3 py-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 group"
        >
          <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-3 h-3 opacity-80 group-hover:opacity-100 transition-opacity duration-150"
            />
          </span>
          <span className="ml-1">View GitHub</span>
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

  {/* Plugins are now shown on their own page (/projects/minecraft-plugins) */}
    </div>
  );
}
