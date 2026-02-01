interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  link?: string | null;
}

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  const isComingSoon = !link;
  
  const getIcon = () => {
    if (title.includes("Backtester")) return "📊";
    if (title.includes("Todo")) return "✅";
    if (title.includes("Expense")) return "💰";
    if (title.includes("Investment")) return "📈";
    if (title.includes("Portfolio")) return "🌐";
    return "🚀";
  };

  const cardContent = (
    <>
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        {isComingSoon ? (
          <span className="text-xs px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-full font-medium">
            Coming Soon
          </span>
        ) : (
          <span className="text-xs px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 rounded-full font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Live
          </span>
        )}
      </div>
      
      {/* Project icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all">
        <span className="text-2xl">{getIcon()}</span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-300 mb-5 leading-relaxed line-clamp-3">
        {description}
      </p>
      
      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tech.split(", ").map((t) => (
          <span 
            key={t}
            className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 rounded-lg font-medium"
          >
            {t}
          </span>
        ))}
      </div>
      
      {/* Action */}
      {!isComingSoon && (
        <div className="pt-5 border-t border-slate-200/50 dark:border-slate-700/50">
          <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      )}
    </>
  );

  const wrapperClasses = `group relative p-6 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 ${!isComingSoon ? 'cursor-pointer' : ''}`;

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={wrapperClasses}>
        {cardContent}
      </a>
    );
  }

  return (
    <div className={wrapperClasses}>
      {cardContent}
    </div>
  );
}
