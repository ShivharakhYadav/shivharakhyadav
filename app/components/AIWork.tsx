import { motion } from "motion/react";
import {
  Brain,
  Sparkles,
  Zap,
  Code2,
  Database,
  MessageSquare,
} from "lucide-react";

const aiProjects = [
  {
    id: 1,
    title: "AI Content Generator",
    description:
      "GPT-powered tool that generates high-quality blog posts, social media content, and marketing copy with custom tone and style.",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-500",
    stats: { metric: "10K+", label: "Content pieces" },
    tags: ["OpenAI", "LangChain", "Next.js"],
  },
  {
    id: 2,
    title: "Document Intelligence",
    description:
      "RAG-based system for intelligent document search and question-answering across large knowledge bases with vector embeddings.",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    stats: { metric: "1M+", label: "Documents indexed" },
    tags: ["Pinecone", "OpenAI", "Python"],
  },
  {
    id: 3,
    title: "Smart Code Assistant",
    description:
      "AI-powered coding companion that provides intelligent code suggestions, refactoring advice, and bug detection in real-time.",
    icon: Code2,
    color: "from-indigo-500 to-purple-500",
    stats: { metric: "95%", label: "Accuracy rate" },
    tags: ["Codex", "TypeScript", "VSCode"],
  },
  {
    id: 4,
    title: "Chatbot Platform",
    description:
      "Enterprise-grade conversational AI platform with multi-language support, sentiment analysis, and custom training capabilities.",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
    stats: { metric: "50K+", label: "Daily conversations" },
    tags: ["DialogFlow", "Node.js", "React"],
  },
];

const capabilities = [
  {
    title: "LLM Integration",
    items: ["OpenAI GPT", "Claude", "Gemini", "Custom Models"],
    icon: "🧠",
  },
  {
    title: "Vector Databases",
    items: ["Pinecone", "Weaviate", "Chroma", "FAISS"],
    icon: "🔍",
  },
  {
    title: "Frameworks",
    items: ["LangChain", "LlamaIndex", "Semantic Kernel", "Haystack"],
    icon: "⚡",
  },
  {
    title: "Techniques",
    items: ["RAG", "Fine-tuning", "Prompt Engineering", "Agents"],
    icon: "🎯",
  },
];

export default function AIWork() {
  return (
    <section id="ai-work" className="py-24 px-4 sm:px-6 lg:px-8 relative">
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
            <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-purple-700 dark:text-purple-300">
              AI Engineering
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            AI & Machine Learning
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Leveraging cutting-edge AI to solve real-world problems
          </p>
        </motion.div>

        {/* AI Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {project.stats.metric}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {project.stats.label}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              AI Tech Stack
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg"
              >
                <div className="text-4xl mb-3 text-center">
                  {capability.icon}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-center">
                  {capability.title}
                </h4>
                <ul className="space-y-2">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Need AI Integration?</h3>
                <p className="text-purple-100 mb-4">
                  Let's build intelligent solutions that scale
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-6 py-3 rounded-xl bg-white text-purple-600 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Get in touch
                </motion.button>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-2xl shadow-blue-500/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Building with AI?</h3>
                <p className="text-blue-100 mb-4">
                  Check out my latest articles and tutorials
                </p>
                <motion.a
                  href="https://medium.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Read articles
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
