import { Task } from "@/app/types/task-manager/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Check water level sensors",
    description: "Ensure all sensors are properly calibrated.",
    siteId: "1", // Reference to a Site by its ID
    departmentId: "1", // Reference to a Department by its ID
    assignedTo: "John Doe",
    status: "Pending",
    priority: "High",
    dueDate: "2025-03-15",
    createdAt: "2025-03-10",
  },
  {
    id: "2",
    title: "Inspect flood barriers",
    description: "Check for leaks or structural weaknesses in flood barriers.",
    siteId: "2",
    departmentId: "2",
    assignedTo: "Jane Smith",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2025-03-20",
    createdAt: "2025-03-12",
  },
  {
    id: "3",
    title: "Test emergency alert system",
    description: "Ensure sirens and alert systems are functional.",
    siteId: "3",
    departmentId: "3",
    assignedTo: "Michael Brown",
    status: "Completed",
    priority: "Low",
    dueDate: "2025-03-18",
    createdAt: "2025-03-14",
  },
];
