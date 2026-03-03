import { motion } from "framer-motion";
import { projects, projectsHeader } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { Icon } from "@iconify/react";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-agustina font-bold text-primary dark:text-white mb-4">
                        {projectsHeader.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        {projectsHeader.description}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.data.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group flex flex-col h-full glass-panel rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Project Image Carousel / Banner */}
                            <div className="relative aspect-video overflow-hidden bg-secondary/50">
                                {project.images && project.images.length > 0 ? (
                                    <img
                                        src={getImageUrl(project.images[0])}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                        <MonitorPlay size={48} className="opacity-20" />
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
                                    >
                                        <span>View Project</span>
                                        <ExternalLink size={16} />
                                    </a>
                                </div>

                                {project.badge && (
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-md flex items-center gap-1.5 ${project.badge.color === 'warning' ? 'bg-orange-500/80 text-white' :
                                            project.badge.color === 'success' ? 'bg-emerald-500/80 text-white' :
                                                project.badge.color === 'danger' ? 'bg-rose-500/80 text-white' :
                                                    project.badge.color === 'info' ? 'bg-blue-500/80 text-white' :
                                                        'bg-primary/80 text-white'
                                        }`}>
                                        {project.badge.icon && <span>{project.badge.icon}</span>}
                                        {project.badge.text}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-1 relative z-10">
                                <h3 className="text-2xl font-sans-bold text-primary dark:text-white mb-3 group-hover:text-indigo-500 transition-colors">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        {project.name}
                                    </a>
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                                    {project.briefDescription}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/10 dark:border-white/10 mt-auto">
                                    {project.languages.map(lang => (
                                        <div
                                            key={lang.name}
                                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground border border-primary/5 dark:border-white/5"
                                            title={lang.name}
                                        >
                                            {lang.iconifyClass && (
                                                <Icon icon={lang.iconifyClass} style={lang.color ? { color: lang.color } : {}} className="w-4 h-4" />
                                            )}
                                            <span>{lang.name}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* External Links */}
                                {project.links && project.links.length > 0 && (
                                    <div className="flex gap-4 mt-6">
                                        {project.links.map(link => (
                                            <a
                                                key={link.name}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-indigo-500 transition-colors p-2 -m-2"
                                                title={link.name}
                                            >
                                                {link.iconifyClass === 'ri:github-fill' ? <Github size={20} />
                                                    : link.iconifyClass === 'mdi:web' ? <ExternalLink size={20} />
                                                        : <Icon icon={link.iconifyClass} className="w-5 h-5" />}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
