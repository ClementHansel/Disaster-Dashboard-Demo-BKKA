"use client";

import React, { useState } from "react";
import CCTVModal from "./CCTVModal";

// Define the LiveCCTV type (including the siteName property)
export interface LiveCCTV {
  id: string;
  siteName: string;
  cameraName: string;
  streamUrl: string;
  status: "online" | "offline" | "error";
}

interface CCTVLiveSectionProps {
  data: LiveCCTV[];
  selectedSite: string;
}

const CCTVLiveSection: React.FC<CCTVLiveSectionProps> = ({
  data,
  selectedSite,
}) => {
  const [modalStream, setModalStream] = useState<LiveCCTV | null>(null);

  // If "all" is selected, group by site and show one representative per site.
  // Otherwise, filter by the selected site.
  let displayedStreams: LiveCCTV[];
  if (selectedSite === "all") {
    const grouped: { [site: string]: LiveCCTV } = {};
    data.forEach((stream) => {
      if (!grouped[stream.siteName]) {
        grouped[stream.siteName] = stream;
      }
    });
    displayedStreams = Object.values(grouped);
  } else {
    displayedStreams = data.filter(
      (stream) => stream.siteName === selectedSite
    );
  }

  if (displayedStreams.length === 0) {
    return <p>No live CCTV streams available.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-3">Live CCTV Streams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedStreams.map((stream) => (
          <div
            key={stream.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden"
          >
            <iframe
              src={stream.streamUrl}
              className="w-full h-64 object-cover"
              title={stream.cameraName}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
              <div className="text-sm">{stream.cameraName}</div>
              <button
                onClick={() => setModalStream(stream)}
                className="text-white"
                aria-label="Fullscreen"
              >
                ⛶
              </button>
            </div>
            <button
              onClick={() => setModalStream(stream)}
              className="absolute inset-0 z-10 focus:outline-none"
              aria-label="View Fullscreen"
            ></button>
          </div>
        ))}
      </div>
      {modalStream && (
        <CCTVModal
          streamUrl={modalStream.streamUrl}
          cameraName={modalStream.cameraName}
          onClose={() => setModalStream(null)}
        />
      )}
    </div>
  );
};

export default CCTVLiveSection;
