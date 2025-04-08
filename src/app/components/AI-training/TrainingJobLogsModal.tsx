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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl rounded-xl bg-white dark:bg-background p-6 shadow-xl overflow-y-auto max-h-[80vh] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            aria-label="Close logs modal"
          >
            <X className="w-5 h-5" />
          </button>

          <Dialog.Title className="text-lg font-semibold mb-4">
            Training Logs
          </Dialog.Title>

          <div className="bg-muted rounded p-4 text-sm whitespace-pre-wrap max-h-[60vh] overflow-y-auto">
            {logs || "No logs available."}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
