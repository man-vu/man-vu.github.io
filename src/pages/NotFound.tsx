import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
            <div className="text-center glass-panel p-12 rounded-[2rem] max-w-lg w-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] -z-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] -z-10" />

                <h1 className="text-8xl font-agustina font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                    404
                </h1>
                <h2 className="text-2xl font-sans-bold mb-4">Page Not Found</h2>
                <p className="text-muted-foreground mb-8">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                >
                    <MoveLeft size={18} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
