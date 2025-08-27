import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ProjectItem {
  id: number;
  name: string;            // Project name
  period: string;          // e.g., "Jun 2025 – Aug 2025"
  tech: string[];          // badges
  bullets: string[];       // highlights
  live?: string;           // live url
  github?: string;         // repo url
  location?: string;       // optional
}

const projects: ProjectItem[] = [
  {
    id: 1,
    name: 'AI Trip Planner',
    period: 'Jun 2025 – Aug 2025',
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Gemini API', 'Mapbox', 'Convex', 'Clerk', 'Vercel'],
    bullets: [
      'AI-driven trip planner generating personalized itineraries tailored to user preferences.',
      'Used Gemini API for intelligent destination, activity, and schedule recommendations.',
      'Integrated Mapbox for interactive maps, routes, and location-based exploration.',
      'Implemented Convex for data management and Clerk for secure auth.',
    ],
    live: 'https://wayquestai.vercel.app',
    github: 'https://github.com/MKG0007/Ai-Trip-Planner',
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    period: 'Feb 2025 – Mar 2025',
    tech: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Vercel'],
    bullets: [
      'Scalable full-stack app with browsing, cart, checkout, and auth workflows.',
      'Designed REST API with 15+ endpoints for products, users, orders, and transactions.',
      'Optimized performance and responsiveness across devices; centralized state via Redux Toolkit.',
    ],
    live: 'https://swiftcarttt.vercel.app',
    github: 'https://github.com/MKG0007/ecommerce-website',
  },
  {
    id: 3,
    name: 'Movie Blogging Platform',
    period: 'Nov 2024 – Dec 2024',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'OGL (WebGL)', 'EmailJS'],
    bullets: [
      'Responsive blogging platform with dynamic movie reviews and intuitive navigation.',
      '3D hero and gallery with OGL (WebGL); micro-interactions via Framer Motion.',
      'Serverless contact with EmailJS for instant communication.',
    ],
    live: 'https://flicktalesblogs.vercel.app',
    github: 'https://github.com/MKG0007/flicktales-cinema-blog',
  },
];

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" subtitle="Selected work" />

        <div ref={ref} className="mt-12 relative">
          {/* Vertical timeline */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {projects.map((p, index) => (
            <div
              key={p.id}
              className={`mb-12 md:mb-0 relative transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms`, minHeight: '220px' }}
            >
              <div className="md:flex md:items-start md:justify-between md:w-full relative">
                {/* Card */}
                <div
                  className={`md:w-1/2 mt-6 relative z-10 ${
                    index % 2 === 0 ? 'md:mr-auto pr-1' : 'md:ml-auto pl-1'
                  }`}
                >
                  <div className="rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                    {/* Accent top border */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-t-xl" />

                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg">
                          <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {p.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-4 mt-1">
                            <span className="inline-flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {p.period}
                            </span>
                            {p.location ? (
                              <span className="inline-flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {p.location}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        {p.bullets.map((b, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mt-2 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTAs */}
                      <div className="mt-5 flex flex-wrap gap-3">
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition"
                          >
                            Live Demo
                          </a>
                        )}
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-600 shadow z-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
