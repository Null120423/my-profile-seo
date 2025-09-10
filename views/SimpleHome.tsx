"use client";
import { USER_DATA } from "@/lib/data";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export const SimpleHome: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Hi, I'm {USER_DATA.fullName.split(' ')[0]} {USER_DATA.fullName.split(' ')[1]}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-12">
            I design and build things.
          </p>
          
          {/* Scroll indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="px-8 text-3xl md:text-4xl font-light text-gray-900">
                About Me
              </h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                I am a careful Fullstack Developer who wants to create clean and high-quality products. 
                I like coding and always try to learn new things to improve my skills and work better.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Besides coding, I enjoy traveling and discovering new places, which gives me more ideas 
                and helps me solve problems. I believe in writing clean, maintainable code that stands 
                the test of time.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                With experience in React, Node.js, and modern web technologies, I focus on creating 
                solutions that are both technically sound and user-friendly. Every project is an 
                opportunity to learn something new and push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-96 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="px-8 text-3xl md:text-4xl font-light text-gray-900">
                Experience
              </h2>
              <div className="flex-1 h-px bg-gray-300"></div>
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
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="font-light">
                      Innovative Fullstack Developer with 1.5 years of experience, specializing in building 
                      dynamic and user-friendly applications using React Native and NestJS APIs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="font-light">
                      Experienced in UI/UX optimization, code performance improvement, and integration 
                      of Firebase, GPS, and location-based services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="font-light">
                      Backend (NestJS): Skilled in designing and developing REST APIs, database management, 
                      third-party systems integration, and building scalable server-side solutions
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
                </div>
              </div>
              
              <div className="lg:col-span-2 lg:pl-8 lg:border-l border-gray-300">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="font-light">
                      Completed core and advanced courses including programming fundamentals, 
                      algorithms, and data structures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="font-light">
                      Proactively self-studied modern technologies such as UI libraries for web 
                      and mobile development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="font-light">
                      Strengthened practical skills for both academic projects and professional work
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="px-8 text-3xl md:text-4xl font-light text-gray-900">
                Contact
              </h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              I am currently seeking employment, and I would appreciate it if you 
              could contact me with any available job opportunities.
            </p>

            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-light">
              Write Message
            </button>

            {/* Social Links */}
            <div className="flex justify-center space-x-8 pt-8">
              <a
                href="https://github.com/Null120423"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/huu-tai-fullstack-developer-3b1b90252/"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};