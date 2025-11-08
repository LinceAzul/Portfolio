"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string | string[];
  technologies?: string[];
  current?: boolean;
  url?: string;
  children?: ReactNode;
}

export function TimelineItem({
  title,
  subtitle,
  date,
  description,
  technologies,
  current = false,
  url,
  children,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-9 md:pl-13 pb-12 border-l-2 border-blue-200 dark:border-blue-800"
    >
      {/* Timeline dot with pulsating animation */}
      <motion.div
        className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900 z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Pulsating ring effect */}
      <motion.div
        className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-30"
        animate={{
          scale: [1, 2.2, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Content */}
      {url ? (
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer hover:shadow-2xl"
          whileHover={{
            scale: 1.02,
            y: -4,
          }}
          whileTap={{ scale: 0.98 }}
        >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{subtitle}</p>
          </div>
          <span
            className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
              current
                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {date}
          </span>
        </div>

        {description && (
          <div className="mb-4">
            {typeof description === "string" ? (
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            ) : (
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                {description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {children}
      </motion.a>
      ) : (
        <motion.div
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 cursor-default hover:shadow-2xl"
          whileHover={{
            scale: 1.02,
            y: -4,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{subtitle}</p>
            </div>
            <span
              className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
                current
                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {date}
            </span>
          </div>

          {description && (
            <div className="mb-4">
              {typeof description === "string" ? (
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
              ) : (
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                  {description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

export function Timeline({ children }: { children: ReactNode }) {
  return <div className="relative">{children}</div>;
}

