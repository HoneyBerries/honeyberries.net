import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, StatsGrid, Button } from '../components/ui';
import { GradientBackdrop } from '../components/backgrounds';
import { TIMELINE, CURRENT_PROJECTS } from '../lib/data';
import { BACKGROUND_LAYERS } from '../lib/constants';
import { ABOUT_CONTENT } from '../lib/content';
import { gradientStyle } from '../lib/styles';
import SEO from '../components/SEO';
import { floatIn, pulse } from '../lib/animations';

/**
 * Enhanced About page component with modern design
 */
export default function About() {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="About Me"
        description="Learn more about HoneyBerries, a developer passionate about building sleek, performant web apps, Minecraft plugins, and AI bots."
        ogImage="/assets/backgrounds/home-banner.webp"
        pathname="/about"
      />
      <GradientBackdrop layers={BACKGROUND_LAYERS.about} />

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-16" role="main">
        <AboutHeader />
        <AboutStats />
        <SkillsSection />
        <Timeline />
        <CurrentProjects />
      </main>
    </div>
  );
}

/**
 * Enhanced about page header with better introduction
 */
function AboutHeader() {
  return (
    <motion.div className="text-center mb-16" {...floatIn(0)}>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 mb-6">
        <motion.span className="w-2 h-2 rounded-full bg-emerald-500" {...pulse()} />
        <span className="text-sm font-medium text-emerald-700">{ABOUT_CONTENT.badgeLabel}</span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        {ABOUT_CONTENT.introTitle.replace("HoneyBerries", '')}
        <span className="accent-text">HoneyBerries</span>
      </h1>
      <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
        {ABOUT_CONTENT.introLead}
      </p>
      <p className="text-gray-500 max-w-2xl mx-auto">
        {ABOUT_CONTENT.introBody}
      </p>
    </motion.div>
  );
}

/**
 * Quick stats about experience and projects
 */
function AboutStats() {
  return (
    <motion.div className="mb-16" {...floatIn(0.2)}>
      <StatsGrid
        items={ABOUT_CONTENT.stats}
        animationStart={0.2}
        animationStep={0.1}
      />
    </motion.div>
  );
}

/**
 * Skills and technologies section
 */
function SkillsSection() {
  return (
    <motion.div className="mb-16" {...floatIn(0.2)}>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Skills & Technologies</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {ABOUT_CONTENT.skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            className="card-lift p-6"
            {...floatIn(0.3 + index * 0.1)}
          >
            <div className={`w-12 h-12 bg-linear-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Enhanced timeline section with better visual design
 */
function Timeline() {
  return (
    <motion.div className="mb-16" {...floatIn(0.3)}>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">My Journey</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500 to-blue-500"></div>
        
        <div className="space-y-8">
          {TIMELINE.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
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
    <motion.div 
      className="relative card-lift p-6 ml-16"
      {...floatIn(0.4 + index * 0.1)}
    >
      {/* Timeline dot */}
      <div className="absolute -left-20 top-6 w-4 h-4 bg-linear-to-r from-emerald-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
      
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium whitespace-nowrap">
          {item.time}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

/**
 * Enhanced current projects section
 */
function CurrentProjects() {
  return (
    <motion.div {...floatIn(0.4)}>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What I'm Working On</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {CURRENT_PROJECTS.map((project, index) => (
          <motion.div key={project} {...floatIn(0.5 + index * 0.1)}>
            <Card className="card-lift p-6">
              <div className="flex items-start gap-3">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-gray-700 leading-relaxed flex-1">
                  {project}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Call to action */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          {ABOUT_CONTENT.cta.message}
        </p>
        <Button
          as={Link}
          to={ABOUT_CONTENT.cta.buttonTo}
          variant="primary"
          style={gradientStyle(ABOUT_CONTENT.cta.gradientKey)}
        >
          <span>{ABOUT_CONTENT.cta.buttonLabel}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Button>
      </div>
    </motion.div>
  );
}