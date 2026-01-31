// ============================================
// ProjectCard Component - Polished Version
// ============================================

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
}

export default function ProjectCard({ title, description, tech }: ProjectCardProps) {
  return (
    <div className="group p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
      {/* Project icon/emoji placeholder */}
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <span className="text-2xl">🚀</span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {description}
      </p>
      
      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2">
        {tech.split(", ").map((t) => (
          <span 
            key={t}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// New Tailwind concepts:
// 1. "group" and "group-hover:" - Apply hover styles to children when parent is hovered
// 2. "transition-all duration-300" - Smooth animation over 300ms
// 3. "line-clamp-3" - Truncate text after 3 lines
// 4. tech.split(", ") - Split the tech string into an array to create individual tags
