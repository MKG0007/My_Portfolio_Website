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
    title: "FlickTales - Movie Blogging Website",
    description: "Designed and developed a dynamic movie blogging platform featuring detailed movie reviews, category filters, and a responsive modern UI. Built using React and Tailwind CSS with smooth animations, and deployed seamlessly on Vercel.",
    image: "assets/flicktales.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "Vercel"],
    github: "https://github.com/MKG0007/flicktales-cinema-blog",
    demo: "https://flicktales-cinema-blog.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Car Rental System",
    description: "Built a fully responsive Car Rental Website using HTML, CSS, and JavaScript with a clean, user-friendly interface. Integrated full dark mode support for enhanced accessibility and user preference, and deployed the site using GitHub Pages.",
    image: "assets/car_rental.png",
    tags: ["BootStrap", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/MKG0007/CarRental",
    demo: "https://mkg0007.github.io/CarRental/",
    featured: true
  },
  {
    id: 3,
    title: "Text Editor",
    description: "A browser-based text editor with syntax highlighting, autosave functionality, and markdown support for developers and writers.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Python","Tkinter"],
    github: "https://github.com/MKG0007/Text_Editor_lite",
    demo: "",
    featured: true
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS, featuring dark mode, animations, and contact form integration.",
    image: "/assets/follio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/MKG0007/My_Portfolio_Website",
    demo: "",
    featured: true
  },
  {
    id: 5,  
    title: "Simon Says Game",
    description: "Developed a secure MERN authentication system with Next.js frontend integration, featuring two-factor authentication, email verification, Nodemailer integration, and robust user authorization using JWT, cookies, and sessions.",
    image: "/assets/simon.png",
    tags: ["HTML", "CSS" , "JavaScript"],
    github: "https://github.com/MKG0007/Simon_Says_Game",
    demo: "https://mkg0007.github.io/Simon_Says_Game/",
    featured: true
  },
  {
    id: 6,
    title: "Online Wallpaper Website",
    description: "a responsive Wallpaper Website using HTML, CSS, and JavaScript to showcase high-quality background images. Deployed the project on GitHub Pages with smooth UI, interactive categories, and mobile-friendly design.",
    image: "/assets/web_wallpaper.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MKG0007/Wallpaper-Website",
    demo: "https://mkg0007.github.io/Wallpaper-Website/",
    featured: false
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Projects" 
          subtitle="Recent work and case studies" 
        />
        
        <div className="flex justify-center mt-8 mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === 'featured' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <GitHub className="w-5 h-5 mr-2" />
                    <span>Source Code</span>
                  </a>
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/MKG0007" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <Code className="w-5 h-5 mr-2" />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
