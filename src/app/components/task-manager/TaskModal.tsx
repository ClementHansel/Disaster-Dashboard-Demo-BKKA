import { Department } from "@/app/types/task-manager/department";
import { Site } from "@/app/types/task-manager/site";
import { Task } from "@/app/types/task-manager/task";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  task?: Task | null;
  sites: Site[];
  departments: Department[];
}

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  onSave,
  task,
  sites,
  departments,
}) => {
  const [formData, setFormData] = useState<Task>({
    id: "",
    title: "",
    description: "",
    siteId: "",
    departmentId: "",
    assignedTo: "",
    status: "Pending",
    priority: "Medium",
    dueDate: "",
    createdAt: new Date().toISOString(),
  });

  useEffect(() => {
    if (task) {
      setFormData(task);
    } else {
      setFormData({
        id: "",
        title: "",
        description: "",
        siteId: "",
        departmentId: "",
        assignedTo: "",
        status: "Pending",
        priority: "Medium",
        dueDate: "",
        createdAt: new Date().toISOString(),
      });
    }
  }, [task]);

  const handleSave = () => {
    // Prevent saving if required fields are missing
    if (!formData.title || !formData.siteId || !formData.departmentId) {
      return;
    }
    onSave({ ...formData, id: formData.id || crypto.randomUUID() });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{task ? "Edit Task" : "Create New Task"}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Input
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <Select
            value={formData.siteId || ""}
            onValueChange={(value) =>
              setFormData({ ...formData, siteId: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Site" />
            </SelectTrigger>
            <SelectContent>
              {sites.map((site) => (
                <SelectItem key={site.id} value={site.id}>
                  {site.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={formData.departmentId || ""}
            onValueChange={(value) =>
              setFormData({ ...formData, departmentId: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept.id} value={dept.id}>
                  {dept.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={formData.status}
            onValueChange={(value) =>
              setFormData({ ...formData, status: value as Task["status"] })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {["Pending", "In Progress", "Completed"].map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={formData.priority}
            onValueChange={(value) =>
              setFormData({ ...formData, priority: value as Task["priority"] })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              {["Low", "Medium", "High"].map((priority) => (
                <SelectItem key={priority} value={priority}>
                  {priority}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="date"
            placeholder="Due Date"
            value={formData.dueDate}
            onChange={(e) =>
              setFormData({ ...formData, dueDate: e.target.value })
            }
          />
          <Input
            placeholder="Assigned To"
            value={formData.assignedTo}
            onChange={(e) =>
              setFormData({ ...formData, assignedTo: e.target.value })
            }
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
