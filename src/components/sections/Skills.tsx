import { motion } from "framer-motion";
import { skills } from "../../portfolio";
import { Icon } from "@iconify/react";

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-agustina font-bold text-primary dark:text-white mb-4">
                        Technical Arsenal
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-20">
                    {skills.data.map((skillGroup, idx) => {
                        const isEven = idx % 2 === 0;

                        return (
                            <div
                                key={skillGroup.title}
                                className={`flex flex-col gap-12 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Decorative / Image Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="flex-1 w-full max-w-md relative"
                                >
                                    <div className="aspect-square glass-panel rounded-[2rem] p-8 flex items-center justify-center relative overflow-hidden group">
                                        {/* Floating subtle gradients */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />

                                        {/* Abstract representational graphic based on title */}
                                        <svg className="w-1/2 h-1/2 text-primary/20 dark:text-white/20 drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            {idx === 0 && (
                                                <>
                                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                                </>
                                            )}
                                            {idx === 1 && (
                                                <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1822 20.2575 10.2687 18 10.0384C17.619 6.643 14.7334 4 11.25 4C7.384 4 4.25 7.13401 4.25 11C4.25 11.0253 4.25013 11.0505 4.2504 11.0756C2.39223 11.5176 1 13.1901 1 15.25C1 17.321 2.67893 19 4.75 19H17.5Z" />
                                            )}
                                            {idx === 2 && (
                                                <>
                                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                                </>
                                            )}
                                        </svg>
                                    </div>
                                </motion.div>

                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                    className="flex-1 space-y-8"
                                >
                                    <h3 className="text-3xl font-sans-bold text-primary dark:text-white">
                                        {skillGroup.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-4">
                                        {skillGroup.softwareSkills.map((software, i) => (
                                            <motion.div
                                                key={software.skillName}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                                className="group flex flex-col items-center justify-center gap-2 p-3 glass-panel rounded-xl hover:-translate-y-2 transition-transform cursor-pointer"
                                                title={software.skillName}
                                            >
                                                <Icon
                                                    icon={software.fontAwesomeClassname}
                                                    style={software.style}
                                                    className="w-10 h-10 group-hover:scale-110 transition-transform"
                                                />
                                                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary dark:group-hover:text-white transition-colors">
                                                    {software.skillName}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <ul className="space-y-4">
                                        {skillGroup.skills.map((sentence, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                                className="flex items-start text-muted-foreground gap-3"
                                            >
                                                <span className="text-purple-500 text-xl font-bold leading-none mt-1">
                                                    •
                                                </span>
                                                <span className="text-base leading-relaxed">
                                                    {sentence}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
