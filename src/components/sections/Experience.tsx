import { motion } from "framer-motion";
import { experience } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-agustina font-bold text-primary dark:text-white mb-4">
                        {experience.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        {experience.description}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-600 mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary/20 dark:via-white/10 to-transparent -translate-x-1/2" />

                    <div className="space-y-12">
                        {experience.sections.flatMap((section) =>
                            section.experiences.map((exp, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={exp.company + exp.title}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.7, delay: index * 0.1 }}
                                        className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? "md:flex-row-reverse" : ""
                                            }`}
                                    >
                                        {/* Spacer to push content to one side on desktop */}
                                        <div className="hidden md:block flex-1" />

                                        {/* Center Node */}
                                        <div className="hidden md:flex flex-col items-center justify-center relative z-10 w-12 group">
                                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 shadow-[0_0_15px_rgba(52,211,153,0.5)] group-hover:scale-150 transition-transform" />
                                        </div>

                                        {/* Card Content */}
                                        <div className="flex-1 w-full relative group">
                                            <div className="glass-panel p-8 rounded-2xl md:hover:-translate-y-2 transition-transform duration-300 overflow-hidden">

                                                {/* Header row: Logo + Title */}
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
                                                    <div className="flex items-center gap-4">
                                                        {exp.logo_path && (
                                                            <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-md shrink-0">
                                                                <img
                                                                    src={getImageUrl(exp.logo_path)}
                                                                    alt={exp.company}
                                                                    className="w-full h-full object-contain rounded-md"
                                                                />
                                                            </div>
                                                        )}
                                                        <div>
                                                            <h3 className="text-xl md:text-2xl font-sans-bold text-primary dark:text-white">
                                                                {exp.title}
                                                            </h3>
                                                            <a
                                                                href={exp.company_url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-lg font-sans-medium text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 mt-1"
                                                            >
                                                                {exp.company}
                                                                <ExternalLink size={14} className="opacity-70" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Meta Info */}
                                                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm font-medium text-muted-foreground border-y border-primary/10 dark:border-white/10 py-3 relative z-10">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={16} className="text-teal-500" />
                                                        <span>{exp.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin size={16} className="text-teal-500" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>

                                                {/* Description List */}
                                                <ul className="space-y-3 relative z-10">
                                                    {exp.description.map((sentence, i) => (
                                                        <li key={i} className="flex gap-3 text-muted-foreground">
                                                            <div className="mt-1.5 shrink-0">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                                                            </div>
                                                            <span className="leading-relaxed">
                                                                {sentence}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Subtle glowing orb inside the card for premium feel */}
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none" />
                                            </div>
                                        </div>

                                    </motion.div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
