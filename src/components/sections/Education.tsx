import { motion } from "framer-motion";
import { degrees } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { ExternalLink, GraduationCap, Calendar, Award } from "lucide-react";

const EducationCard = ({
  degree,
  isInProgress = false,
  index = 0,
}: {
  degree: any;
  isInProgress?: boolean;
  index?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 md:p-8 group"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Logo */}
        {degree.logo_path && (
          <div className="shrink-0">
            <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-md group-hover:shadow-lg transition-shadow">
              <img
                src={getImageUrl(degree.logo_path)}
                alt={degree.alt_name || degree.subtitle}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">
                {degree.title}
              </h3>
              <p className="text-blue-400 font-medium mt-1">{degree.subtitle}</p>
            </div>

            {degree.duration && (
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 whitespace-nowrap shrink-0">
                <Calendar size={14} className="text-cyan-500" />
                {degree.duration}
              </span>
            )}
          </div>

          {/* Description bullets */}
          {degree.descriptions && degree.descriptions.length > 0 && (
            <ul className="space-y-2 mt-4">
              {degree.descriptions.map((desc: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                >
                  <span
                    className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${
                      isInProgress ? "bg-cyan-400" : "bg-blue-400"
                    }`}
                  />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          )}

          {/* GPA Badge & Honors */}
          {degree.additional_info && (
            <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-white/5">
              {degree.additional_info.gpa && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
                  <Award size={13} />
                  GPA: {degree.additional_info.gpa}
                </span>
              )}
              {degree.additional_info.honors && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                  <Award size={13} />
                  {degree.additional_info.honors}
                </span>
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-5">
            {degree.website_link && (
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink size={14} />
                Program Details
              </a>
            )}
            {degree.transcript_link && (
              <a
                href={degree.transcript_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                <GraduationCap size={14} />
                View Transcript
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
    <section id="education" className="py-24 relative z-10">
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
            Education
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-14">
          {/* Currently Pursuing */}
          {degrees.inProgressDegrees && degrees.inProgressDegrees.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                </span>
                <h3 className="text-xl font-semibold text-white">
                  Currently Pursuing
                </h3>
              </motion.div>

              <div className="space-y-6">
                {degrees.inProgressDegrees.map((degree: any, index: number) => (
                  <EducationCard
                    key={degree.title}
                    degree={degree}
                    isInProgress={true}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Completed */}
          {degrees.completedDegrees && degrees.completedDegrees.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
                <GraduationCap size={20} className="text-blue-400" />
                <h3 className="text-xl font-semibold text-white">Completed</h3>
              </motion.div>

              <div className="space-y-6">
                {degrees.completedDegrees.map((degree: any, index: number) => (
                  <EducationCard
                    key={degree.title}
                    degree={degree}
                    isInProgress={false}
                    index={index}
                  />
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
