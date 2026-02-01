import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const techSkills = [
    "JavaScript",
    "TypeScript", 
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "Supabase"
  ];

  const businessSkills = [
    "Financial Modeling",
    "Excel",
    "Bloomberg Terminal",
    "FactSet",
    "Equity Research",
    "ESG Analysis",
    "Spanish"
  ];

  const projects = [
    {
      title: "Todo App",
      description: "A full-stack task manager with real-time sync, categories, due dates, and automatic email integration. Tasks sync from weekly coaching emails automatically.",
      tech: "React, TypeScript, Supabase, Google Apps Script",
      link: "https://alexszapiro-to-do.vercel.app"
    },
    {
      title: "Expense Tracker",
      description: "Track spending by category with visual charts and budget goals. Analyze spending patterns and set financial targets.",
      tech: "Next.js, React, Chart.js",
      link: null
    },
    {
      title: "Investment Tracker",
      description: "Monitor portfolio performance, track holdings across accounts, and analyze returns with real-time market data.",
      tech: "Next.js, React, Finance APIs",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-20">
        <Hero />
        <About />

        {/* Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </div>
          
          {/* Tech Skills */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400 mb-5 text-center uppercase tracking-wide">
              Technical
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techSkills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Business Skills */}
          <div>
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400 mb-5 text-center uppercase tracking-wide">
              Finance & Business
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {businessSkills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
              />
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
