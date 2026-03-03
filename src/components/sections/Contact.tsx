import { motion } from "framer-motion";
import { contactPageData } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-agustina font-bold text-primary dark:text-white mb-4">
                        {contactPageData.contactSection.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        {contactPageData.contactSection.description}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Image / Avatar Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-full max-w-sm relative"
                    >
                        <div className="aspect-square rounded-[3rem] p-3 glass-panel overflow-hidden relative group">
                            <img
                                src={getImageUrl(contactPageData.contactSection.profile_image_path)}
                                alt="Contact me"
                                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(20,184,166,0.3)] rounded-[3rem] pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Contact Methods */}
                    <div className="w-full max-w-md space-y-4">
                        {contactPageData.contactMethods.map((method, index) => {
                            const icons: Record<string, any> = {
                                Mail: <Mail />,
                                Linkedin: <Linkedin />,
                                Github: <Github />,
                                MapPin: <MapPin />
                            };

                            const IconCmp = icons[method.icon];

                            return (
                                <motion.a
                                    key={method.title}
                                    href={method.href || "#"}
                                    target={method.href ? "_blank" : undefined}
                                    rel={method.href ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 ${method.primary
                                            ? "glass-panel hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]"
                                            : "bg-transparent border border-transparent hover:bg-secondary/50 cursor-default"
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${method.title === 'Email' ? 'bg-[#ea4335]' :
                                            method.title === 'LinkedIn' ? 'bg-[#0077b5]' :
                                                method.title === 'GitHub' ? 'bg-zinc-800' :
                                                    'bg-teal-500'
                                        }`}>
                                        {IconCmp}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-sans-bold text-primary dark:text-white">
                                            {method.title}
                                        </h4>
                                        <p className="text-sm font-medium text-muted-foreground mt-0.5">
                                            {method.value}
                                        </p>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
