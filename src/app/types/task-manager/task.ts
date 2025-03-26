export interface Task {
  id: string;
  title: string;
  description: string;
  // We use only the IDs here, but the imported types can be used elsewhere for lookups.
  siteId: string; // Reference to a Site by ID
  departmentId: string; // Reference to a Department by ID
  assignedTo: string;
  status: "Pending" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  createdAt: string;
}
