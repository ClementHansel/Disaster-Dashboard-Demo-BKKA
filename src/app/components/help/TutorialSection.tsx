"use client";

import React from "react";

interface Tutorial {
  title: string;
  description: string;
  videoUrl: string;
}

const tutorials: Tutorial[] = [
  {
    title: "System Overview",
    description: "Learn how the disaster early warning system works.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Sensor Calibration",
    description: "Step-by-step guide on calibrating sensors.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const TutorialSection: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Tutorials</h2>
      <div className="space-y-4">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg">{tutorial.title}</h3>
            <p className="text-gray-700 mb-2">{tutorial.description}</p>
            <div className="aspect-video">
              <iframe
                src={tutorial.videoUrl}
                title={tutorial.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialSection;
