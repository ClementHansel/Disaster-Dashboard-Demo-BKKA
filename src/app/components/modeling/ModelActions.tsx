"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

type UserRole = "admin" | "editor" | "viewer";

type ModelActionsProps = {
  modelId: string;
  modelName: string;
  userRole: UserRole;
  onView?: (id: string) => void;
  onDeploy?: (id: string) => void;
  onDelete?: (id: string) => void;
  onClone?: (id: string) => void;
};

export default function ModelActions({
  modelId,
  modelName,
  userRole,
  onView,
  onDeploy,
  onDelete,
  onClone,
}: ModelActionsProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const canView = true;
  const canDeploy = userRole === "admin" || userRole === "editor";
  const canClone = userRole !== "viewer";
  const canDelete = userRole === "admin";

  const handleDelete = () => {
    setShowConfirm(false);
    onDelete?.(modelId);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Model actions"
            title="Actions"
          >
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {canView && (
            <DropdownMenuItem onClick={() => onView?.(modelId)}>
              👁 View
            </DropdownMenuItem>
          )}
          {canDeploy && (
            <DropdownMenuItem onClick={() => onDeploy?.(modelId)}>
              🚀 Deploy
            </DropdownMenuItem>
          )}
          {canClone && (
            <DropdownMenuItem onClick={() => onClone?.(modelId)}>
              📄 Clone
            </DropdownMenuItem>
          )}
          {canDelete && (
            <DropdownMenuItem
              onClick={() => setShowConfirm(true)}
              className="text-red-600"
            >
              🗑 Delete
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Model</AlertDialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Are you sure you want to delete <strong>{modelName}</strong>? This
              action cannot be undone.
            </p>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Yes, Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
