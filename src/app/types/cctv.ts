// src/types/cctv.ts

export interface CCTVStream {
  id: string;
  cameraName: string;
  streamUrl: string;
  status: "online" | "offline" | "error";
}

export interface LiveCCTV extends CCTVStream {
  siteName: string;
}

export interface HistoricalCCTV {
  id: string;
  siteName: string;
  cameraName: string;
  streamUrl: string;
  status: "online" | "offline" | "error";
  description: string;
  severity: "low" | "moderate" | "severe";
}
