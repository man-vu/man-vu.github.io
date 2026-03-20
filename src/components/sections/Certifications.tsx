import { motion } from "framer-motion";
import { certifications } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.certifications.map((cert: any, index: number) => (
            <motion.div
              key={cert.title + index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="glass-card rounded-xl p-5 flex flex-col group relative overflow-hidden border-l-2 border-transparent hover:border-l-2 transition-all duration-300"
              style={
                {
                  "--cert-color": cert.color_code,
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeftColor =
                  cert.color_code;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeftColor =
                  "transparent";
              }}
            >
              {/* Header: Logo + Title */}
              <div className="flex items-start gap-3 mb-3">
                {cert.logo_path && (
                  <div className="w-10 h-10 rounded-lg bg-white p-1.5 shadow-sm shrink-0">
                    <img
                      src={getImageUrl(cert.logo_path)}
                      alt={cert.alt_name || cert.subtitle}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {cert.subtitle}
                    {cert.issued && (
                      <span className="text-slate-500"> -- {cert.issued}</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 3).map((skill: string) => (
                    <span
                      key={skill}
                      className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] font-medium text-slate-500 px-1 py-0.5">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {/* Footer: Link + Credential ID */}
              <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                {cert.credential_id && (
                  <span
                    className="text-[10px] text-slate-500 font-mono truncate max-w-[120px]"
                    title={cert.credential_id}
                  >
                    {cert.credential_id}
                  </span>
                )}

                <a
                  href={cert.certificate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Award size={12} />
                  View Certificate
                  <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
