import { Site } from "@/app/types/task-manager/site";

export const mockSites: Site[] = [
  {
    id: "1",
    name: "Site A",
    location: "Jakarta, Indonesia",
    description:
      "Main monitoring site with flood sensors and sluice gate controls.",
  },
  {
    id: "2",
    name: "Site B",
    location: "Surabaya, Indonesia",
    description:
      "Backup monitoring site with water level and weather tracking.",
  },
  {
    id: "3",
    name: "Site C",
    location: "Bandung, Indonesia",
    description: "AI-driven automated response site for early flood warning.",
  },
  {
    id: "4",
    name: "Site D",
    location: "Medan, Indonesia",
    description: "Data collection site for real-time analytics and reporting.",
  },
  {
    id: "5",
    name: "Site E",
    location: "Bali, Indonesia",
    description:
      "Research and development site for disaster response AI models.",
  },
];
