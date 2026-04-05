export default function Contact() {
    return (
      <section className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
  
        <p className="text-[#E8D9C4]/70 mb-6">
          I'm open to internships, collaborations, and exciting opportunities.
        </p>
  
        <div className="flex justify-center gap-6">
          <a
            href="mailto:your@email.com"
            className="bg-[#785D32] px-6 py-2 rounded-lg"
          >
            Email
          </a>
  
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="border border-[#785D32] px-6 py-2 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </section>
    );
  }