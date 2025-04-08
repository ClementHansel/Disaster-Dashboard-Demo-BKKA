"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type HistoricalFilterProps = {
  onFilterChange: (
    filters: Partial<{
      disaster: string | null;
      site: string | null;
      sensorType: string | null;
    }>
  ) => void;
  className?: string;
};

const disasters = ["Flood", "Earthquake", "Tsunami"];
const sites = ["North Bay", "East River", "West Coast"];
const sensorTypes = ["Temperature", "Water Level", "Vibration"];

export default function HistoricalFilter({
  onFilterChange,
  className,
}: HistoricalFilterProps) {
  const [disaster, setDisaster] = useState<string | null>(null);
  const [site, setSite] = useState<string | null>(null);
  const [sensorType, setSensorType] = useState<string | null>(null);

  const handleChange = (
    type: "disaster" | "site" | "sensorType",
    rawValue: string
  ) => {
    const value = rawValue === "" ? null : rawValue;

    const newFilters = {
      disaster: type === "disaster" ? value : disaster,
      site: type === "site" ? value : site,
      sensorType: type === "sensorType" ? value : sensorType,
    };

    setDisaster(newFilters.disaster);
    setSite(newFilters.site);
    setSensorType(newFilters.sensorType);

    onFilterChange({ [type]: value });
  };

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4 p-4", className)}>
      <div>
        <Label>Disaster</Label>
        <Select
          value={disaster ?? ""}
          onValueChange={(val) => handleChange("disaster", val)}
        >
          <SelectTrigger>
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

      <div>
        <Label>Site</Label>
        <Select
          value={site ?? ""}
          onValueChange={(val) => handleChange("site", val)}
        >
          <SelectTrigger>
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

      <div>
        <Label>Sensor Type</Label>
        <Select
          value={sensorType ?? ""}
          onValueChange={(val) => handleChange("sensorType", val)}
        >
          <SelectTrigger>
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
    </div>
  );
}
