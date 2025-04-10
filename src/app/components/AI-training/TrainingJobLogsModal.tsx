// src/app/components/AI-training/TrainingJobLogsModal.tsx
"use client";

import { useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

type TrainingJobLogsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  logs: string;
};

export default function TrainingJobLogsModal({
  isOpen,
  onClose,
  logs,
}: TrainingJobLogsModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
      aria-modal="true"
      role="dialog"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl rounded-xl bg-white dark:bg-gray-900 p-6 shadow-2xl relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            aria-label="Close logs modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <Dialog.Title className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Training Logs
          </Dialog.Title>

          {/* Logs */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 text-sm font-mono whitespace-pre-wrap max-h-[60vh] overflow-y-auto border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
            {logs?.trim().length > 0 ? logs : "No logs available."}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
