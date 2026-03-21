import { useTheme } from "next-themes";

const BackgroundElements = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-5]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "64px 64px",
          backgroundImage: isLight
            ? "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
        }}
      />

      {/* Single subtle gradient orb - top right */}
      <div
        className="absolute -top-[20vh] -right-[10vw] w-[60vw] h-[60vw] rounded-full"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grain / noise overlay */}
      <div className="grain-overlay" />
    </div>
  );
};

export default BackgroundElements;
