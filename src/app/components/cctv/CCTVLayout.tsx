"use client";

import React from "react";

export interface CCTVStream {
  id: string;
  cameraName: string;
  streamUrl: string;
  status: "online" | "offline" | "error";
}

export interface Site {
  siteName: string;
  cctvStreams: CCTVStream[];
  displayStream: CCTVStream;
}

interface CCTVLayoutProps {
  displayedStreams: Site[];
  onCameraClick: (camera: CCTVStream) => void;
}

const CCTVLayout: React.FC<CCTVLayoutProps> = ({
  displayedStreams,
  onCameraClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayedStreams.map((site) => {
        const camera = site.displayStream;
        return (
          <div
            key={site.siteName}
            className="relative bg-white rounded-lg shadow-md overflow-hidden"
          >
            <iframe
              src={camera.streamUrl}
              className="w-full h-64 object-cover"
              title={camera.cameraName}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
              <div className="text-sm">{camera.cameraName}</div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    camera.status === "online"
                      ? "bg-green-500"
                      : camera.status === "offline"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                  aria-label="Camera Status"
                ></span>
                <button
                  className="text-white"
                  aria-label="Fullscreen"
                  onClick={() => onCameraClick(camera)}
                >
                  ⛶
                </button>
                <button className="text-white" aria-label="Mute">
                  🔇
                </button>
                <button className="text-white" aria-label="Record">
                  ⏺
                </button>
              </div>
            </div>
            <button
              onClick={() => onCameraClick(camera)}
              className="absolute inset-0 z-10 focus:outline-none"
              aria-label="View Fullscreen"
            ></button>
          </div>
        );
      })}
    </div>
  );
};

export default CCTVLayout;
