import { Department } from "@/app/types/task-manager/department";
import React from "react";
import { Button } from "../ui/button";

interface DepartmentListProps {
  departments: Department[];
  getSiteName: (siteId: string) => string;
  onEdit: (department: Department) => void;
  onDelete: (departmentId: string) => void;
}

const DepartmentList: React.FC<DepartmentListProps> = ({
  departments,
  getSiteName,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Departments</h2>
      <ul>
        {departments.map((department) => (
          <li
            key={department.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>
              {department.name} ({getSiteName(department.siteId)})
            </span>
            <div>
              <Button onClick={() => onEdit(department)}>Edit</Button>
              <Button
                variant="destructive"
                onClick={() => onDelete(department.id)}
                className="ml-2"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
