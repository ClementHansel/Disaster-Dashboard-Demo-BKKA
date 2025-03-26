import { Site } from "@/app/types/task-manager/site";
import React from "react";
import { Button } from "../ui/button";

interface SiteListProps {
  sites: Site[];
  onEdit: (site: Site) => void; // Add this prop to handle editing sites
  onDeleteSite: (siteId: string) => void; // Add this to handle deleting sites
}

const SiteList: React.FC<SiteListProps> = ({ sites, onEdit, onDeleteSite }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Sites</h2>
      <ul>
        {sites.map((site) => (
          <li
            key={site.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>{site.name}</span>
            <div className="flex space-x-2">
              <Button variant="default" onClick={() => onEdit(site)}>
                Edit
              </Button>
              <Button
                variant="destructive"
                onClick={() => onDeleteSite(site.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteList;
