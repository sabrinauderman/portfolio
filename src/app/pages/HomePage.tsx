import React from "react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import profilePhoto from "@/assets/f91297a2be5d7c5447fd32ef8243483fe0075623.png";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-lg font-light tracking-tight text-gray-900"
          >
            Sabrina's portfolio
          </Link>
          <Link
            to="/projects"
            className="text-sm uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors"
          >
            Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="space-y-8">
          {/* Name with Profile Photo */}
          <div className="flex items-center gap-6">
            <h1 className="text-7xl font-light tracking-tight text-gray-900">
              Sabrina Uderman
            </h1>
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
              <ImageWithFallback
                src={profilePhoto}
                alt="Sabrina Uderman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-2xl text-gray-600 max-w-2xl leading-relaxed">
            UX/UI Designer & Researcher specializing in AI-powered design
            workflows
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider"
            >
              View Projects →
            </Link>
            <a
              href="#contact"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-sm uppercase tracking-wider"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-[1fr,2fr] gap-16">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-6">
              About
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a creative thinker with strong communication and clear
              documentation skills. Proactive, responsible, and empathetic, I am
              committed to delivering meaningful results.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My work is driven by AI-powered workflows, using tools like Figma
              Make and HTML-to-Design to accelerate ideation, prototyping, and
              execution. I aim to collaborate with companies that foster growth,
              value accountability and respect, and embrace the transformative
              potential of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-gray-400">
              Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  Design & Prototyping
                </h3>
                <p className="text-gray-600">
                  Figma Design, Figma Make, UI Kit/Swift UI, Sketch, Adobe
                  Photoshop
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  Development
                </h3>
                <p className="text-gray-600">Vibe Coding, Swift</p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  Methodology
                </h3>
                <p className="text-gray-600">
                  Agile, Enterprise Design Thinking, Project Management
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  Soft Skills
                </h3>
                <p className="text-gray-600">
                  Clear Communication, Leadership, Documentation
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-gray-400">
              Education
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Master's Degree in UX Design
                </h3>
                <p className="text-gray-600">
                  Barcelona Technology School & Barcelona University
                </p>
                <p className="text-sm text-gray-500">2024-2025</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Bachelor's in Business Administration
                </h3>
                <p className="text-gray-600">PUC-RIO University</p>
                <p className="text-sm text-gray-500">2020-2023</p>
                <p className="text-sm text-[#b87673]">
                  Academic Merit Certificate (2021.2, 2022.1)
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-gray-900">
                  Certifications
                </h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• IBM Enterprise Design Thinking Practitioner</li>
                  <li>• Swift Programming (Udemy)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 pb-24 scroll-mt-20"
      >
        <div className="grid md:grid-cols-2 gap-16">
          {/* Languages */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-gray-400">
              Languages
            </h2>
            <div className="space-y-2 text-lg text-gray-700">
              <p>Advanced English</p>
              <p>Native Portuguese</p>
              <p>Professional Spanish</p>
            </div>
            <div className="pt-4">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
                Nationalities
              </h3>
              <p className="text-gray-600">Brazilian • Portuguese • Spanish</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-gray-400">
              Contact
            </h2>
            <div className="space-y-3 text-lg text-gray-700">
              <a
                href="mailto:sabrina.u@hotmail.com"
                className="block hover:text-gray-900 transition-colors"
              >
                sabrina.u@hotmail.com
              </a>
              <a
                href="tel:+34689219501"
                className="block hover:text-gray-900 transition-colors"
              >
                +34 689 219 501
              </a>
              <a
                href="https://www.linkedin.com/in/sabrina-uderman-979933206"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gray-900 transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
          <p>© 2026 Sabrina Uderman</p>
        </div>
      </footer>
    </div>
  );
}

