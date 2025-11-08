"use client";

import Section from "@/components/Section";
import { Timeline, TimelineItem } from "@/components/Timeline";
import { education } from "@/data/education";

export default function EducationSection() {
  if (education.length === 0) {
    return (
      <Section id="education" title="Education">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Education data will be displayed here.</p>
          <p className="text-sm mt-2">Please add your education in data/education.ts</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="education" title="Education" subtitle="My academic background">
      <Timeline>
        {education.map((edu) => (
          <TimelineItem
            key={edu.id}
            title={edu.degree}
            subtitle={edu.institution}
            date={`${edu.startDate} - ${edu.endDate || "Present"}`}
            description={edu.description}
            current={edu.current}
          >
            {edu.field && (
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                <span className="font-medium">Field:</span> {edu.field}
              </p>
            )}
            {edu.gpa && (
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-medium">GPA:</span> {edu.gpa}
              </p>
            )}
            {edu.location && (
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                <span className="font-medium">Location:</span> {edu.location}
              </p>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}

