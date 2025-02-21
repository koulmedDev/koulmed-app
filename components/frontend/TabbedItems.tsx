 'use client'
import { Tabs } from "flowbite-react";
import { Activity, Microscope, Stethoscope, Syringe, XCircle } from "lucide-react"; // Import a valid icon from lucide-react
import { HiUserCircle } from "react-icons/hi"; // Ensure this is properly imported
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";

export default function TabbedItems() {
  // Déclarer services une seule fois
  const services = [
    {
      title: "Télésanté",
      image: "/doctor.jpg",
      slug: "telesante",
    },
    {
      title: "Prescription en ligne",
      image: "/doctor.jpg",
      slug: "prescription-en-ligne",
    },
    {
      title: "Santé Mentale",
      image: "/doctor.jpg",
      slug: "sante-mentale",
    },
    {
      title: "Consultation à domicile",
      image: "/doctor.jpg",
      slug: "consultation-domicile",
    },
    {
      title: "Urgence",
      image: "/doctor.jpg",
      slug: "urgence",
    },
  ];

  const tabs = [
    {
      title: "Services Populaire",
      icon: Stethoscope, // Use a valid icon
      component: <ServiceList data={services} />,
      content: [],
    },
    {
      title: "Personnels de santé",
      icon: Microscope,
      component: <LinkCards />,
      content: [],
    },
    {
      title: "Spécialistes",
      icon: Activity,
      component: <LinkCards className="bg-blue-900" />, // Appliquons une couleur de test
      content: [],
    },
    {
      title: "Symptômes",
      icon: Syringe,
      component: <LinkCards className="bg-pink-950" />, // Appliquons une couleur de test
      content: [],
    },
  ];

  return (
    <Tabs aria-label="Default tabs" variant="default">
      {tabs.map((tab, i) => (
        <Tabs.Item key={i} active={i === 0} title={tab.title} icon={tab.icon}>
          {tab.component}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
