import { motion } from "framer-motion";
import { degrees } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { GraduationCap, BookOpen, ExternalLink, Award } from "lucide-react";

const EducationCard = ({ degree, isInProgress = false }: { degree: any, isInProgress?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden group w-full"
        >
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] pointer-events-none transition-colors duration-500 ${isInProgress ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-purple-500/10 group-hover:bg-purple-500/20'}`} />

            <div className="flex flex-col md:flex-row gap-8 relative z-10">
                {/* Logo Section */}
                {degree.logo_path && (
                    <div className="shrink-0 flex items-start justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-white p-2 shadow-lg group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-shadow">
                            <img
                                src={getImageUrl(degree.logo_path)}
                                alt={degree.alt_name}
                                className="w-full h-full object-contain rounded-xl"
                            />
                        </div>
                    </div>
                )}

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-sans-bold text-primary dark:text-white">
                                    {degree.title}
                                </h3>
                                {isInProgress && (
                                    <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/30">
                                        In Progress
                                    </span>
                                )}
                            </div>
                            <h4 className="text-xl font-sans-medium text-blue-600 dark:text-blue-400">
                                {degree.subtitle}
                            </h4>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-secondary/50 px-4 py-2 rounded-full border border-primary/10 dark:border-white/10">
                            {degree.duration}
                        </div>
                    </div>

                    <ul className="space-y-3 mt-4">
                        {degree.descriptions.map((desc: string, i: number) => (
                            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                                <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${isInProgress ? 'bg-blue-500' : 'bg-purple-500'}`} />
                                <span>{desc}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Metadata Badges */}
                    {degree.additional_info && (
                        <div className="flex flex-wrap gap-3 pt-4 border-t border-primary/10 dark:border-white/10 mt-6">
                            {degree.additional_info.gpa && (
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium">
                                    <Award size={16} />
                                    GPA: {degree.additional_info.gpa}
                                </div>
                            )}
                            {degree.additional_info.honors && (
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium">
                                    <Award size={16} />
                                    {degree.additional_info.honors}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                        {degree.website_link && (
                            <a
                                href={degree.website_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all transform hover:-translate-y-1 ${isInProgress ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]'}`}
                            >
                                <ExternalLink size={16} />
                                Program Details
                            </a>
                        )}
                        {degree.transcript_link && (
                            <a
                                href={degree.transcript_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground glass-panel hover:bg-secondary transition-colors"
                            >
                                <ExternalLink size={16} />
                                Transcripts
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-agustina font-bold text-primary dark:text-white mb-4">
                        Education & Learning
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-16">
                    {/* In Progress */}
                    {degrees.inProgressDegrees.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-8 text-2xl font-sans-bold text-primary dark:text-white">
                                <BookOpen className="text-blue-500" />
                                <h3>Currently Pursuing</h3>
                            </div>
                            <div className="space-y-6">
                                {degrees.inProgressDegrees.map((degree) => (
                                    <EducationCard key={degree.title} degree={degree} isInProgress={true} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Completed */}
                    {degrees.completedDegrees.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-8 text-2xl font-sans-bold text-primary dark:text-white">
                                <GraduationCap className="text-purple-500" />
                                <h3>Completed Degrees</h3>
                            </div>
                            <div className="space-y-6">
                                {degrees.completedDegrees.map((degree) => (
                                    <EducationCard key={degree.title} degree={degree} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Education;
