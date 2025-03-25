import { Alert, AIInsight } from "@/app/types/dashboard";

// 📌 Sluice Gates - Important flood control infrastructure
export const sluiceGates = [
  {
    id: 1,
    name: "Manggarai Sluice Gate",
    lat: -6.2065,
    lng: 106.8533,
    status: "Open",
    capacity: "5000m³/s",
  },
  {
    id: 2,
    name: "Karet Sluice Gate",
    lat: -6.2117,
    lng: 106.8189,
    status: "Closed",
    capacity: "3000m³/s",
  },
];

// 📌 Pumps - Used to reduce flooding in critical areas
export const pumps = [
  {
    id: 1,
    name: "Pluit Pump Station",
    lat: -6.1265,
    lng: 106.8107,
    status: "Active",
    capacity: "1500 L/s",
  },
  {
    id: 2,
    name: "Kampung Melayu Pump",
    lat: -6.2263,
    lng: 106.8693,
    status: "Faulty",
    capacity: "1000 L/s",
  },
];

// 📌 Emergency Alerts - Dynamic system alerts
export const alerts: Alert[] = [
  {
    id: 1,
    message: "Severe Flooding detected at Bekasi River",
    severity: "Critical",
    type: "Flood",
    timestamp: "2025-03-20T08:30:00Z",
  },
  {
    id: 2,
    message: "Water level rising at Ciliwung River - Monitor closely",
    severity: "Moderate",
    type: "Flood",
    timestamp: "2025-03-20T09:00:00Z",
  },
  {
    id: 3,
    message: "Routine water level check at Cisadane River",
    severity: "Low",
    type: "Flood",
    timestamp: "2025-03-20T10:00:00Z",
  },
];

// 📌 AI Flood Risk Insights - Predictive analysis
export const aiInsights: AIInsight[] = [
  {
    id: 1,
    prediction: "High flood risk at Kampung Melayu within 6 hours",
    confidence: 85,
    generatedAt: "2025-03-20T08:30:00Z",
  },
  {
    id: 2,
    prediction: "Potential pump failure at Kampung Melayu Pump",
    confidence: 72,
    generatedAt: "2025-03-20T08:45:00Z",
  },
  {
    id: 3,
    prediction: "Moderate risk of overflow at Cisadane River",
    confidence: 68,
    generatedAt: "2025-03-20T09:00:00Z",
  },
];

// 📌 Emergency Tasking - Automated assignments for responders
export const emergencyTasks = [
  {
    id: 1,
    task: "Deploy barricades at Kampung Melayu",
    department: "Public Works",
    status: "In Progress",
  },
  {
    id: 2,
    task: "Activate emergency pumps in Bekasi",
    department: "Water Management",
    status: "Pending",
  },
  {
    id: 3,
    task: "Monitor water levels at Cisadane River",
    department: "Disaster Response",
    status: "Completed",
  },
];

// Assign to a variable before exporting as default
const mockData = {
  sluiceGates,
  pumps,
  alerts,
  aiInsights,
  emergencyTasks,
};

export default mockData;
