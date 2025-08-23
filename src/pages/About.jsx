import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { TIMELINE, CURRENT_PROJECTS } from '../lib/data';

/**
 * About page component
 */
export default function About() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <AboutHeader />
        <Timeline />
        <CurrentProjects />
      </section>
      <Footer />
    </>
  );
}

/**
 * About page header with introduction
 */
function AboutHeader() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
      <p className="mt-3 text-gray-600">
        Hi, I'm HoneyBerries — a developer who enjoys building sleek, performant experiences.
        I work across various projects using modern programming languages, including but not limited to Python, Java, C++, C#, etc.
      </p>
    </div>
  );
}

/**
 * Timeline section displaying career milestones
 */
function Timeline() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold">Timeline</h2>
      <ol className="mt-3 space-y-4 border-l border-gray-200 pl-4" role="list">
        {TIMELINE.map(item => (
          <TimelineItem key={item.title} item={item} />
        ))}
      </ol>
    </div>
  );
}

/**
 * Individual timeline item component
 */
function TimelineItem({ item }) {
  const description = item.hasLink ? (
    <>
      {item.desc.split(item.linkText)[0]}
      {item.linkUrl && item.linkUrl.startsWith('/') ? (
        <Link to={item.linkUrl} className="text-emerald-600 hover:underline">{item.linkText}</Link>
      ) : (
        <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">{item.linkText}</a>
      )}
      {item.desc.split(item.linkText)[1]}
    </>
  ) : item.desc;

  return (
    <li className="relative">
      <span 
        className="absolute -left-2 top-1 w-1.5 h-1.5 rounded-full bg-emerald-500" 
        aria-hidden="true"
      ></span>
      <div>
        <div className="text-sm text-gray-500">{item.time}</div>
        <div className="font-semibold">{item.title}</div>
        <div className="text-sm text-gray-600">{description}</div>
      </div>
    </li>
  );
}

/**
 * Current projects section
 */
function CurrentProjects() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold">What I'm working on now</h2>
      <div className="mt-3 grid sm:grid-cols-2 gap-4">
        {CURRENT_PROJECTS.map(project => (
          <Card key={project} className="bg-white/80 backdrop-blur-sm p-4">
            <p className="text-sm text-gray-700">{project}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}