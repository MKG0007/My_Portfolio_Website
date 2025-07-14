import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div 
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img 
              src="assets/myPhoto.jpg" 
              alt="About Me" 
              className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto object-cover"
            />
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Who am I?
            </h3>
            
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate software developer focused on building efficient, scalable, and user-friendly applications.
                I enjoy turning complex challenges into clean, elegant solutions using modern web technologies.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Currently pursuing Computer Science and Engineering at Lovely Professional University, 
                I specialize in full-stack development, problem-solving, and system optimization. 
                I’m committed to writing clean, maintainable code and staying updated with the latest tech trends.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Outside of coding, I enjoy hiking, reading tech blogs, and contributing to open-source. 
                I believe in continuous learning and pushing myself to explore new tools and technologies.
              </p>

            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Punjab, India
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  mg258087@gmail.com
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                  Freelance
                </h4>
                <p className="text-green-600 dark:text-green-400">
                  Available
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                  Languages
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  English, Hindi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
