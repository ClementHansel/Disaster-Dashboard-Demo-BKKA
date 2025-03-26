import React from "react";
import TaskColumn from "./TaskColumn";
import { Task } from "@/app/types/task-manager/task";
import { Department } from "@/app/types/task-manager/department";
import { Site } from "@/app/types/task-manager/site";

interface TaskBoardProps {
  tasks: Task[];
  departments: Department[];
  sites: Site[];
  onEditTask: (task: Task) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({
  tasks,
  departments,

  onEditTask,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {departments.map((department) => (
        <TaskColumn
          key={department.id}
          department={department}
          tasks={tasks.filter((task) => task.departmentId === department.id)}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
