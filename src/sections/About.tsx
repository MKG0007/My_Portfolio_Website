import React from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../components/SectionTitle";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12"
        >
          {/* Profile Image */}
          <div
            className={`transition-all duration-1000 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="assets/myPhoto.jpg"
              alt="About Me"
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto object-cover"
            />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Who am I?
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I’m a{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Software Developer
              </span>{" "}
              passionate about crafting clean, scalable, and user-friendly web
              apps. Currently pursuing{" "}
              <span className="font-medium">CSE at LPU</span>, I love building
              modern experiences with React & cutting-edge tech.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Beyond coding, I enjoy{" "}
              <span className="font-medium">hiking</span>,{" "}
              <span className="font-medium">reading tech blogs</span>, and{" "}
              <span className="font-medium">open-source contributions</span>.
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Punjab, India" },
                { label: "Email", value: "mg258087@gmail.com" },
                {
                  label: "Freelance",
                  value: "Available",
                  color: "text-green-500 dark:text-green-400",
                },
                { label: "Languages", value: "English, Hindi" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {item.label}
                  </h4>
                  <p
                    className={`text-base font-semibold text-gray-900 dark:text-white break-words sm:break-normal ${
                      item.color || ""
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
