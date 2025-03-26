import { Task } from "@/app/types/task-manager/task";
import React from "react";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  getSiteName: (siteId: string) => string;
  getDepartmentName: (departmentId: string) => string;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEdit,
  onDelete,
  getSiteName,
  getDepartmentName,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tasks Test</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border p-4 rounded-lg flex justify-between items-center mb-2"
          >
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <p>
                <strong>Site:</strong> {getSiteName(task.siteId)}
              </p>
              <p>
                <strong>Department:</strong>{" "}
                {getDepartmentName(task.departmentId)}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => onEdit(task)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
