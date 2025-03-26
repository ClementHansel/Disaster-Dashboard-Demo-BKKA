// ui/Dropdown.tsx
"use client";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Dropdown Component
interface DropdownProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>{value || "Select..."}</SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
