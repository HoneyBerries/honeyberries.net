import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { TIMELINE, CURRENT_PROJECTS } from '../lib/data';

/**
 * Enhanced About page component with modern design
 */
export default function About() {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-200/20 to-teal-200/15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-blue-200/20 to-indigo-200/15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-16" role="main">
        <AboutHeader />
        <AboutStats />
        <SkillsSection />
        <Timeline />
        <CurrentProjects />
      </main>
      <Footer />
    </div>
  );
}

/**
 * Enhanced about page header with better introduction
 */
function AboutHeader() {
  return (
    <div className="text-center mb-16 animate-floatIn">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-sm font-medium text-emerald-700">Developer & Creator</span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Hi, I'm <span className="accent-text">HoneyBerries</span>
      </h1>
      <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
        I'm a passionate developer who loves building sleek, performant experiences that make a difference. 
        I work across various projects using modern programming languages and technologies.
      </p>
      <p className="text-gray-500 max-w-2xl mx-auto">
        From Minecraft plugins that enhance gameplay for thousands of players, to AI-powered Discord bots 
        that help communities thrive, I enjoy creating tools that bring people together and solve real problems.
      </p>
    </div>
  );
}

/**
 * Quick stats about experience and projects
 */
function AboutStats() {
  const stats = [
    { label: 'Years Coding', value: '5+', icon: '💻', color: 'text-blue-600' },
    { label: 'Projects Built', value: '20+', icon: '🚀', color: 'text-emerald-600' },
    { label: 'Languages Used', value: '8+', icon: '⚡', color: 'text-purple-600' },
    { label: 'Communities Helped', value: '50+', icon: '🌟', color: 'text-orange-600' }
  ];

  return (
    <div className="mb-16 animate-floatIn" style={{ animationDelay: '0.1s' }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className={`text-2xl mb-2 ${stat.color}`} aria-hidden="true">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Skills and technologies section
 */
function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'C++', 'C#', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frameworks & Tools',
      skills: ['React', 'Node.js', 'Spring Boot', 'Docker', 'Git', 'Gradle', 'Maven'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Specialties',
      skills: ['Minecraft Development', 'Discord Bots', 'AI Integration', 'Web Applications', 'Backend Systems', 'Community Tools', 'General Programming'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div className="mb-16 animate-floatIn" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Skills & Technologies</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
              <span className="text-white font-bold text-lg">
                {category.title.charAt(0)}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Enhanced timeline section with better visual design
 */
function Timeline() {
  return (
    <div className="mb-16 animate-floatIn" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">My Journey</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>
        
        <div className="space-y-8">
          {TIMELINE.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Enhanced timeline item component with modern styling
 */
function TimelineItem({ item, index }) {
  const description = item.hasLink ? (
    <>
      {item.desc.split(item.linkText)[0]}
      {item.linkUrl && item.linkUrl.startsWith('/') ? (
        <Link to={item.linkUrl} className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-colors">{item.linkText}</Link>
      ) : (
        <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-colors">{item.linkText}</a>
      )}
      {item.desc.split(item.linkText)[1]}
    </>
  ) : item.desc;

  return (
    <div 
      className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 ml-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
      
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium whitespace-nowrap">
          {item.time}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

/**
 * Enhanced current projects section
 */
function CurrentProjects() {
  return (
    <div className="animate-floatIn" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What I'm Working On</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {CURRENT_PROJECTS.map((project, index) => (
          <Card 
            key={project} 
            className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 group-hover:scale-125 transition-transform duration-300"></div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {project}
              </p>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Call to action */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          Interested in collaborating or learning more about my work?
        </p>
        <Link 
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>Get In Touch</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}