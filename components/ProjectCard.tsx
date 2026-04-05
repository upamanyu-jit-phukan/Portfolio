"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#3E160C] p-6 rounded-2xl shadow-lg cursor-pointer"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-2 text-[#E8D9C4]/70">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-sm bg-[#785D32] px-2 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}