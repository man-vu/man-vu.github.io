import { projects, projectsHeader } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";

const badgeColorMap: Record<string, string> = {
  warning: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  success: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  danger: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  info: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  primary: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

function getLinkIcon(iconifyClass: string) {
  if (iconifyClass.includes("github")) return <Github className="w-4 h-4" />;
  if (iconifyClass.includes("web")) return <ExternalLink className="w-4 h-4" />;
  if (iconifyClass.includes("lock"))
    return <Icon icon={iconifyClass} className="w-4 h-4" />;
  return <ExternalLink className="w-4 h-4" />;
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {projectsHeader.title}
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {projectsHeader.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.data.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={getImageUrl(project.images[0])}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      <MonitorPlay className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                </div>

                {/* Badge */}
                {project.badge && (
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${
                        badgeColorMap[project.badge.color] || badgeColorMap.primary
                      }`}
                    >
                      <span>{project.badge.icon}</span>
                      {project.badge.text}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="font-semibold text-foreground text-lg leading-tight">
                  {project.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.briefDescription}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
                  {project.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center gap-1 text-xs text-muted-foreground"
                      title={lang.name}
                    >
                      <Icon
                        icon={lang.iconifyClass}
                        className="w-4 h-4"
                        style={lang.color ? { color: lang.color } : undefined}
                      />
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  {project.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-blue-400 transition-colors"
                      aria-label={link.name}
                    >
                      {getLinkIcon(link.iconifyClass)}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
