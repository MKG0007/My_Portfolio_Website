import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github as GitHub, Code } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

const projects: ProjectType[] = [
  {
  id: 1,
  title: "AI Trip Planner",
  description:
    "An AI-driven trip planning platform that generates personalized itineraries based on user preferences with intelligent recommendations, real-time route visualization, and secure authentication.",
  image: "assets/wayquest.png",
  tags: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Gemini API",
    "Mapbox",
    "Convex",
    "Clerk",
    "Vercel",
  ],
  github: "https://github.com/MKG0007/Ai-Trip-Planner",
  demo: "https://wayquestai.vercel.app",
  featured: true,
},
{
  id: 2,
  title: "E-commerce Platform",
  description:
    "A scalable full-stack e-commerce application with browsing, cart, checkout, and authentication workflows. Built with a RESTful API, Redux Toolkit state management, and optimized for performance and cross-device compatibility.",
  image: "assets/swiftbuy.png",
  tags: [
    "React.js",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Vercel",
  ],
  github: "https://github.com/MKG0007/ecommerce-website",
  demo: "https://swiftcarttt.vercel.app",
  featured: true,
},

  {

    id: 3,
    title: "FlickTales - Movie Blogging Website",
    description: "A dynamic blogging platform featuring detailed reviews, category filters, and a modern responsive UI with smooth animations.",
    image: "assets/flicktales.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel"],
    github: "https://github.com/MKG0007/flicktales-cinema-blog",
    demo: "https://flicktalesblogs.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Car Rental System",
    description: "A fully responsive car rental website with dark mode support, built using HTML, CSS, JavaScript, and deployed on GitHub Pages.",
    image: "assets/car_rental.png",
    tags: ["BootStrap", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/MKG0007/CarRental",
    demo: "https://mkg0007.github.io/CarRental/",
    featured: true,
  },
  {
    id: 5,
    title: "Simon Says Game",
    description: "A fun interactive Simon Says game built using HTML, CSS, and JavaScript with smooth UI and animations.",
    image: "/assets/simon.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MKG0007/Simon_Says_Game",
    demo: "https://mkg0007.github.io/Simon_Says_Game/",
    featured: true,
  },
  {
    id: 6,
    title: "Online Wallpaper Website",
    description: "A responsive wallpaper showcase built with HTML, CSS, and JavaScript, featuring categories and smooth UI.",
    image: "/assets/web_wallpaper.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MKG0007/Wallpaper-Website",
    demo: "https://mkg0007.github.io/Wallpaper-Website/",
    featured: false,
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    filter === 'featured'
      ? projects.filter((project) => project.featured)
      : projects;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Projects"
          subtitle="Recent work and case studies"
        />

        {/* Filter Tabs */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === 'featured'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <GitHub className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/MKG0007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <Code className="w-5 h-5 mr-2" />
            Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
