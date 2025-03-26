import { Notification } from "@/app/types/task-manager/notification";

export const mockNotifications: Notification[] = [
  {
    id: "1",
    timestamp: "2025-03-14 10:15:00",
    message: "Water level sensor triggered an alert.",
    user: "Admin",
  },
  {
    id: "2",
    timestamp: "2025-03-14 11:00:00",
    message: "Sluice gate manually overridden.",
    user: "User1",
  },
  {
    id: "3",
    timestamp: "2025-03-14 12:30:00",
    message: "System maintenance scheduled.",
    user: "User2",
  },
  {
    id: "4",
    timestamp: "2025-03-14 13:45:00",
    message: "Power failure detected in control unit.",
    user: "Admin",
  },
  {
    id: "5",
    timestamp: "2025-03-14 14:20:00",
    message: "New task assigned to the team.",
    user: "Manager",
  },
];
