/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Task } from "@/app/types/task-manager/task";
import { mockTasks } from "@/app/data/task-manager/mockTasks";
import { mockSites } from "@/app/data/task-manager/mockSites";
import { Site } from "@/app/types/task-manager/site";
import { Department } from "@/app/types/task-manager/department";
import { mockDepartments } from "@/app/data/task-manager/mockDepartments";
import TaskBoard from "@/app/components/task-manager/TaskBoard";
import TaskModal from "@/app/components/task-manager/TaskModal";
import SiteModal from "@/app/components/task-manager/SiteModal";
import DepartmentModal from "@/app/components/task-manager/DepartmentModal";
import { Button } from "@/app/components/ui/button";

const generateId = () => crypto.randomUUID();

const TaskManagerPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [sites, setSites] = useState<Site[]>(mockSites);
  const [departments, setDepartments] = useState<Department[]>(mockDepartments);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isSiteModalOpen, setIsSiteModalOpen] = useState(false);
  const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false);

  const handleSaveTask = (task: Task) => {
    setTasks((prevTasks) =>
      task.id
        ? prevTasks.map((t) => (t.id === task.id ? task : t))
        : [...prevTasks, { ...task, id: generateId() }]
    );
    setIsTaskModalOpen(false);
    setSelectedTask(null);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id.toString();
    const departmentId = over.id.toString();

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, departmentId } : task
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Task Manager</h1>

        <div className="flex gap-4">
          <Button onClick={() => setIsTaskModalOpen(true)}>Add Task</Button>
          <Button onClick={() => setIsSiteModalOpen(true)}>Add Site</Button>
          <Button onClick={() => setIsDepartmentModalOpen(true)}>
            Add Department
          </Button>
        </div>

        <TaskBoard
          tasks={tasks}
          departments={departments}
          sites={sites}
          onEditTask={setSelectedTask}
        />

        <TaskModal
          isOpen={isTaskModalOpen}
          onClose={() => setIsTaskModalOpen(false)}
          onSave={handleSaveTask}
          sites={sites}
          departments={departments}
          task={selectedTask}
        />
        <SiteModal
          isOpen={isSiteModalOpen}
          onClose={() => setIsSiteModalOpen(false)}
          onSave={(newSite) =>
            setSites([...sites, { ...newSite, id: generateId() }])
          } // ✅ Fix: Add onSave
        />
        <DepartmentModal
          isOpen={isDepartmentModalOpen}
          onClose={() => setIsDepartmentModalOpen(false)}
          onSave={(newDepartment) =>
            setDepartments([
              ...departments,
              { ...newDepartment, id: generateId() },
            ])
          } // ✅ Fix: Add onSave
          sites={sites} // ✅ Fix: Pass sites
          department={null} // ✅ Fix: Handle department editing (set to `null` for new)
        />
      </div>
    </DndContext>
  );
};

export default TaskManagerPage;
