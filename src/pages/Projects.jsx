import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
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
        <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
        <p className="mt-2 text-gray-600">Selected work with hover effects and links.</p>
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
    </div>
  );
}
