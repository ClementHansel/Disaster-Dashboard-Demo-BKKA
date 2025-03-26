import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface TaskScheduleProps {
  schedule: {
    date: Date | undefined;
    time: string;
    department: string;
    site: string;
    priority: string;
  };
  onScheduleChange: (field: string, value: string | Date | undefined) => void;
}

const TaskSchedule: React.FC<TaskScheduleProps> = ({
  schedule,
  onScheduleChange,
}) => {
  return (
    <div className="flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold">Schedule Task</h2>

      {/* Date Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            <CalendarIcon className="mr-2" />
            {schedule.date ? schedule.date.toDateString() : "Select Date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={schedule.date || undefined}
            onSelect={(date: Date | undefined) =>
              onScheduleChange("date", date)
            }
          />
        </PopoverContent>
      </Popover>

      {/* Time Input */}
      <Input
        type="time"
        value={schedule.time}
        onChange={(e) => onScheduleChange("time", e.target.value)}
      />

      {/* Department Select */}
      <Select
        value={schedule.department}
        onValueChange={(value) => onScheduleChange("department", value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="it">IT</SelectItem>
          <SelectItem value="security">Security</SelectItem>
        </SelectContent>
      </Select>

      {/* Site Select */}
      <Select
        value={schedule.site}
        onValueChange={(value) => onScheduleChange("site", value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Site" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="site-a">Site A</SelectItem>
          <SelectItem value="site-b">Site B</SelectItem>
        </SelectContent>
      </Select>

      {/* Priority Select */}
      <Select
        value={schedule.priority}
        onValueChange={(value) => onScheduleChange("priority", value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Priority" />
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

export default TaskSchedule;
