 'use client'
import { Tabs } from "flowbite-react";
import { XCircle } from "lucide-react"; // Import a valid icon from lucide-react
import { HiUserCircle } from "react-icons/hi"; // Ensure this is properly imported

export default function TabbedItems() {
  const tabs = [
    {
      title: "Services Populaire",
      icon: XCircle, // Use a valid icon
      content: [],
    },
    {
      title: "Personnels de santé",
      icon: XCircle,
      content: [],
    },
    {
      title: "Spécialistes",
      icon: XCircle,
      content: [],
    },
    {
      title: "Sympthoms",
      icon: XCircle,
      content: [],
    },
  ];

  return (
    <Tabs aria-label="Default tabs" variant="default">
      {tabs.map((tab, i) => (
        <Tabs.Item key={i} active={i === 0} title={tab.title} icon={tab.icon}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            {tab.title}'s associated content
          </span>.
          Clicking another tab will toggle the visibility of this one.
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
