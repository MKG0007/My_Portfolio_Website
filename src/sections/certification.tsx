import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: " CSE Pathshala",
    date: "July 24",
    link: "https://drive.google.com/file/d/1IY6SFxZ9EdwXmPGXcc-Uay-tu-fULARL/view",
    image: "assets/cert_fullstack.png"
  },
  {
    id: 2,
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    date: "Fed 24",
    link: "https://www.udemy.com/certificate/UC-1978d678-e191-4197-9301-b2a6112bf448/",
    image: "assets/cert_dsa_cpp.png"
  },
  {
    id: 3,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google | Coursera",
    date: "Nov 23",
    link: "https://www.coursera.org/account/accomplishments/verify/PN6CNA7EYKQV",
    image: "assets/cert_networking.png"
  }
];

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications" 
          subtitle="Verified credentials and achievements"
        />
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Issued: {cert.date}
                </p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
