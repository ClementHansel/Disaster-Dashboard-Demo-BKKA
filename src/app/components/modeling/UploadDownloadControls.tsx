"use client";

import { Button } from "@/components/ui/button";
import { Upload, Download } from "lucide-react";

type UploadDownloadControlsProps = {
  onUploadClick: () => void;
  onDownloadClick: () => void;
};

export default function UploadDownloadControls({
  onUploadClick,
  onDownloadClick,
}: UploadDownloadControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={onUploadClick}
        aria-label="Upload model"
        title="Upload model"
      >
        <Upload className="mr-2 h-4 w-4" />
        Upload
      </Button>
      <Button
        variant="outline"
        onClick={onDownloadClick}
        aria-label="Download model"
        title="Download model"
      >
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>
  );
}
