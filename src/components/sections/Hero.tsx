import { motion } from "framer-motion";
import { greeting, socialMediaLinks, abelsoftStats } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  FileText,
} from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" },
});

const socialLinks = [
  { href: socialMediaLinks.github, icon: Github, label: "GitHub" },
  { href: socialMediaLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${socialMediaLinks.gmail}`, icon: Mail, label: "Email" },
  { href: socialMediaLinks.facebook, icon: Facebook, label: "Facebook" },
];

const stats = [
  { value: abelsoftStats.totalPRs.toLocaleString(), label: "PRs" },
  { value: abelsoftStats.totalFilesChanged.toLocaleString(), label: "Files" },
  {
    value: `+${(abelsoftStats.totalLinesAdded / 1000).toFixed(1)}k`,
    label: "Lines",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* --- Text column --- */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.span
              {...fadeUp(0)}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-blue-500/30 text-blue-400 bg-blue-500/10 mb-8"
            >
              Software Developer
            </motion.span>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.15)}
              className="text-6xl md:text-7xl lg:text-8xl font-agustina gradient-text mb-6 leading-tight"
            >
              {greeting.full_name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
            >
              {greeting.subTitle}
            </motion.p>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex items-center gap-8 mb-10"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="font-mono text-2xl md:text-3xl font-semibold text-amber-400">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                  {i < stats.length - 1 && (
                    <span className="ml-6 text-white/10 select-none">|</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Social links + Resume */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex flex-wrap items-center gap-3"
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/25 transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}

              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-shadow duration-300"
              >
                <FileText size={16} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* --- Avatar column --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow behind avatar */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 blur-2xl" />

              <div className="relative w-full h-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src={getImageUrl("avatar.jpg")}
                  alt={greeting.full_name}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
