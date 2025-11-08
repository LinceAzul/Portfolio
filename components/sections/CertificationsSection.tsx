"use client";

import Section from "@/components/Section";
import { certifications } from "@/data/certifications";
import CertificationCategoryPanel from "@/components/CertificationCategory";
import { Shield, Brain, Globe } from "lucide-react";

export default function CertificationsSection() {
  if (certifications.length === 0) {
    return (
      <Section id="certifications" title="Certifications">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Certifications will be displayed here.</p>
          <p className="text-sm mt-2">Please add your certifications in data/certifications.ts</p>
        </div>
      </Section>
    );
  }

  const cybersecurityCerts = certifications.filter((c) => c.category === "cybersecurity");
  const aiCerts = certifications.filter((c) => c.category === "ai");
  const languageCerts = certifications.filter((c) => c.category === "languages");

  return (
    <Section id="certifications" title="Certifications" subtitle="Professional credentials organized by category">
      <div className="max-w-7xl mx-auto">
        {cybersecurityCerts.length > 0 && (
          <CertificationCategoryPanel
            category="cybersecurity"
            title="🛡️ Cybersecurity Certifications"
            icon={<Shield className="w-6 h-6 text-white" />}
            certifications={cybersecurityCerts}
            color="bg-blue-600 dark:bg-blue-500"
            bgColor="bg-blue-50 dark:bg-blue-900/20"
          />
        )}

        {aiCerts.length > 0 && (
          <CertificationCategoryPanel
            category="ai"
            title="🤖 Artificial Intelligence Certifications"
            icon={<Brain className="w-6 h-6 text-white" />}
            certifications={aiCerts}
            color="bg-purple-600 dark:bg-purple-500"
            bgColor="bg-purple-50 dark:bg-purple-900/20"
          />
        )}

        {languageCerts.length > 0 && (
          <CertificationCategoryPanel
            category="languages"
            title="🌍 Language Certifications"
            icon={<Globe className="w-6 h-6 text-white" />}
            certifications={languageCerts}
            color="bg-green-600 dark:bg-green-500"
            bgColor="bg-green-50 dark:bg-green-900/20"
          />
        )}
      </div>
    </Section>
  );
}

