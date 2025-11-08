"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Brain, Globe, ChevronDown, Award } from "lucide-react";
import { Certification, CertificationCategory } from "@/data/certifications";

interface CertificationCategoryProps {
  category: CertificationCategory;
  title: string;
  icon: React.ReactNode;
  certifications: Certification[];
  color: string;
  bgColor: string;
}

export default function CertificationCategoryPanel({
  category,
  title,
  icon,
  certifications,
  color,
  bgColor,
}: CertificationCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 ${color} rounded-lg`}>{icon}</div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {certifications.length} {certifications.length === 1 ? "certification" : "certifications"}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-600 dark:text-gray-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 ${color} rounded-lg flex-shrink-0`}>
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Issued: {cert.issueDate}
                        {cert.expirationDate && ` • Expires: ${cert.expirationDate}`}
                      </p>
                      {cert.credentialId && (
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>

                  {cert.technologies && cert.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {cert.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

