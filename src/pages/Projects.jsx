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
        <h1 className="text-3xl sm:text-4xl font-bold">My Projects</h1>
      </div>
      <div>
        <Button 
          as="a"
          href="https://github.com/HoneyBerries"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="md"
          className="whitespace-nowrap border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md transition-all duration-200 group"
        >
          <img 
            src={githubIcon} 
            alt="GitHub" 
            className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-200" 
          />
          View My GitHub
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
