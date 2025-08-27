import emailjs from "emailjs-com";
import React, { useState, FormEvent } from "react";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github as GitHub,
  Linkedin,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_mmnnk7t",
        "template_28sg1o5",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "OqjSme7R7lGzlCcWm"
      );

      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        success: false,
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionTitle
          title="Contact Me"
          subtitle="Let’s build something amazing together 🚀"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-start"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Get In Touch
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m open to freelance opportunities, collaborations, or just a
              friendly chat. Drop me a message — I’ll get back to you soon.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  ),
                  title: "Email",
                  value: (
                    <a
                      href="mailto:mg258087@gmail.com"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      mg258087@gmail.com
                    </a>
                  ),
                },
                {
                  icon: (
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  ),
                  title: "Phone",
                  value: "+91 8393018077",
                },
                {
                  icon: (
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  ),
                  title: "Location",
                  value: "Punjab, India",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="pt-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-5">
                {[
                  {
                    href: "https://github.com/MKG0007",
                    icon: <GitHub className="w-6 h-6" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/mayankgupta30/",
                    icon: <Linkedin className="w-6 h-6" />,
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {[
                {
                  id: "name",
                  label: "Your Name",
                  type: "text",
                  placeholder: "Enter your full name",
                },
                {
                  id: "email",
                  label: "Your Email",
                  type: "email",
                  placeholder: "Enter your email address",
                },
                {
                  id: "subject",
                  label: "Subject",
                  type: "text",
                  placeholder: "Project Inquiry",
                },
              ].map((field) => (
                <div className="mb-6" key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-gray-800 dark:text-gray-300 font-medium mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={(formData as any)[field.id]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                  />
                </div>
              ))}

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-800 dark:text-gray-300 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white resize-none"
                ></textarea>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`p-4 mb-6 rounded-lg flex items-center gap-2 text-sm font-medium ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {submitStatus.success ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4zm2 5.3A8 8 0 014 12H0c0 3 1.1 5.8 3 7.9l3-2.6z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
