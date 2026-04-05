"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Agentic AI Assistant",
    description:
      "An AI system capable of planning and executing multi-step tasks autonomously.",
    tech: ["Next.js", "OpenAI", "Node.js"],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive dashboard with real-time data visualization and insights.",
    tech: ["React", "Chart.js", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}