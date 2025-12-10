import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

interface SkillCategory {
  id: number;
  name: string;
  skills: {
    name: string;
    level?: number;
    color?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Languages",
    skills: [
      { name: "C++", level: 5, color: "bg-blue-700" },
      { name: "Java", level: 4, color: "bg-red-600" },
      { name: "JavaScript", level: 5, color: "bg-yellow-500" },
      { name: "TypeScript", level: 4, color: "bg-blue-500" },
      { name: "Python", level: 4, color: "bg-green-500" },
      { name: "PHP", level: 3, color: "bg-indigo-500" },
      { name: "C", level: 3, color: "bg-gray-600" },
    ],
  },
  {
    id: 2,
    name: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 5, color: "bg-cyan-500" },
      { name: "Node.js", level: 4, color: "bg-green-600" },
      { name: "Express.js", level: 4, color: "bg-gray-700" },
      { name: "Tailwind CSS", level: 4, color: "bg-teal-500" },
      { name: "HTML5", level: 5, color: "bg-orange-500" },
      { name: "CSS3", level: 4, color: "bg-blue-600" },
    ],
  },
  {
    id: 3,
    name: "Databases",
    skills: [
      { name: "MySQL", level: 4, color: "bg-blue-700" },
      { name: "Postgres", level: 3, color: "bg-indigo-600" },
      { name: "MongoDB", level: 3, color: "bg-green-500" },
    ],
  },
  {
    id: 4,
    name: "Tools & Platforms",
    skills: [
      { name: "Git", level: 4, color: "bg-orange-600" },
      { name: "GitHub", level: 4, color: "bg-gray-800" },
      { name: "VS Code", level: 5, color: "bg-blue-500" },
      { name: "Sublime Text", level: 3, color: "bg-purple-500" },
      { name: "Vercel", level: 3, color: "bg-black" },
    ],
  },
];

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="What I bring to the table"
        />

        {/* Categories */}
        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.2,
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    {skill.level ? (
                      <>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {skill.level * 20}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <motion.div
                            className={`h-2.5 rounded-full ${skill.color}`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level * 20}%` } : {}}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.2 + skillIndex * 0.2,
                            }}
                          />
                        </div>
                      </>
                    ) : (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                        {skill.name}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Core Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "REST API Development",
              "Problem Solving",
              "Adaptability",
              "Project Management",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
