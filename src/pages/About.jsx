import Footer from '../components/Footer';
import Timeline from '../components/ui/Timeline';
import Card from '../components/ui/Card';
import { timeline, currentProjects } from '../constants';

export default function About() {
  return (
    <>
      <section className="section-container">
        <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
        <p className="mt-3 text-gray-600">
          Hi, I'm HoneyBerries — a developer who enjoys building sleek, performant experiences.
          I work across various projects using modern programming languages, including but not limited to Python, Java, C++, C#, etc.
        </p>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Timeline</h2>
          <div className="mt-3">
            <Timeline items={timeline} />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">What I'm working on now</h2>
          <div className="mt-3 grid sm:grid-cols-2 gap-4">
            {currentProjects.map((project) => (
              <Card key={project} hover>
                <p className="text-sm text-gray-700">{project}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}