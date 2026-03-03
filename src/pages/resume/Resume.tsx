import { useEffect } from "react";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { greeting } from "../../portfolio";

const Resume = () => {
    // If the resume is simply an external link or a static PDF from public/assets, we can embed or redirect.
    // Here we will provide a simple viewer/fallback.

    useEffect(() => {
        // Optionally auto-redirect to the actual PDF if needed
        // window.location.href = greeting.resumeLink;
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background p-6">
            <div className="max-w-6xl w-full mx-auto flex flex-col h-full flex-1">
                <div className="flex items-center justify-between mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-secondary transition-colors font-medium text-sm"
                    >
                        <MoveLeft size={16} />
                        Back to Home
                    </Link>

                    <a
                        href={greeting.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                    >
                        Download PDF
                    </a>
                </div>

                <div className="flex-1 glass-panel rounded-3xl overflow-hidden relative shadow-2xl p-2 md:p-4">
                    <iframe
                        src={greeting.resumeLink}
                        className="w-full h-[80vh] border-0 rounded-2xl bg-white"
                        title="Resume PDF Viewer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Resume;
