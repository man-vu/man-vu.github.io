import { motion } from "framer-motion";
import { greeting, socialMediaLinks } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { Github, Linkedin, Mail, Facebook, ExternalLink } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-24 pb-12 flex items-center justify-center relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-2xl md:text-3xl font-medium text-muted-foreground mb-4"
                        >
                            Hello, I am
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                            className="text-6xl md:text-8xl lg:text-9xl font-agustina font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 mb-6 drop-shadow-lg"
                        >
                            {greeting.full_name}
                        </motion.h1>

                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-xl md:text-2xl font-sans-medium text-primary dark:text-white mb-6"
                        >
                            {greeting.title}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed"
                        >
                            {greeting.subTitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                        >
                            <a
                                href={socialMediaLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full glass-panel hover:scale-110 transition-transform text-foreground"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href={socialMediaLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full glass-panel hover:scale-110 transition-transform text-[#0077b5]"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href={socialMediaLinks.gmail}
                                className="p-3 rounded-full glass-panel hover:scale-110 transition-transform text-[#ea4335]"
                            >
                                <Mail size={24} />
                            </a>
                            <a
                                href={socialMediaLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full glass-panel hover:scale-110 transition-transform text-[#1877f2]"
                            >
                                <Facebook size={24} />
                            </a>

                            <a
                                href={greeting.resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all flex items-center gap-2"
                            >
                                <span>Resume</span>
                                <ExternalLink size={18} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="flex-1 w-full max-w-sm md:max-w-md lg:max-w-lg relative"
                    >
                        <div className="relative aspect-square rounded-full p-2 glass-panel overflow-hidden">
                            <img
                                src={getImageUrl('avatar.jpg')}
                                alt={greeting.full_name}
                                className="w-full h-full object-cover rounded-full pointer-events-none"
                            />
                            {/* Inner glow overlay */}
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(59,130,246,0.3)] pointer-events-none" />
                        </div>

                        {/* Decorative floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-[20px]"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[30px]"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
