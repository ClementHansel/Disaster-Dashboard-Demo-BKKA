// ui/Modal.tsx
"use client";

import { ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Modal Component
interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <h2 className="text-lg font-bold">{title}</h2>
        {children}
      </DialogContent>
    </Dialog>
  );
};
