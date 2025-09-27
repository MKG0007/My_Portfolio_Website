import React, { useEffect, useState } from "react";
import { Github as GitHub, Linkedin, Mail, ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 pt-16 overflow-hidden"
    >
      {/* Animated gradient background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container px-4 py-16 mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Uncomment if you want profile pic */}
            {/* <img
              src="assets/anuj.jpg"
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-white dark:border-gray-800 shadow-lg mb-8 animate-float"
            /> */}
          </div>

          {/* Name with gradient animation */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Mayank Kumar Gupta
          </h1>

          {/* Type animation */}
          <div
            className={`text-xl sm:text-2xl mb-8 h-[4rem] transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <TypeAnimation
              sequence={[
                "🚀 Software Developer",
                1500,
                "⚡ Frontend Engineer",
                1500,
                "🌐 Full Stack Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            />
          </div>

          {/* Description */}
          <p
            className={`max-w-2xl text-lg text-gray-700 dark:text-gray-300 mb-10 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Passionate about crafting elegant, efficient, and user-friendly web
            applications. I love building modern web experiences using{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React
            </span>{" "}
            and cutting-edge technologies.
          </p>

          {/* Social Links with glow hover */}
          <div
            className={`flex space-x-6 mb-12 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <a
              href="https://github.com/MKG0007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-md hover:shadow-blue-500/40 hover:scale-110 transition duration-300 backdrop-blur-lg"
              aria-label="GitHub"
            >
              <GitHub className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </a>

            <a
              href="https://leetcode.com/u/mkgoo7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-md hover:shadow-yellow-500/40 hover:scale-110 transition duration-300 backdrop-blur-lg"
              aria-label="LeetCode"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-6 h-6 object-contain dark:invert"
              />
            </a>
              <a
                href="https://auth.geeksforgeeks.org/user/mkgoo7/practice/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-md hover:shadow-green-500/40 hover:scale-110 transition duration-300 backdrop-blur-lg"
                aria-label="GeeksforGeeks"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                  alt="GeeksforGeeks"
                  className="w-6 h-6 object-contain dark:invert"
                />
              </a>



            <a
              href="https://www.linkedin.com/in/mayankgupta30/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-md hover:shadow-blue-600/40 hover:scale-110 transition duration-300 backdrop-blur-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </a>

            <a
              href="mailto:mg258087@gmail.com"
              className="p-3 bg-white/70 dark:bg-gray-800/70 rounded-full shadow-md hover:shadow-red-500/40 hover:scale-110 transition duration-300 backdrop-blur-lg"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </a>
          </div>

          {/* Scroll down button with glow pulse */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-110 transition duration-300 animate-pulse-glow"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
