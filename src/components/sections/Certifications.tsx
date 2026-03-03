import { motion } from "framer-motion";
import { certifications } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-agustina font-bold text-primary dark:text-white mb-4">
                        Certifications & Achievements
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        Continuous learning through industry-recognized certifications from leading technology companies and institutions.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-panel p-6 rounded-2xl flex flex-col h-full group relative overflow-hidden"
                            style={{ "--hover-color": cert.color_code } as any}
                        >
                            {/* Color Glow Overlay */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                style={{ backgroundColor: cert.color_code }}
                            />

                            <div className="flex items-start justify-between mb-4 relative z-10">
                                <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-md shrink-0">
                                    <img
                                        src={getImageUrl(cert.logo_path)}
                                        alt={cert.alt_name}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />
                                </div>

                                {cert.issued && (
                                    <div className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-primary/10 dark:border-white/10">
                                        {cert.issued}
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 relative z-10">
                                <h3 className="text-lg font-sans-bold text-primary dark:text-white mb-2 leading-tight group-hover:text-[var(--hover-color)] transition-colors duration-300">
                                    {cert.title}
                                </h3>
                                <p className="text-sm font-sans-medium text-muted-foreground mb-4">
                                    {cert.subtitle}
                                </p>
                            </div>

                            <div className="mt-auto space-y-4 relative z-10 pt-4 border-t border-primary/5 dark:border-white/5">
                                {cert.skills && cert.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.slice(0, 3).map(skill => (
                                            <span key={skill} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-secondary rounded-md text-muted-foreground border border-primary/10 dark:border-white/10">
                                                {skill}
                                            </span>
                                        ))}
                                        {cert.skills.length > 3 && (
                                            <span className="text-[10px] font-semibold px-2 py-1 text-muted-foreground">
                                                +{cert.skills.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                )}

                                <div className="flex items-center justify-between mt-4">
                                    {cert.credential_id && (
                                        <div className="text-xs text-muted-foreground/50 font-mono truncate max-w-[120px]" title={cert.credential_id}>
                                            ID: {cert.credential_id}
                                        </div>
                                    )}

                                    <a
                                        href={cert.certificate_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto flex items-center gap-1.5 text-sm font-medium hover:underline transition-all"
                                        style={{ color: cert.color_code }}
                                    >
                                        <Award size={14} />
                                        <span>View</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
