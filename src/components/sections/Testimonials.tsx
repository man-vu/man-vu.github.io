import { motion } from "framer-motion";
import { testimonials, testimonialsHeader } from "../../portfolio";
import { Quote } from "lucide-react";

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 relative z-10 overflow-hidden bg-primary/5 dark:bg-white/5">
            {/* Ambient glows specific to testimonials */}
            <div className="absolute top-0 right-1/4 w-[40vw] h-[40vh] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vh] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-agustina font-bold text-primary dark:text-white mb-4">
                        {testimonialsHeader.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        {testimonialsHeader.description}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.data.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-[2rem] relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 dark:text-white/10 group-hover:text-indigo-500/20 transition-colors" />

                            <div className="flex items-center gap-4 mb-6">
                                {testimonial.profilePicture && !testimonial.profilePicture.includes("URL_TO") ? (
                                    <img
                                        src={testimonial.profilePicture}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/30"
                                    />
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-xl font-sans-bold text-primary dark:text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                        {testimonial.position}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {testimonial.relationship}
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <p className="text-muted-foreground leading-relaxed italic text-sm md:text-base whitespace-pre-line">
                                    "{testimonial.testimonial}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
