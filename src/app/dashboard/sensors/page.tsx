"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Widgets
import SensorStatusWidget from "@/app/components/sensors/widgets/SensorStatusWidget";
import SensorAlertWidget from "@/app/components/sensors/widgets/SensorAlertWidget";
import DisasterImpactWidget from "@/app/components/sensors/widgets/DisasterImpactWidget";
import SiteSensorSummary from "@/app/components/sensors/widgets/SiteSensorSummary";
import SensorTypeDistribution from "@/app/components/sensors/widgets/SensorTypeDistribution";
import LastUpdatedSensorsWidget from "@/app/components/sensors/widgets/LastUpdatedSensorsWidget";
import TopSensorIssuesWidget from "@/app/components/sensors/widgets/TopSensorIssuesWidget";
import { convertToSensorUpdate } from "@/app/lib/sensors/convertToSensorUpdate";

// Filters
import MainFilter from "@/app/components/sensors/filters/MainFilter";
import HistoricalFilter from "@/app/components/sensors/filters/HistoricalFilter";
import NotificationFilter from "@/app/components/sensors/filters/NotificationFilter";

// Historical
import HistoricalSummary from "@/app/components/sensors/historical/HistoricalSummary";
import CompareSensors from "@/app/components/sensors/historical/CompareSensors";
import HistoricalChart from "@/app/components/sensors/historical/HistoricalChart";
import HistoricalInsights from "@/app/components/sensors/historical/HistoricalInsights";

// Notifications
import SensorNotifications from "@/app/components/sensors/notifications/SensorNotifications";

// Types
import {
  SensorUpdate,
  SensorStatusSummary,
  SensorAlert,
  DisasterImpact,
  SensorTypeCount,
  SensorIssue,
  SensorNotification,
  HistoricalDataPoint,
  SiteSensor,
} from "@/app/types/sensors/sensor";

// Mock Data
import {
  mockAlerts,
  mockCompareSensors,
  mockHistoricalData,
  mockImpacts,
  mockNotifications,
  mockSensorIssues,
  mockSensors,
  mockSiteSummary,
  mockStatus,
  mockTypeDistribution,
} from "@/app/lib/sensors/mockSensorData";

// Map
const SensorMap = dynamic(() => import("@/app/components/map/SensorMap"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[500px]">
      <Loader2 className="animate-spin h-6 w-6 text-muted" />
      <span className="ml-2">Loading map...</span>
    </div>
  ),
});

export default function SensorDashboardPage() {
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

  const [latestUpdates, setLatestUpdates] = useState<SensorUpdate[]>([]);

  useEffect(() => {
    const updates = convertToSensorUpdate(mockSensors);
    setLatestUpdates(updates);
  }, []);

  const handleFilterChange = (updated: Partial<typeof filters>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const filteredSensors = latestUpdates.filter((sensor) => {
    return (
      (!filters.sensorType || sensor.type === filters.sensorType) &&
      (!filters.site || sensor.site === filters.site)
      // Add date/time filtering if needed
    );
  });

  const normalizedSensors = filteredSensors.map((sensor) => ({
    id: sensor.id,
    name: sensor.name,
    lat: sensor.lat,
    lng: sensor.lng,
    type: sensor.type,
    value: sensor.value ? parseFloat(sensor.value) : 0, // Ensure it's a number for Sensor[]
  }));

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Sensor Dashboard</h1>

      <MainFilter onFilterChange={handleFilterChange} />

      <Suspense fallback={<div>Loading map...</div>}>
        <SensorMap
          sensors={normalizedSensors}
          center={[-6.25, 106.8]}
          zoom={11}
        />
      </Suspense>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <SensorStatusWidget {...(mockStatus as SensorStatusSummary)} />
        <SensorAlertWidget {...(mockAlerts as SensorAlert)} />
        <DisasterImpactWidget impacts={mockImpacts as DisasterImpact[]} />
        <SiteSensorSummary data={mockSiteSummary as SiteSensor[]} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SensorTypeDistribution
          data={mockTypeDistribution as SensorTypeCount[]}
        />
        <TopSensorIssuesWidget sensors={mockSensorIssues as SensorIssue[]} />
      </div>

      <LastUpdatedSensorsWidget sensors={latestUpdates} />

      <NotificationFilter onFilterChange={handleFilterChange} />
      <SensorNotifications
        notifications={mockNotifications as SensorNotification[]}
      />

      <h2 className="text-2xl font-semibold mt-10">Historical Data</h2>
      <HistoricalFilter onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <HistoricalSummary data={mockHistoricalData as HistoricalDataPoint[]} />
        <CompareSensors sensors={mockCompareSensors} />;
      </div>

      <HistoricalChart data={mockHistoricalData as HistoricalDataPoint[]} />
      <HistoricalInsights
        data={mockHistoricalData}
        site={filters.site ?? undefined}
        sensorType={filters.sensorType ?? undefined}
        fromDate={filters.dateFrom ?? undefined}
        toDate={filters.dateTo ?? undefined}
      />
    </div>
  );
}
