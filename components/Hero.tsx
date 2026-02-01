export default function Hero() {
  return (
    <section id="home" className="relative text-center mb-24 pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      {/* Status badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Open to Opportunities</span>
      </div>
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
        <span className="text-slate-900 dark:text-white">Hi, I'm </span>
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Alex Szapiro
        </span>
      </h1>
      
      <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
        School of Information @ University of Michigan
      </p>
      
      <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Passionate about the intersection of finance, technology, and entrepreneurship. 
        Building software skills while leveraging my background in economics and investing.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          View My Work
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="/resume"
          className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all"
        >
          View Resume
        </a>
        <a
          href="#contact"
          className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
