import { Site } from "@/app/types/task-manager/site";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import DeleteConfirmModal from "./DeleteConfirmModal";

interface SiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (site: Site) => void;
  onDelete?: (siteId: string) => void;
  site?: Site | null;
}

const SiteModal: React.FC<SiteModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  site,
}) => {
  const [formData, setFormData] = useState<Site>({
    id: "",
    name: "",
    location: "",
    description: "",
  });

  const [isDeleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  // Ensure the formData is updated when `site` prop changes
  useEffect(() => {
    if (site) {
      setFormData(site); // Update state with site data if editing
    } else {
      setFormData({ id: "", name: "", location: "", description: "" }); // Reset state for new site
    }
  }, [site]); // Trigger this effect when the `site` prop changes

  const handleSave = () => {
    // Pass the updated formData to the parent via onSave
    onSave({ ...formData, id: formData.id || crypto.randomUUID() });
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{site ? "Edit Site" : "Create Site"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              placeholder="Location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
            <Input
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            {site && onDelete && (
              <Button
                variant="destructive"
                onClick={() => setDeleteConfirmOpen(true)} // Open delete confirmation modal
              >
                Delete
              </Button>
            )}
            <Button onClick={handleSave}>{site ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation modal */}
      <DeleteConfirmModal
        isOpen={isDeleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
        onConfirm={() => onDelete?.(formData.id)} // Trigger onDelete on confirmation
        itemName={formData.name}
      />
    </>
  );
};

export default SiteModal;
