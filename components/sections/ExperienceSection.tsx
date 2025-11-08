"use client";

import Section from "@/components/Section";
import { Timeline, TimelineItem } from "@/components/Timeline";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  if (experiences.length === 0) {
    return (
      <Section id="experience" title="Experience">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Experience data will be displayed here.</p>
          <p className="text-sm mt-2">Please add your experience in data/experience.ts</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      <Timeline>
        {experiences.map((exp) => (
          <TimelineItem
            key={exp.id}
            title={exp.position}
            subtitle={exp.company}
            date={`${exp.startDate} - ${exp.endDate || "Present"}`}
            description={exp.description}
            technologies={exp.technologies}
            current={exp.current}
            url={exp.url}
          />
        ))}
      </Timeline>
    </Section>
  );
}

