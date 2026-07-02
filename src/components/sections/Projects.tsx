import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { projects, projectsHeader } from "../../portfolio";
import { getImageUrl } from "../../utils/getImageUrl";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Images,
  MonitorPlay,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const badgeColorMap: Record<string, string> = {
  warning: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  success: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  danger: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  info: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  primary: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

function getLinkIcon(iconifyClass: string) {
  if (iconifyClass.includes("github")) return <Github className="w-4 h-4" />;
  if (iconifyClass.includes("web")) return <ExternalLink className="w-4 h-4" />;
  if (iconifyClass.includes("lock"))
    return <Icon icon={iconifyClass} className="w-4 h-4" />;
  return <ExternalLink className="w-4 h-4" />;
}

type Slide = { type: "image" | "video"; src: string };

type GalleryState = { name: string; slides: Slide[]; index: number };

const buildSlides = (project: (typeof projects.data)[number]): Slide[] => [
  ...project.images.map((img) => ({ type: "image" as const, src: getImageUrl(img) })),
  ...(project.videos ?? []).map((v) => ({ type: "video" as const, src: v })),
];

const Lightbox = ({
  gallery,
  onClose,
  onNavigate,
}: {
  gallery: GalleryState;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) => {
  const { name, slides, index } = gallery;
  const slide = slides[index];
  const prev = () => onNavigate((index - 1 + slides.length) % slides.length);
  const next = () => onNavigate((index + 1) % slides.length);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${name} gallery`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4 text-white/90">
        <span className="text-sm md:text-base font-semibold truncate">
          {name}
          <span className="ml-3 text-white/50 font-normal">
            {index + 1} / {slides.length}
          </span>
        </span>
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Slide */}
      <div className="flex-1 flex items-center justify-center px-14 md:px-20 pb-6 min-h-0">
        <div onClick={(e) => e.stopPropagation()} className="max-h-full max-w-full flex items-center justify-center">
          {slide.type === "image" ? (
            <img
              src={slide.src}
              alt={`${name} screenshot ${index + 1}`}
              className="max-h-[78vh] max-w-full rounded-xl shadow-2xl object-contain"
            />
          ) : (
            <iframe
              src={slide.src}
              title={`${name} video ${index + 1}`}
              className="w-[min(90vw,960px)] aspect-video rounded-xl shadow-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>

      {/* Nav arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-2 pb-5" onClick={(e) => e.stopPropagation()}>
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => onNavigate(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [gallery, setGallery] = useState<GalleryState | null>(null);

  const closeGallery = useCallback(() => setGallery(null), []);

  useEffect(() => {
    if (!gallery) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft")
        setGallery((g) => g && { ...g, index: (g.index - 1 + g.slides.length) % g.slides.length });
      if (e.key === "ArrowRight")
        setGallery((g) => g && { ...g, index: (g.index + 1) % g.slides.length });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [gallery ? gallery.name : null, closeGallery]);

  const openGallery = (project: (typeof projects.data)[number]) => {
    const slides = buildSlides(project);
    if (slides.length === 0) return;
    setGallery({ name: project.name, slides, index: 0 });
  };

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-foreground mb-4">
            {projectsHeader.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {projectsHeader.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.data.map((project, index) => {
            const slideCount = buildSlides(project).length;
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300"
            >
              {/* Image Area */}
              <div
                className="relative aspect-video overflow-hidden cursor-pointer"
                onClick={() => openGallery(project)}
              >
                <img
                  src={getImageUrl(project.images[0])}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {slideCount > 1 && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/15 text-white rounded-lg text-sm font-medium">
                      <Images className="w-4 h-4" />
                      {slideCount} shots
                    </span>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      <MonitorPlay className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                </div>

                {/* Badge */}
                {project.badge && (
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${
                        badgeColorMap[project.badge.color] || badgeColorMap.primary
                      }`}
                    >
                      <span>{project.badge.icon}</span>
                      {project.badge.text}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="font-semibold text-foreground text-lg leading-tight">
                  {project.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.briefDescription}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
                  {project.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center gap-1 text-xs text-muted-foreground"
                      title={lang.name}
                    >
                      <Icon
                        icon={lang.iconifyClass}
                        className="w-4 h-4"
                        style={lang.color ? { color: lang.color } : undefined}
                      />
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  {project.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-blue-400 transition-colors"
                      aria-label={link.name}
                    >
                      {getLinkIcon(link.iconifyClass)}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>

      {gallery &&
        createPortal(
          <Lightbox
            gallery={gallery}
            onClose={closeGallery}
            onNavigate={(index) => setGallery((g) => g && { ...g, index })}
          />,
          document.body
        )}
    </section>
  );
};

export default Projects;
