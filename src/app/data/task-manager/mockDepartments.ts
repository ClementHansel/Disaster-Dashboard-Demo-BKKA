import { Department } from "@/app/types/task-manager/department";

export const mockDepartments: Department[] = [
  {
    id: "1",
    name: "Engineering",
    siteId: "1", // Reference to the site this department belongs to
    description: "Handles infrastructure and technical projects.",
  },
  {
    id: "2",
    name: "IT",
    siteId: "2",
    description: "Manages software, hardware, and network security.",
  },
  {
    id: "3",
    name: "Security",
    siteId: "3",
    description: "Ensures safety and compliance within the organization.",
  },
  {
    id: "4",
    name: "Operations",
    siteId: "4",
    description: "Oversees daily business and logistical activities.",
  },
  {
    id: "5",
    name: "HR",
    siteId: "1",
    description: "Manages employee relations and recruitment.",
  },
  {
    id: "6",
    name: "Finance",
    siteId: "2",
    description: "Handles budgeting, accounting, and financial planning.",
  },
  {
    id: "7",
    name: "Marketing",
    siteId: "3",
    description: "Develops strategies to promote services and products.",
  },
  {
    id: "8",
    name: "Customer Support",
    siteId: "4",
    description: "Provides assistance and support to clients and users.",
  },
  {
    id: "9",
    name: "R&D",
    siteId: "1",
    description: "Focuses on innovation and product development.",
  },
  {
    id: "10",
    name: "Logistics",
    siteId: "2",
    description: "Coordinates supply chain and transportation.",
  },
];
