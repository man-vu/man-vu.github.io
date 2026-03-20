import { testimonials, testimonialsHeader } from "../../portfolio";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

function isValidImageUrl(url: string): boolean {
  return url.startsWith("http") && !url.includes("URL_TO");
}

function getInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4">
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
            {testimonialsHeader.title}
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {testimonialsHeader.description}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.data.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-6 relative overflow-hidden"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/[0.04]" />

              {/* Testimonial Text */}
              <div className="mb-6 relative z-10">
                {item.testimonial.split("\n\n").map((paragraph, pIndex) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  return (
                    <p
                      key={pIndex}
                      className="text-sm text-muted-foreground italic leading-relaxed mb-3 last:mb-0"
                    >
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                {isValidImageUrl(item.profilePicture) ? (
                  <img
                    src={item.profilePicture}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-semibold ring-2 ring-blue-500/20">
                    {getInitial(item.name)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {item.position}
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    {item.relationship}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
