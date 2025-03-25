// 📌 Utility function to join class names conditionally
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

// 📌 Utility function to format timestamps into readable strings
export function formatTimestamp(timestamp: string): string {
  return new Date(timestamp).toLocaleString();
}

// 📌 Utility function to get severity class for alerts
export function getSeverityClass(
  severity: "Info" | "Warning" | "Critical"
): string {
  return severity === "Critical"
    ? "bg-red-100 text-red-600"
    : severity === "Warning"
    ? "bg-yellow-100 text-yellow-700"
    : "bg-blue-100 text-blue-700";
}
