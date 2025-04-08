"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type NotificationFilterProps = {
  onFilterChange: (filters: {
    disaster: string | null;
    site: string | null;
    sensorType: string | null;
    dateFrom: string | null;
    dateTo: string | null;
    timeFrom: string | null;
    timeTo: string | null;
  }) => void;
  className?: string;
};

const disasters = ["Flood", "Earthquake", "Tsunami"];
const sites = ["North Bay", "East River", "West Coast"];
const sensorTypes = ["Temperature", "Water Level", "Vibration"];

export default function NotificationFilter({
  onFilterChange,
  className,
}: NotificationFilterProps) {
  const [filters, setFilters] = useState<{
    disaster: string | null;
    site: string | null;
    sensorType: string | null;
    dateFrom: string | null;
    dateTo: string | null;
    timeFrom: string | null;
    timeTo: string | null;
  }>({
    disaster: null,
    site: null,
    sensorType: null,
    dateFrom: null,
    dateTo: null,
    timeFrom: null,
    timeTo: null,
  });

  const handleChange = (field: keyof typeof filters, value: string) => {
    const newFilters = { ...filters, [field]: value || null };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4 p-4", className)}>
      {/* Disaster */}
      <div>
        <Label htmlFor="disaster">Disaster</Label>
        <Select
          value={filters.disaster ?? ""}
          onValueChange={(val) => handleChange("disaster", val)}
        >
          <SelectTrigger id="disaster">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {disasters.map((d) => (
              <SelectItem key={d} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Site */}
      <div>
        <Label htmlFor="site">Site</Label>
        <Select
          value={filters.site ?? ""}
          onValueChange={(val) => handleChange("site", val)}
        >
          <SelectTrigger id="site">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {sites.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sensor Type */}
      <div>
        <Label htmlFor="sensorType">Sensor Type</Label>
        <Select
          value={filters.sensorType ?? ""}
          onValueChange={(val) => handleChange("sensorType", val)}
        >
          <SelectTrigger id="sensorType">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {sensorTypes.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date From */}
      <div>
        <Label htmlFor="dateFrom">Date From</Label>
        <Input
          id="dateFrom"
          type="date"
          value={filters.dateFrom ?? ""}
          onChange={(e) => handleChange("dateFrom", e.target.value)}
        />
      </div>

      {/* Date To */}
      <div>
        <Label htmlFor="dateTo">Date To</Label>
        <Input
          id="dateTo"
          type="date"
          value={filters.dateTo ?? ""}
          onChange={(e) => handleChange("dateTo", e.target.value)}
        />
      </div>

      {/* Time From */}
      <div>
        <Label htmlFor="timeFrom">Time From</Label>
        <Input
          id="timeFrom"
          type="time"
          value={filters.timeFrom ?? ""}
          onChange={(e) => handleChange("timeFrom", e.target.value)}
        />
      </div>

      {/* Time To */}
      <div>
        <Label htmlFor="timeTo">Time To</Label>
        <Input
          id="timeTo"
          type="time"
          value={filters.timeTo ?? ""}
          onChange={(e) => handleChange("timeTo", e.target.value)}
        />
      </div>
    </div>
  );
}
