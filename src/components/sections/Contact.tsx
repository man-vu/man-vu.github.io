import { contactPageData } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ExternalLink } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  Github: <Github className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
};

function getIcon(name: string) {
  return iconMap[name] || <ExternalLink className="w-5 h-5" />;
}

const Contact = () => {
  const { contactSection, contactMethods } = contactPageData;

  return (
    <section id="contact" className="py-24 px-4">
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
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto mb-4 rounded-full" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Profile Image + Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center md:items-start gap-6"
          >
            <div className="relative">
              <img
                src={getImageUrl(contactSection.profile_image_path)}
                alt="Man Vu"
                className="w-64 h-64 object-cover rounded-2xl border border-white/10"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center md:text-left">
              {contactSection.description}
            </p>
          </motion.div>

          {/* Right: Contact Method Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            {contactMethods.map((method, index) => {
              const content = (
                <div
                  className={`glass-card p-5 flex items-center gap-4 transition-colors ${
                    method.href
                      ? "hover:border-blue-500/30 cursor-pointer"
                      : ""
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      method.primary
                        ? "bg-blue-500/15 text-blue-400"
                        : "bg-white/5 text-muted-foreground"
                    }`}
                  >
                    {getIcon(method.icon)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">
                      {method.title}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {method.value}
                    </p>
                  </div>
                  {method.href && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                  )}
                </div>
              );

              return method.href ? (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true, margin: "-100px" }}
                  aria-label={`${method.title}: ${method.value}`}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {content}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
