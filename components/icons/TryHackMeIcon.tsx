"use client";

import { Cloud } from "lucide-react";

export default function TryHackMeIcon({ size = 24 }: { size?: number }) {
  return (
    <Cloud
      size={size}
      className="text-gray-700 dark:text-gray-300"
    />
  );
}

