"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/components/ui/table";
import {
  MapPin,
  Phone,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { EventType } from "@/app/types/dashboard"; // Adjust import path as needed

// 📌 Emergency Resource Data Type
interface EmergencyResource {
  id: string;
  name: string;
  type: string;
  status: "Available" | "Deployed" | "Low Stock";
  location: string;
  contact: string;
}

// 📌 Props Interface for EmergencyResources
interface EmergencyResourcesProps {
  event: EventType; // Ensure the correct event type is used
}

// 📌 Sample Data (Replace with API Data in the Future)
const emergencyResources: EmergencyResource[] = [
  {
    id: "1",
    name: "Medical Team Alpha",
    type: "Medical",
    status: "Available",
    location: "Central HQ",
    contact: "+62 812-3456-7890",
  },
  {
    id: "2",
    name: "Rescue Squad Bravo",
    type: "Rescue",
    status: "Deployed",
    location: "Jakarta Selatan",
    contact: "+62 811-2233-4455",
  },
  {
    id: "3",
    name: "Water Rescue Unit",
    type: "Rescue",
    status: "Low Stock",
    location: "North Coast",
    contact: "+62 813-9988-7766",
  },
  {
    id: "4",
    name: "Emergency Shelter A",
    type: "Shelter",
    status: "Available",
    location: "West Jakarta",
    contact: "+62 812-6789-1234",
  },
];

// 📌 Status Badge Component
const StatusBadge = ({ status }: { status: EmergencyResource["status"] }) => {
  const statusStyles = {
    Available: "bg-green-100 text-green-700",
    Deployed: "bg-yellow-100 text-yellow-700",
    "Low Stock": "bg-red-100 text-red-700",
  };

  const statusIcons = {
    Available: <CheckCircle className="w-4 h-4 mr-1" />,
    Deployed: <AlertTriangle className="w-4 h-4 mr-1" />,
    "Low Stock": <XCircle className="w-4 h-4 mr-1" />,
  };

  return (
    <Badge
      className={`flex items-center px-2 py-1 text-sm ${statusStyles[status]}`}
    >
      {statusIcons[status]} {status}
    </Badge>
  );
};

// 📌 Emergency Resources Component
const EmergencyResources: React.FC<EmergencyResourcesProps> = ({ event }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>🚨 Emergency Resources for {event.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emergencyResources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell>{resource.name}</TableCell>
                <TableCell>{resource.type}</TableCell>
                <TableCell>
                  <StatusBadge status={resource.status} />
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />{" "}
                  {resource.location}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" /> {resource.contact}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EmergencyResources;
