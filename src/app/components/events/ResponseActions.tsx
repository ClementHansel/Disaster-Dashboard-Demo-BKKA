import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  CheckCircle,
  AlertTriangle,
  Activity,
  ShieldAlert,
} from "lucide-react";
import { DisasterEvent } from "@/app/types/dashboard";

// 📌 Emergency Response Action Types
type ResponseAction = {
  id: number;
  type: string;
  status: "Pending" | "In Progress" | "Completed";
  timestamp: string;
};

type ResponseActionsProps = {
  event: DisasterEvent;
};

const ResponseActions: React.FC<ResponseActionsProps> = ({ event }) => {
  const [actions, setActions] = useState<ResponseAction[]>([]);

  // 📌 Function to handle new response action
  const handleNewAction = (type: string) => {
    const newAction: ResponseAction = {
      id: actions.length + 1,
      type,
      status: "Pending",
      timestamp: new Date().toISOString(), // Store ISO format for consistency
    };
    setActions((prev) => [newAction, ...prev]);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Emergency Response Actions for {event.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <Button
            variant="destructive"
            onClick={() => handleNewAction("Deploy Team")}
          >
            <ShieldAlert className="mr-2" /> Deploy Team
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleNewAction("Send Alert")}
          >
            <AlertTriangle className="mr-2 text-yellow-500" /> Send Alert
          </Button>
          <Button
            variant="default"
            onClick={() => handleNewAction("Medical Aid Requested")}
          >
            <Activity className="mr-2 text-red-500" /> Medical Aid
          </Button>
          <Button
            variant="outline"
            onClick={() => handleNewAction("Evacuation Started")}
          >
            <CheckCircle className="mr-2 text-green-500" /> Evacuation
          </Button>
        </div>

        {/* 📌 Response History */}
        <div className="space-y-2">
          {actions.length === 0 ? (
            <p className="text-gray-500">No emergency actions recorded yet.</p>
          ) : (
            actions.map((action) => (
              <div
                key={action.id}
                className="flex items-center justify-between p-3 border rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-semibold">{action.type}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(action.timestamp).toLocaleString()}
                  </p>
                </div>
                <Badge
                  variant={
                    action.status === "Pending"
                      ? "destructive"
                      : action.status === "In Progress"
                      ? "secondary"
                      : "default"
                  }
                >
                  {action.status}
                </Badge>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResponseActions;
