"use client";

import React from "react";

interface CCTVModalProps {
  streamUrl: string;
  cameraName: string;
  onClose: () => void;
}

const CCTVModal: React.FC<CCTVModalProps> = ({
  streamUrl,
  cameraName,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl"
          aria-label="Close Fullscreen"
        >
          &times;
        </button>
        <iframe
          src={streamUrl}
          className="w-full h-96 rounded-lg"
          title={cameraName}
        />
      </div>
    </div>
  );
};

export default CCTVModal;
