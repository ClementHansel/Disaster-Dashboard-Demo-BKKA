export interface FloodNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export const mockNotifications: FloodNotification[] = [
  {
    id: "1",
    title: "Flood Alert in Jakarta",
    message: "Heavy flooding detected in Jakarta.",
    timestamp: new Date().toISOString(),
    read: false,
  },
  {
    id: "2",
    title: "Flood Warning in Bali",
    message: "Severe coastal flooding expected in Bali.",
    timestamp: new Date().toISOString(),
    read: false,
  },
];
