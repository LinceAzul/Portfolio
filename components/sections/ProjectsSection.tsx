"use client";

import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  if (projects.length === 0) {
    return (
      <Section id="projects" title="Projects">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Projects will be displayed here.</p>
          <p className="text-sm mt-2">Please add your projects in data/projects.ts</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="projects" title="Projects" subtitle="Some of my recent work">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

