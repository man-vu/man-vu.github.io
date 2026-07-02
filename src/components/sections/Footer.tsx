import { greeting } from "../../portfolio";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <a
          href="#home"
          className="inline-block mb-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top ↑
        </a>
        <p className="text-sm text-muted-foreground">
          Built by {greeting.full_name}
        </p>
        <p className="text-xs text-muted-foreground/40 mt-2">
          {greeting.title}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
