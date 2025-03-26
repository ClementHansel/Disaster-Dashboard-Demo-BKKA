import React from "react";

interface FiltersProps {
  setSortKey: (key: "priority" | "dueDate") => void;
  setFilterSite: (site: string | null) => void;
}

const Filters: React.FC<FiltersProps> = ({ setSortKey, setFilterSite }) => {
  return (
    <div className="flex gap-4 mb-4">
      {/* Sorting Dropdown */}
      <label htmlFor="sort" className="sr-only">
        Sort tasks
      </label>
      <select
        id="sort"
        name="sort"
        onChange={(e) => setSortKey(e.target.value as "priority" | "dueDate")}
        className="border p-2"
      >
        <option value="priority">Sort by Priority</option>
        <option value="dueDate">Sort by Due Date</option>
      </select>

      {/* Filter Dropdown */}
      <label htmlFor="filter" className="sr-only">
        Filter by site
      </label>
      <select
        id="filter"
        name="filter"
        onChange={(e) => setFilterSite(e.target.value || null)}
        className="border p-2"
      >
        <option value="">All Sites</option>
        <option value="Site A">Site A</option>
        <option value="Site B">Site B</option>
        <option value="Site C">Site C</option>
      </select>
    </div>
  );
};

export default Filters;
