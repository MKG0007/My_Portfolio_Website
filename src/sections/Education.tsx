import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University",
    period: "Aug 22 - Present",
    gpa: "CGPA - 7.3",
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "Saraswati Vidya Mandir Senior Secondary School",
    period: "Apr 21 - Mar 22",
    gpa: "Percentage - 82%",
  },
  {
    id: 3,
    degree: "Matriculation",
    institution: "SMT Sridevi Awasiya Vidyapeeth",
    period: "Apr 19 - Mar 20",
    gpa: "Percentage - 71%",
  },
];

const Education: React.FC = () => {
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey & learning milestones" 
        />

        <div ref={educationRef} className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300 dark:from-blue-400 dark:to-blue-600 rounded-full"></div>

          <div className="space-y-10 ml-12">
            {educations.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-700 hover:shadow-lg ${
                  educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Circle marker */}
                <div className="absolute -left-11 top-6 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shadow-md">
                  <GraduationCap className="w-4 h-4" />
                </div>

                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {edu.institution}
                </p>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{edu.period}</span>
                </div>

                {edu.gpa && (
                  <div className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    <span>{edu.gpa}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
