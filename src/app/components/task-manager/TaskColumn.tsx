import React from "react";
import { useDroppable } from "@dnd-kit/core";
import TaskItem from "./TaskItem";
import { Department } from "@/app/types/task-manager/department";
import { Task } from "@/app/types/task-manager/task";

interface TaskColumnProps {
  department: Department;
  tasks: Task[];
  onEditTask: (task: Task) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  department,
  tasks,
  onEditTask,
}) => {
  const { setNodeRef } = useDroppable({ id: department.id });

  return (
    <div ref={setNodeRef} className="p-4 bg-gray-100 rounded-lg w-64">
      <h2 className="text-lg font-semibold">{department.name}</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEditTask} />
      ))}
    </div>
  );
};

export default TaskColumn;
