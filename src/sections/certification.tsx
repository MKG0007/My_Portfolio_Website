import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "CSE Pathshala",
    date: "July 24",
    link: "https://drive.google.com/file/d/1IY6SFxZ9EdwXmPGXcc-Uay-tu-fULARL/view",
    image: "assets/cert_fullstack.png",
  },
  {
    id: 2,
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    date: "Feb 24",
    link: "https://www.udemy.com/certificate/UC-1978d678-e191-4197-9301-b2a6112bf448/",
    image: "assets/cert_dsa_cpp.png",
  },
  {
    id: 3,
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University | Coursera",
    date: "Jan 24",
    link: "https://www.coursera.org/account/accomplishments/verify/BT8T6PZ7MDAW",
    image: "assets/cert_promt.png",
  },
  {
    id: 4,
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud | Coursera",
    date: "Jan 24",
    link: "https://www.coursera.org/account/accomplishments/verify/CE5E65CGSUNX",
    image: "assets/cert_introllm.png",
  },
  {
    id: 5,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google | Coursera",
    date: "Nov 23",
    link: "https://www.coursera.org/account/accomplishments/verify/PN6CNA7EYKQV",
    image: "assets/cert_networking.png",
  },
  {
    id: 6,
    title: "Leadership Through Social Influence",
    issuer: "Northwestern University | Coursera",
    date: "Mar 23",
    link: "https://www.coursera.org/account/accomplishments/verify/8GS37TJ9JM6A",
    image: "assets/cert_social.png",
  },
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
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Issued: {cert.date}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
