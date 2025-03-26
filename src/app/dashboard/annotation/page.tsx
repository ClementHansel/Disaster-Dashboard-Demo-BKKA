"use client";
import { useState, useCallback } from "react";

// Import mock data from mockData.ts
import { mockSavedAnnotations } from "@/app/data/ai/mockData";
import { Annotation } from "@/app/types/ai/annotation";
import Filters from "@/app/components/ai/Filters";
import Chart from "@/app/components/ai/Chart";
import AIAnalysis from "@/app/components/ai/AIAnalysis";
import Annotate from "@/app/components/ai/Annotate";
import AnnotatedFilters from "@/app/components/ai/AnnotatedFilters";
import AnnotatedList from "@/app/components/ai/AnnotatedList";

// Ensure FiltersType includes `timeFrom` and `timeTo`
interface FiltersType {
  site: string;
  sensor: string;
  dateFrom: string;
  dateTo: string;
  timeFrom: string;
  timeTo: string;
}

export default function AnnotationPage() {
  const [filters, setFilters] = useState<FiltersType>({
    site: "",
    sensor: "",
    dateFrom: "",
    dateTo: "",
    timeFrom: "",
    timeTo: "",
  });

  // Separate state for annotated section filters
  const [annotatedFilters, setAnnotatedFilters] = useState<FiltersType>({
    site: "",
    sensor: "",
    dateFrom: "",
    dateTo: "",
    timeFrom: "",
    timeTo: "",
  });

  // Memoized filter update to avoid unnecessary re-renders
  const handleFilterChange = useCallback((newFilters: Partial<FiltersType>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  // Memoized annotated filter update
  const handleAnnotatedFilterChange = useCallback(
    (newFilters: Partial<FiltersType>) => {
      setAnnotatedFilters((prev) => ({ ...prev, ...newFilters }));
    },
    []
  );

  // Filter annotated data based on annotatedFilters
  const filteredAnnotatedItems = mockSavedAnnotations.filter(
    (item: Annotation) => {
      const matchesSite = annotatedFilters.site
        ? item.site === annotatedFilters.site
        : true;
      const matchesSensor = annotatedFilters.sensor
        ? item.sensorId === annotatedFilters.sensor
        : true;
      const matchesDateFrom = annotatedFilters.dateFrom
        ? new Date(item.timestamp) >= new Date(annotatedFilters.dateFrom)
        : true;
      const matchesDateTo = annotatedFilters.dateTo
        ? new Date(item.timestamp) <= new Date(annotatedFilters.dateTo)
        : true;
      const matchesTimeFrom = annotatedFilters.timeFrom
        ? new Date(item.timestamp).getHours() >=
          new Date(`1970-01-01T${annotatedFilters.timeFrom}`).getHours()
        : true;
      const matchesTimeTo = annotatedFilters.timeTo
        ? new Date(item.timestamp).getHours() <=
          new Date(`1970-01-01T${annotatedFilters.timeTo}`).getHours()
        : true;

      return (
        matchesSite &&
        matchesSensor &&
        matchesDateFrom &&
        matchesDateTo &&
        matchesTimeFrom &&
        matchesTimeTo
      );
    }
  );

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900">Annotation Page</h1>

      {/* Top Filters Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Filters</h2>
        <Filters filters={filters} onFilterChange={handleFilterChange} />
        <Chart filters={filters} />

        <div className="flex flex-row-2">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              AI Analysis
            </h2>
            <AIAnalysis filters={filters} />
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              Annotation
            </h2>
            <Annotate filters={filters} />
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Chart</h2>
        <Chart filters={filters} />
      </div>

      {/* AI Analysis Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-medium text-gray-700 mb-4">AI Analysis</h2>
        <AIAnalysis filters={filters} />
      </div>

      {/* Annotation Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Annotation</h2>
        <Annotate filters={filters} />
      </div>

      {/* Annotated Section (For Annotated List) */}
      {/* Annotated Filters Section (For Annotated List) */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-medium text-gray-700 mb-4">
          Annotated Filters
        </h2>
        <AnnotatedFilters
          onFilterChange={handleAnnotatedFilterChange}
          filters={annotatedFilters}
          availableSites={["Site 1", "Site 2", "Site 3"]} // Replace with actual available sites if necessary
          availableSensors={["Sensor 1", "Sensor 2", "Sensor 3"]} // Replace with actual available sensors if needed
        />

        {/* Annotated List Section (Filtered by Annotated Filters) */}
        <AnnotatedList data={filteredAnnotatedItems} />
      </div>
    </div>
  );
}
