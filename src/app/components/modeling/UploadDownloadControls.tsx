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
    <div className="flex gap-2">
      <Button onClick={onUploadClick}>
        <Upload className="mr-2 h-4 w-4" /> Upload
      </Button>
      <Button variant="outline" onClick={onDownloadClick}>
        <Download className="mr-2 h-4 w-4" /> Download
      </Button>
    </div>
  );
}
