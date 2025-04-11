"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Switch } from "@radix-ui/react-switch";

type AgentStatus = "Ready" | "Training" | "Archived";

type DeploymentStatusToggleProps = {
  label?: string;
  status: AgentStatus;
};

export default function DeploymentStatusToggle({
  label = "Deployment Status",
  status,
}: DeploymentStatusToggleProps) {
  const isDeployed = status === "Ready";

  return (
    <div className="flex items-center space-x-4">
      <Label htmlFor="deployment-switch" className="text-sm">
        {label}
      </Label>

      <Switch id="deployment-switch" checked={isDeployed} disabled />

      <span
        className={cn(
          "text-xs font-medium px-2 py-0.5 rounded-full",
          isDeployed
            ? "bg-green-100 text-green-800"
            : "bg-gray-200 text-gray-600"
        )}
      >
        {isDeployed ? "Active" : "Inactive"}
      </span>
    </div>
  );
}
