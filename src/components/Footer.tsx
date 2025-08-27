import React from "react";
import { Github as GitHub, Linkedin, Mail, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Mayank Kumar Gupta
            </h3>
            <p className="text-gray-400 leading-relaxed mb-5">
              Passionate full-stack developer crafting seamless & modern digital
              experiences.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://github.com/MKG0007"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mayankgupta30/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mg258087@gmail.com"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:scale-110 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Contact Info
            </h3>
            <p className="text-gray-400 mb-1">Punjab, India</p>
            <p className="text-gray-400 mb-1">mg258087@gmail.com</p>
            <p className="text-gray-400 mb-5">+91 8393018077</p>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Mayank Kumar Gupta. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
