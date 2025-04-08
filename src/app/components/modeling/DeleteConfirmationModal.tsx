"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type DeleteConfirmationModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};

export default function DeleteConfirmationModal({
  open,
  onClose,
  onConfirm,
  title,
  message,
}: DeleteConfirmationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-lg font-semibold">{title}</h2>
        </DialogHeader>
        <div className="py-4 text-sm">{message}</div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
