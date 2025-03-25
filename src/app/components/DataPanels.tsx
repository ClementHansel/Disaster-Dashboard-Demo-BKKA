import AIInsights from "@/app/components/AIInsights";
import Alerts from "@/app/components/Alerts";
import EmergencyResponse from "@/app/components/EmergencyResponse";

const DataPanels = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* AI Insights Panel */}
      <div className="bg-white shadow-lg rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-2">AI Flood Risk Insights</h2>
        <AIInsights />
      </div>

      {/* Alerts Panel */}
      <div className="bg-white shadow-lg rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-2">Emergency Alerts</h2>
        <Alerts />
      </div>

      {/* Emergency Response Panel */}
      <div className="bg-white shadow-lg rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-2">Emergency Response Tasks</h2>
        <EmergencyResponse />
      </div>
    </div>
  );
};

export default DataPanels;
