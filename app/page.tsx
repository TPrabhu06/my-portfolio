"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Text To Speech",
    description:
      "Built a client-side Text-to-Speech web application using the Web Speech API.",
    tech: ["CSS", "Javascript", "HTML"],
    github: "#",
  },
  {
    title: "ML Dashboard",
    description:
      "Interactive dashboard for visualizing machine learning models and predictions.",
    tech: ["React", "Scikit-Learn", "Tailwind"],
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Cyberpunk-themed portfolio built with Next.js and Tailwind.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    github: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-purple-700/30 blur-3xl rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-fuchsia-600/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black"
        >
          Hi, I'm{" "}
          <span className="text-purple-400">Tanisha Prabhu</span>
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-xl text-lg">
          CS student focused on AI, Machine Learning, and building
          modern full-stack applications.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 border border-purple-500 text-purple-300 rounded-xl hover:bg-purple-500 hover:text-white transition"
          >
            View Projects
          </a>

          <a
            href="mailto:your@email.com"
            className="px-6 py-3 border border-purple-500 text-purple-300 rounded-xl hover:bg-purple-500 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-6 mt-10 text-gray-400">
          {/* GitHub */}
          <a 
            href="https://github.com/TPrabhu06/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <GitBranch className="hover:text-purple-400 transition" />
          </a>

          {/* LinkedIn (custom SVG — works everywhere) */}
          <a 
            href="http://www.linkedin.com/in/tanisha-prabhu" 
            target="_blank"
            rel="noopener noreferrer"
            >
            <svg
              className="w-6 h-6 hover:text-purple-400 transition fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
              2.24 5 5 5h14c2.76 0 5-2.24 
              5-5v-14c0-2.76-2.24-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.28c-.96 
              0-1.75-.79-1.75-1.75s.79-1.75 
              1.75-1.75 1.75.79 1.75 1.75-.79 
              1.75-1.75 1.75zm13.5 
              11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
              0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 
              1.37-1.56 2.82-1.56 3.02 0 3.58 
              1.99 3.58 4.58v5.62z" />
            </svg>
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative z-10 max-w-5xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold text-purple-400 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-zinc-900/70 border border-purple-900 rounded-2xl p-6 hover:border-purple-500 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <ExternalLink className="text-purple-400" />
              </div>

              <p className="text-gray-400 mt-3">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-purple-700 text-purple-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                className="inline-block mt-4 text-purple-400 hover:text-purple-300"
              >
                GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}