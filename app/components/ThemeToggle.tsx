import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function ThemeToggle({
  darkMode,
  setDarkMode,
}: ThemeToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed top-24 right-8 z-40"
    >
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all flex items-center justify-center overflow-hidden group"
        aria-label="Toggle theme"
      >
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-indigo-600"
          initial={false}
          animate={{
            opacity: darkMode ? 0.1 : 0.1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Sun Icon */}
        <motion.div
          className="absolute"
          initial={false}
          animate={{
            scale: darkMode ? 0 : 1,
            rotate: darkMode ? 90 : 0,
            opacity: darkMode ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Sun className="w-6 h-6 text-yellow-600" />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          className="absolute"
          initial={false}
          animate={{
            scale: darkMode ? 1 : 0,
            rotate: darkMode ? 0 : -90,
            opacity: darkMode ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Moon className="w-6 h-6 text-blue-400" />
        </motion.div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium whitespace-nowrap pointer-events-none shadow-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-4 border-l-slate-900 dark:border-l-white border-y-4 border-y-transparent" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
