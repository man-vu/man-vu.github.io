import { motion } from 'framer-motion';

export default function BackgroundElements() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-5]">
            <motion.div
                animate={{
                    x: ["0%", "5%", "-5%", "0%"],
                    y: ["0%", "-5%", "5%", "0%"],
                    scale: [1, 1.2, 0.8, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10vh] left-[-10vw] w-[60vw] h-[60vw] bg-blue-500/40 dark:bg-blue-600/40 rounded-full blur-[10vw]"
            />
            <motion.div
                animate={{
                    x: ["0%", "-5%", "5%", "0%"],
                    y: ["0%", "5%", "-5%", "0%"],
                    scale: [1, 0.8, 1.2, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10vh] right-[-10vw] w-[50vw] h-[50vw] bg-indigo-500/40 dark:bg-purple-600/40 rounded-full blur-[10vw]"
            />
            <motion.div
                animate={{
                    x: ["0%", "8%", "-4%", "0%"],
                    y: ["0%", "4%", "-8%", "0%"],
                    scale: [1, 1.3, 0.9, 1]
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20vh] left-[20vw] w-[60vw] h-[60vw] bg-fuchsia-500/40 dark:bg-pink-600/30 rounded-full blur-[12vw]"
            />
            <motion.div
                animate={{
                    x: ["0%", "-4%", "8%", "0%"],
                    y: ["0%", "-8%", "4%", "0%"],
                    scale: [1, 1.2, 0.8, 1]
                }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10vh] left-[30vw] w-[50vw] h-[50vw] bg-emerald-500/30 dark:bg-teal-600/30 rounded-full blur-[12vw]"
            />
        </div>
    );
}
