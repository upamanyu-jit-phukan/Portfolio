export default function Skills() {
    const skills = [
      "Building scalable web apps with Next.js",
      "Strong problem-solving (DSA & Competitive Programming)",
      "Developing AI-based systems and tools",
      "Creating responsive and modern UI with Tailwind",
    ];
  
    return (
      <section className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
  
        <div className="max-w-3xl mx-auto space-y-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#3E160C] p-4 rounded-xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }