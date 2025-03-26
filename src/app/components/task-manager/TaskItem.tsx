import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Task } from "@/app/types/task-manager/task";
import { Card, CardContent } from "../ui/card";

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
      className="p-2 bg-white shadow-sm rounded-md cursor-grab"
    >
      <CardContent>
        <p>{task.title}</p>
        <button onClick={() => onEdit(task)}>Edit</button>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
