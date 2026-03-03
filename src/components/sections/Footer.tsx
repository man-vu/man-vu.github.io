import { greeting } from "../../portfolio";

const Footer = () => {
    return (
        <footer className="py-8 relative z-10 border-t border-primary/10 dark:border-white/10 glass-panel rounded-none">
            <div className="container mx-auto px-6 text-center">
                <p className="text-muted-foreground text-sm font-medium">
                    Made with ❤️ by {greeting.full_name}
                </p>
                <p className="text-muted-foreground/60 text-xs mt-2 font-agustina">
                    {greeting.title}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
