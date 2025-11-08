"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { languages } from "@/data/languages";

export default function LanguagesSection() {
  if (languages.length === 0) {
    return (
      <Section id="languages" title="Languages">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Languages will be displayed here.</p>
          <p className="text-sm mt-2">Please add your languages in data/languages.ts</p>
        </div>
      </Section>
    );
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Native":
        return "from-green-500 to-emerald-600";
      case "Fluent":
        return "from-blue-500 to-cyan-600";
      case "Advanced":
        return "from-purple-500 to-pink-600";
      case "Intermediate":
        return "from-orange-500 to-yellow-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  return (
    <Section id="languages" title="Languages" subtitle="Languages I speak">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {lang.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getLevelColor(
                    lang.level
                  )} text-white`}
                >
                  {lang.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                  className={`h-full bg-gradient-to-r ${getLevelColor(lang.level)} rounded-full`}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-right">
                {lang.proficiency}%
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

