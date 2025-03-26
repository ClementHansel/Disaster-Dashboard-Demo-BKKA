import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Notification {
  id: number;
  timestamp: string;
  message: string;
  site: string;
  department: string;
  item: string;
  user: string;
}

interface TaskNotificationsProps {
  notifications: Notification[];
  onClearNotifications: () => void;
}

const TaskNotifications: React.FC<TaskNotificationsProps> = ({
  notifications,
  onClearNotifications,
}) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    site: "all",
    department: "all",
    item: "all",
    user: "all",
  });

  // Case-insensitive filtering with "all" handling
  const filteredNotifications = notifications.filter((notification) => {
    return (
      notification.message.toLowerCase().includes(search.toLowerCase()) &&
      (filter.site === "all" ||
        notification.site.toLowerCase() === filter.site.toLowerCase()) &&
      (filter.department === "all" ||
        notification.department.toLowerCase() ===
          filter.department.toLowerCase()) &&
      (filter.item === "all" ||
        notification.item.toLowerCase() === filter.item.toLowerCase()) &&
      (filter.user === "all" ||
        notification.user.toLowerCase() === filter.user.toLowerCase())
    );
  });

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button className="text-sm text-red-500" onClick={onClearNotifications}>
          Clear All
        </button>
      </div>

      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search notifications..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-2"
      />

      {/* Filters */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {/* Site Filter */}
        <div>
          <Select
            value={filter.site}
            onValueChange={(value) => setFilter({ ...filter, site: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by Site" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sites</SelectItem>
              <SelectItem value="Site A">Site A</SelectItem>
              <SelectItem value="Site B">Site B</SelectItem>
              <SelectItem value="Site C">Site C</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Department Filter */}
        <div>
          <Select
            value={filter.department}
            onValueChange={(value) =>
              setFilter({ ...filter, department: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Operations">Operations</SelectItem>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="Security">Security</SelectItem>
              <SelectItem value="HR">HR</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Item Filter */}
        <div>
          <Select
            value={filter.item}
            onValueChange={(value) => setFilter({ ...filter, item: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by Item" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="Water Level Sensor">
                Water Level Sensor
              </SelectItem>
              <SelectItem value="Sluice Gate Controller">
                Sluice Gate Controller
              </SelectItem>
              <SelectItem value="Main Server">Main Server</SelectItem>
              <SelectItem value="Control Unit">Control Unit</SelectItem>
              <SelectItem value="Task Management">Task Management</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* User Filter */}
        <div>
          <Select
            value={filter.user}
            onValueChange={(value) => setFilter({ ...filter, user: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by User" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="User1">User1</SelectItem>
              <SelectItem value="User2">User2</SelectItem>
              <SelectItem value="Manager">Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-60 overflow-y-auto space-y-2">
        {filteredNotifications.length === 0 ? (
          <p className="text-gray-500 text-sm">No matching notifications</p>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className="p-2 bg-gray-100 rounded-md text-sm"
            >
              <p>
                <strong>{notification.timestamp}</strong>
              </p>
              <p>{notification.message}</p>
              <p className="text-xs text-gray-500">
                {notification.site} | {notification.department} |{" "}
                {notification.item} | {notification.user}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskNotifications;
