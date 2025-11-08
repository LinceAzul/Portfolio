"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { about } from "@/data/about";
import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import HackTheBoxIcon from "@/components/icons/HackTheBoxIcon";
import TryHackMeIcon from "@/components/icons/TryHackMeIcon";

export default function AboutSection() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            {about.profileImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 shadow-lg"
              >
                <Image
                  src={about.profileImage}
                  alt={about.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
              >
                {about.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
              >
                {about.title}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-400 mb-6"
              >
                <MapPin size={18} />
                <span>{about.location}</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              >
                {about.bio}
              </motion.p>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-6"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {about.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-4"
              >
                {about.email && (
                  <a
                    href={`mailto:${about.email}`}
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail size={20} className="text-gray-700 dark:text-gray-300" />
                  </a>
                )}
                {about.github && (
                  <a
                    href={about.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={20} className="text-gray-700 dark:text-gray-300" />
                  </a>
                )}
                {about.linkedin && (
                  <a
                    href={about.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
                  </a>
                )}
                {about.hackthebox && (
                  <a
                    href={about.hackthebox}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="HackTheBox"
                  >
                    <HackTheBoxIcon size={20} />
                  </a>
                )}
                {about.tryhackme && (
                  <a
                    href={about.tryhackme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="TryHackMe"
                  >
                    <TryHackMeIcon size={20} />
                  </a>
                )}
                {about.website && (
                  <a
                    href={about.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    aria-label="Website"
                  >
                    <ExternalLink size={20} className="text-gray-700 dark:text-gray-300" />
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

