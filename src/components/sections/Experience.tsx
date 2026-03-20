import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, abelsoftStats } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import {
  Calendar,
  MapPin,
  ExternalLink,
  GitPullRequest,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Code2,
  FileCode,
  TrendingUp,
} from "lucide-react";

const Experience = () => {
  const [showContributions, setShowContributions] = useState(false);
  const [showRecentPRs, setShowRecentPRs] = useState(false);

  const maxPRCount = Math.max(
    ...abelsoftStats.topAreas.map((a) => a.prs)
  );

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            {experience.title}
          </h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl text-lg">
            {experience.description}
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            {
              icon: GitPullRequest,
              value: abelsoftStats.totalPRs.toLocaleString(),
              label: "Pull Requests Merged",
            },
            {
              icon: FileCode,
              value: abelsoftStats.totalFilesChanged.toLocaleString(),
              label: "Files Changed",
            },
            {
              icon: Code2,
              value: `+${(abelsoftStats.totalLinesAdded / 1000).toFixed(1)}k`,
              label: "Lines Added",
            },
            {
              icon: TrendingUp,
              value: abelsoftStats.tenure,
              label: "Years at ABELSoft",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 text-center"
            >
              <stat.icon size={20} className="mx-auto mb-2 text-amber-500" />
              <div className="text-2xl md:text-3xl font-bold font-mono text-amber-500">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-white/10 space-y-12">
          {experience.sections[0].experiences.map((exp, index) => {
            const isAbelsoft = exp.company === "ABELSoft Inc.";

            return (
              <motion.div
                key={exp.company + exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[calc(2rem+5px)] top-6 w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-900 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />

                {/* Job Card */}
                <div className="glass-card rounded-2xl p-8 border-l-2 border-cyan-500">
                  {/* Header: Logo + Title + Company */}
                  <div className="flex items-start gap-4 mb-5">
                    {exp.logo_path && (
                      <div className="w-14 h-14 rounded-lg bg-white p-1.5 shadow-md shrink-0">
                        <img
                          src={getImageUrl(exp.logo_path)}
                          alt={exp.company}
                          className="w-full h-full object-contain rounded"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm mt-1 transition-colors"
                      >
                        {exp.company}
                        <ExternalLink size={12} className="opacity-70" />
                      </a>
                    </div>
                  </div>

                  {/* Duration + Location */}
                  <div className="flex flex-wrap gap-4 mb-5 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-cyan-500" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-cyan-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description Bullets */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((sentence, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-400"
                      >
                        <div className="mt-2 shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        </div>
                        <span className="text-sm leading-relaxed">
                          {sentence}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* ABELSoft: Expandable Sections */}
                  {isAbelsoft && exp.contributionAreas && (
                    <div className="space-y-4">
                      {/* Contribution Breakdown Toggle */}
                      <button
                        onClick={() => setShowContributions(!showContributions)}
                        className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <BarChart3 size={16} />
                        <span>
                          {showContributions ? "Hide" : "Show"} Impact
                          Breakdown ({exp.contributionAreas.length} areas)
                        </span>
                        {showContributions ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>

                      <AnimatePresence>
                        {showContributions && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                              {exp.contributionAreas.map((area, areaIdx) => (
                                <motion.div
                                  key={area.area}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: areaIdx * 0.05 }}
                                  className="p-4 rounded-xl bg-white/5 border border-white/5"
                                >
                                  {/* Area Name + PR Badge */}
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-sm font-semibold text-white">
                                      {area.area}
                                    </span>
                                    <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
                                      {area.prCount} PRs
                                    </span>
                                  </div>

                                  {/* Impact statement */}
                                  {area.impact && (
                                    <p className="text-xs font-medium text-cyan-400 mb-2">
                                      {area.impact}
                                    </p>
                                  )}

                                  {/* Progress Bar */}
                                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{
                                        width: `${(area.prCount / maxPRCount) * 100}%`,
                                      }}
                                      transition={{
                                        duration: 0.8,
                                        delay: areaIdx * 0.05,
                                      }}
                                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                    />
                                  </div>

                                  {/* Highlights */}
                                  <ul className="space-y-1">
                                    {area.highlights.map((h, hi) => (
                                      <li
                                        key={hi}
                                        className="text-xs text-slate-500 flex gap-1.5"
                                      >
                                        <span className="text-cyan-600 mt-0.5 shrink-0">
                                          -
                                        </span>
                                        {h}
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Recent PRs Toggle */}
                      <button
                        onClick={() => setShowRecentPRs(!showRecentPRs)}
                        className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <GitPullRequest size={16} />
                        <span>
                          {showRecentPRs ? "Hide" : "Show"} Recent Contributions
                        </span>
                        {showRecentPRs ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>

                      <AnimatePresence>
                        {showRecentPRs && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 pt-2">
                              {abelsoftStats.recentPRs.map((pr, prIdx) => (
                                <motion.div
                                  key={pr.date + prIdx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: prIdx * 0.05 }}
                                  className="flex items-start gap-4 p-3 rounded-lg bg-white/5 border border-white/5"
                                >
                                  <span className="text-xs font-mono text-slate-500 shrink-0 mt-0.5">
                                    {pr.date}
                                  </span>
                                  <span className="text-sm text-slate-400">
                                    {pr.title}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
