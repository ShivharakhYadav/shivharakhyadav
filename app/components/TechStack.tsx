import { motion } from "motion/react";
import { Code2, Rocket, Zap, Boxes } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    techs: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 92, icon: "💠" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
    ],
  },
  {
    title: "Backend",
    icon: Rocket,
    color: "from-indigo-500 to-purple-500",
    techs: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express", level: 85, icon: "⚡" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MongoDB", level: 82, icon: "🍃" },
    ],
  },
  {
    title: "AI/ML",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    techs: [
      { name: "OpenAI API", level: 90, icon: "🤖" },
      { name: "LangChain", level: 85, icon: "⛓️" },
      { name: "Vector DBs", level: 80, icon: "🔍" },
      { name: "RAG", level: 88, icon: "📚" },
    ],
  },
  {
    title: "DevOps",
    icon: Boxes,
    color: "from-cyan-500 to-blue-500",
    techs: [
      { name: "Docker", level: 82, icon: "🐳" },
      { name: "AWS", level: 78, icon: "☁️" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Git", level: 95, icon: "🌿" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 dark:from-indigo-500/20 dark:to-purple-500/20 dark:border-indigo-400/30 mb-6"
          >
            <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm text-indigo-700 dark:text-indigo-300">
              Tech Stack
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Expertise across the full stack with focus on modern, scalable
            solutions
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Tech Items */}
              <div className="space-y-4">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-medium text-slate-900 dark:text-white">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {tech.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.2,
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            {
              icon: "🎯",
              label: "Problem Solving",
              color: "from-orange-400 to-red-500",
            },
            {
              icon: "🚀",
              label: "Performance",
              color: "from-green-400 to-emerald-500",
            },
            {
              icon: "♿",
              label: "Accessibility",
              color: "from-blue-400 to-cyan-500",
            },
            {
              icon: "📱",
              label: "Responsive",
              color: "from-purple-400 to-pink-500",
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg text-center`}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <div className="font-semibold">{skill.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
