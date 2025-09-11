"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import React, { useRef } from "react";

export const SimpleHome: React.FC = () => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  // Parallax effect for arrow
  const arrowY = useTransform(scrollY, [0, 300], [0, 60]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center px-4"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Hi, I'm Tran Huu Tai
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-12">
            I design and build mobile, web, SEO-friendly, and user-centric
            applications.
          </p>

          {/* Scroll indicator with parallax arrow */}
          <motion.div ref={arrowRef} style={{ y: arrowY }}>
            <button
              aria-label="Scroll to next section"
              className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
              onClick={scrollToNext}
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center px-4 py-20"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-300" />
              <h2 className="px-8 text-3xl md:text-4xl font-light text-gray-900">
                About Me
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                I am Tran Huu Tai, a passionate{" "}
                <span className="font-semibold text-primary-700">
                  Mobile Developer
                </span>
                ,{" "}
                <span className="font-semibold text-primary-700">
                  Web Developer
                </span>
                ,{" "}
                <span className="font-semibold text-primary-700">
                  Web SEO Specialist
                </span>
                , and{" "}
                <span className="font-semibold text-primary-700">
                  DevOps Practitioner
                </span>
                .
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                I specialize in building high-quality, scalable applications
                using modern technologies such as React Native, React.js,
                NestJS, and Java Spring Boot. My experience covers both frontend
                and backend development, mobile and web platforms, and
                optimizing for SEO and performance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                I am always eager to learn new things, improve my skills, and
                deliver clean, maintainable code. I enjoy solving complex
                problems, optimizing user experiences, and ensuring robust
                DevOps and deployment pipelines for reliable delivery.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Besides coding, I love traveling and exploring new places, which
                inspires creativity and helps me approach challenges with a
                fresh perspective. My goal is to create products that not only
                work well but also make a positive impact for users and
                businesses.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full h-full bg-gray-300 rounded-lg">
                <img
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg grayscale"
                  src="/about-me.jpg"
                />

                <div className="center flex justify-center items-center p-2">
                  (My favorite travel destination in Phan Rang City)
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center px-4 py-20"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-300" />
              <h2 className="px-8 text-3xl md:text-4xl font-light text-gray-900">
                Experience
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
          </div>

          <div className="space-y-16">
            {/* Experience Item 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:text-right space-y-2">
                <h3 className="text-xl font-medium text-gray-900">
                  Fullstack Developer
                </h3>
                <p className="text-gray-600">APETECHS Solution</p>
                <div className="w-full lg:w-auto border-b border-gray-300 lg:border-b-0 lg:border-r lg:pr-8 pb-4 lg:pb-0">
                  <p className="text-sm text-gray-500">Mar 2024 - Present</p>
                </div>
              </div>

              <div className="lg:col-span-2 lg:pl-8 lg:border-l border-gray-300">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="font-light">
                      Innovative Fullstack Developer with 1.5 years of
                      experience, specializing in building dynamic and
                      user-friendly applications using React Native and NestJS
                      APIs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="font-light">
                      Experienced in UI/UX optimization, code performance
                      improvement, and integration of Firebase, GPS, and
                      location-based services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="font-light">
                      Backend (NestJS): Skilled in designing and developing REST
                      APIs, database management, third-party systems
                      integration, and building scalable server-side solutions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:text-right space-y-2">
                <h3 className="text-xl font-medium text-gray-900">
                  Student Developer
                </h3>
                <p className="text-gray-600">Ton Duc Thang University</p>
                <div className="w-full lg:w-auto border-b border-gray-300 lg:border-b-0 lg:border-r lg:pr-8 pb-4 lg:pb-0">
                  <p className="text-sm text-gray-500">2021 - 2025</p>
                  <p className="text-sm text-gray-500">GPA: 8.21 / 10</p>
                </div>
              </div>

              <div className="lg:col-span-2 lg:pl-8 lg:border-l border-gray-300">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="font-light">
                      Completed core and advanced courses including programming
                      fundamentals, algorithms, and data structures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="font-light">
                      Proactively self-studied modern technologies such as UI
                      libraries for web and mobile development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="font-light">
                      Strengthened practical skills for both academic projects
                      and professional work
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center px-4 py-20"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-300" />
              <h2 className="px-8 text-3xl md:text-4xl font-light text-gray-900">
                Contact
              </h2>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              I am currently seeking employment, and I would appreciate it if
              you could contact me with any available job opportunities.
            </p>

            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-light">
              Write Message
            </button>

            {/* Social Links */}
            <div className="flex justify-center space-x-8 pt-8">
              <a
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                href="https://github.com/Null120423"
              >
                <Github size={24} />
              </a>
              <a
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                href="https://www.linkedin.com/in/huu-tai-fullstack-developer-3b1b90252/"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
