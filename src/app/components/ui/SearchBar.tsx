// ui/SearchBar.tsx
"use client";
import { Input } from "@/components/ui/input";

// SearchBar Component
interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <Input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};
