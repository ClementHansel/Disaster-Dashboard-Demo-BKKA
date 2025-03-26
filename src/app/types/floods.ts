// src/types/floods.ts
export type FloodSeverity = "low" | "moderate" | "severe";

export interface FloodEvent {
  id: string;
  name: string;
  lat: number;
  lng: number;
  floodSeverity: FloodSeverity;
  radius_km: number; // <-- Add this line
  impactedArea: number;
  description: string;
  isHistorical: boolean;
}
