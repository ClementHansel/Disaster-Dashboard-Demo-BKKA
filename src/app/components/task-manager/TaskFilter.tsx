import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface TaskFilterProps {
  filters: {
    task: string;
    department: string;
    site: string;
    status: string;
    level: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="flex space-x-4">
      <Select
        value={filters.task}
        onValueChange={(value) => onFilterChange("task", value)}
      >
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Filter by Task" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Tasks</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.department}
        onValueChange={(value) => onFilterChange("department", value)}
      >
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Filter by Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="it">IT</SelectItem>
          <SelectItem value="security">Security</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.site}
        onValueChange={(value) => onFilterChange("site", value)}
      >
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Filter by Site" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="site-a">Site A</SelectItem>
          <SelectItem value="site-b">Site B</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.status}
        onValueChange={(value) => onFilterChange("status", value)}
      >
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Filter by Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.level}
        onValueChange={(value) => onFilterChange("level", value)}
      >
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Filter by Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TaskFilter;
