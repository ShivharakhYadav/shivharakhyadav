import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA (Remote)",
    period: "Jan 2023 - Present",
    type: "Full-time",
    description:
      "Leading development of AI-powered SaaS platform with React, Next.js, and Node.js. Architected microservices handling 100K+ daily users.",
    achievements: [
      "Reduced page load time by 60% through optimization",
      "Implemented AI chatbot increasing user engagement by 45%",
      "Mentored 5 junior developers",
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "💼",
  },
  {
    id: 2,
    role: "AI Engineer",
    company: "StartupX",
    location: "New York, NY (Hybrid)",
    period: "Jun 2022 - Dec 2022",
    type: "Contract",
    description:
      "Developed GPT-powered content generation tools and integrated LangChain for document processing. Built RAG systems for intelligent search.",
    achievements: [
      "Built MVP in 6 weeks, securing $2M seed funding",
      "Integrated OpenAI API with custom fine-tuning",
      "Achieved 92% accuracy in content classification",
    ],
    color: "from-purple-500 to-pink-500",
    icon: "🤖",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "WebSolutions Co.",
    location: "Austin, TX (Remote)",
    period: "Mar 2021 - May 2022",
    type: "Full-time",
    description:
      "Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UIs.",
    achievements: [
      "Delivered 15+ client projects on time and budget",
      "Improved code quality with 85% test coverage",
      "Reduced bug reports by 40% through rigorous testing",
    ],
    color: "from-indigo-500 to-blue-500",
    icon: "⚛️",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 dark:from-orange-500/20 dark:to-red-500/20 dark:border-orange-400/30 mb-6"
          >
            <Briefcase className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm text-orange-700 dark:text-orange-300">
              Experience
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Building impactful products across different industries
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`lg:w-[calc(50%-2rem)] p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                      {exp.type}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                      Key Achievements
                    </div>
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + i * 0.1,
                        }}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Timeline Dot - Only visible on large screens */}
                <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} border-4 border-white dark:border-slate-900 shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl shadow-blue-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Interested in working together?
              </h3>
              <p className="text-blue-100">
                Let's discuss how I can contribute to your team
              </p>
            </div>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
