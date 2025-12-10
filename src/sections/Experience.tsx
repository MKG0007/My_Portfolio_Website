import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Code, GraduationCap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ExperienceItem {
  id: number;
  title: string;         // Role / Activity
  period: string;        // e.g., "2023 – Present"
  bullets: string[];     // Highlights
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Problem Solving & Competitive Programming',
    period: '2022 – Present',
    bullets: [
      'Solved 400+ Data Structures & Algorithms problems across LeetCode and GeeksforGeeks.',
      'Strengthened algorithmic thinking, dynamic programming, and system design fundamentals.',
    ],
  },
  {
    id: 2,
    title: 'Skill Showcase Fest – Team Coordinator',
    period: '2023',
    bullets: [
      'Coordinated a student team to ensure smooth execution of events.',
      'Fostered collaboration and problem-solving among participants.',
    ],
  },
  {
    id: 3,
    title: 'Hackathon – BlockBash',
    period: '2024',
    bullets: [
      'Participated in BlockBash Hackathon with a focus on blockchain solutions.',
      'Gained hands-on experience in blockchain concepts and collaborative development.',
    ],
  },
  {
    id: 4,
    title: 'Full Stack Web Development – CSE Pathshala',
    period: 'Jun 2024 – Aug 2024',
    bullets: [
      'Completed hands-on full-stack training with the MERN stack (MongoDB, Express.js, React, Node.js).',
      'Built multiple real-world projects, gaining practical experience in scalable web applications.',
    ],
  },
];

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" subtitle="What I've done so far" />

        <div ref={ref} className="mt-12 relative">
          {/* Vertical timeline */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-12 md:mb-0 relative transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms`, minHeight: '200px' }}
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
                          {index === 0 ? (
                            <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          ) : index === 1 ? (
                            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          ) : index === 2 ? (
                            <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          ) : (
                            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {exp.period}
                          </p>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mt-2 mr-2 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
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
