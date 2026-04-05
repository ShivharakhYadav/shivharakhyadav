import { motion } from "motion/react";
import { Sparkles, Target, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every pixel matters, every interaction counts",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Love what I do, dedicated to excellence",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "Quality",
    description: "Production-ready code, scalable architecture",
    color: "from-green-500 to-emerald-500",
  },
];

const journey = [
  { year: "2021", event: "Started Full Stack Journey", emoji: "🚀" },
  { year: "2022", event: "First AI Integration Project", emoji: "🤖" },
  { year: "2023", event: "Led SaaS Product Development", emoji: "💼" },
  { year: "2024-Now", event: "AI Engineering & Innovation", emoji: "⚡" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 dark:from-purple-500/20 dark:to-pink-500/20 dark:border-purple-400/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-purple-700 dark:text-purple-300">
              About Me
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A passionate developer turning ideas into impactful products
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Large Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I'm a{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Full Stack AI Engineer
                </span>{" "}
                with{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  3.7 years
                </span>{" "}
                of hands-on experience building production-ready applications.
                My journey started with a curiosity about how things work on the
                web, which evolved into a deep passion for creating elegant,
                scalable solutions.
              </p>
              <p>
                I specialize in the{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  React ecosystem
                </span>{" "}
                (Next.js, TypeScript) and have recently expanded into{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  AI Engineering
                </span>
                , integrating cutting-edge AI capabilities into SaaS products. I
                believe in writing clean, maintainable code and creating
                exceptional user experiences.
              </p>
              <p>
                Beyond coding, I'm passionate about sharing knowledge with the
                developer community, contributing to open source, and staying at
                the forefront of web technologies. I thrive in collaborative
                environments and love turning complex problems into simple,
                intuitive solutions.
              </p>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl shadow-blue-500/20"
          >
            <h3 className="text-xl font-bold mb-6">By the Numbers</h3>
            <div className="space-y-6">
              {[
                { label: "Years Experience", value: "3.7+", icon: "⚡" },
                { label: "Projects Delivered", value: "50+", icon: "🚀" },
                { label: "Happy Clients", value: "15+", icon: "😊" },
                { label: "Tech Stack", value: "20+", icon: "🛠️" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                  <div className="text-3xl">{stat.icon}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            My Journey
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <div className="text-4xl mb-3 text-center">{item.emoji}</div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {item.year}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {item.event}
                  </div>
                </div>
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
