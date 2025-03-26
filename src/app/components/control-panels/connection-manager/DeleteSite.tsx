"use client";

import React from "react";

interface DeleteSiteProps {
  siteId: string;
  siteName: string;
  onDeleteSite?: (siteId: string) => void;
}

const DeleteSite: React.FC<DeleteSiteProps> = ({
  siteId,
  siteName,
  onDeleteSite,
}) => {
  const handleDelete = () => {
    if (onDeleteSite) onDeleteSite(siteId);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="mb-2">Delete Site: {siteName}</p>
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Delete Site
      </button>
    </div>
  );
};

export default DeleteSite;
