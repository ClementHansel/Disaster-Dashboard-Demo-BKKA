"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export interface ModelSearchProps {
  value: string;
  onChange: (val: string) => void;
  onSearch: (query: string) => void;
}

export default function ModelSearch({ onSearch }: ModelSearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); // Auto-focus on load
  }, []);

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length === 0) return;
    onSearch(trimmedQuery);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full flex flex-col sm:flex-row items-end gap-4 p-4">
      <div className="w-full sm:flex-1">
        <Label htmlFor="model-search">Search Models</Label>
        <Input
          ref={inputRef}
          id="model-search"
          placeholder="Search by name, ID, or tag"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          aria-label="Search models by name, ID, or tags"
        />
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={handleClear}
          aria-label="Clear search"
        >
          Clear
        </Button>
        <Button onClick={handleSearch} aria-label="Search models">
          Search
        </Button>
      </div>
    </div>
  );
}
