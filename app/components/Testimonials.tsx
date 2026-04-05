import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStartup Inc.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "Working with this developer was an absolute game-changer for our SaaS product. The AI integrations were seamless and the code quality is exceptional. Highly recommended!",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content:
      "Exceptional technical skills and great communication. Delivered our Next.js application ahead of schedule with impressive performance optimizations.",
    rating: 5,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateLab",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content:
      "The attention to detail and user experience is outstanding. Our conversion rates increased by 40% after the redesign. Truly a professional!",
    rating: 5,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder",
    company: "AI Ventures",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    content:
      "Their expertise in AI engineering is top-notch. Built a sophisticated RAG system that exceeded our expectations. Will definitely work together again!",
    rating: 5,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Director of Engineering",
    company: "CloudTech Corp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    content:
      "Clean, maintainable code and excellent problem-solving skills. The project was delivered on time and the ongoing support has been fantastic.",
    rating: 5,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "VP of Product",
    company: "NextGen Apps",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    content:
      "A rare find in the development world - combines technical excellence with strong business understanding. Highly professional and reliable.",
    rating: 5,
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 dark:from-yellow-500/20 dark:to-orange-500/20 dark:border-yellow-400/30 mb-6"
          >
            <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm text-yellow-700 dark:text-yellow-300">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Trusted by founders, CTOs, and product leaders worldwide
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-slate-900 dark:text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + i * 0.05,
                    }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center overflow-hidden shadow-lg`}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {[
            { value: "5.0", label: "Average Rating", icon: "⭐" },
            { value: "15+", label: "Happy Clients", icon: "😊" },
            { value: "99%", label: "Satisfaction Rate", icon: "🎯" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 text-center shadow-lg"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
