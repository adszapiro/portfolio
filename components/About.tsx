export default function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8">
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I'm a first-year student at the <span className="font-semibold text-blue-600 dark:text-blue-400">University of Michigan</span> studying 
              Economics with a minor in Real Estate, while exploring my growing interest 
              in technology through the School of Information.
            </p>
            
            <p>
              My background spans <span className="font-semibold">finance, entrepreneurship, and technology</span>. 
              I've founded a luxury goods reselling business, led investment clubs, and worked as a 
              Private Credit Intern at Churchill Real Estate. Now I'm expanding into software 
              engineering to combine my business acumen with technical abilities.
            </p>

            <p>
              When I'm not coding or analyzing markets, you can find me at the go-kart 
              track, watching college athletics and the NFL, playing padel, or adding 
              to my vinyl collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
