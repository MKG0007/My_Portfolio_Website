import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Simon Says Game",
    company: "Memory Game App",
    location: "",
    period: "April 25",
    description: [
      "Built an interactive Simon Says game using HTML, CSS, and JavaScript.",
      "Implemented real-time input validation with sound and visual feedback.",
      "Designed a responsive layout for consistent mobile and desktop play.",
      "Deployed on GitHub Pages with version control via GitHub integration."
    ]
  },
  {
    id: 2,
    role: "Rental Website",
    company: "Car Rental System",
    location: "",
    period: "July 24",
    description: [
      "Built a car rental website using HTML, CSS, Bootstrap, and JavaScript.",
      "Created sections like featured cars, testimonials, and booking CTA.",
      "Implemented a full dark mode toggle for better UX and accessibility.",
    ]
  },
  {
    id: 3,
    role: "Text Editor Lite",
    company: "",
    location: "",
    period: "Oct 22",
    description: [
      "Built a WordPad-style text editor using Python and Tkinter UI library.",
      "Implemented open, edit, save, and text formatting core functionalities.",
      "Integrated MySQL to log file history and track user interactions.",
      "Delivered a fast, user-friendly editor with persistent file tracking."
    ]
  }
];

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Project Experience" subtitle="My journey" />

        <div ref={ref} className="mt-12 relative">
          {/* Vertical timeline bar */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-12 md:mb-0 relative transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 200}ms`, minHeight: '250px' }}
            >
              <div className="md:flex md:items-start md:justify-between md:w-full relative">
                {/* Card */}
                <div
                  className={`md:w-1/2 mt-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 relative z-10 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.company === "Memory Game App" && (
                    <a
                      href="https://github.com/MKG0007/Simon_Says_Game"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Project Repository
                    </a>
                  )}

                  {exp.company === "Car Rental System" && (
                    <a
                      href="https://github.com/MKG0007/CarRental"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Project Repository
                    </a>
                  )}

                  {exp.company === "" && (
                    <a
                      href="https://github.com/MKG0007/Text_Editor_lite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Project Repository
                    </a>
                  )}
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 shadow z-20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
