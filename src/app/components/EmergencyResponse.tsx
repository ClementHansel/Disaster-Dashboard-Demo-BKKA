import { emergencyTasks } from "@/app/data/mockData";

const EmergencyResponse = () => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Emergency Response Tasks</h2>
      <ul className="space-y-2">
        {emergencyTasks.map((task) => (
          <li
            key={task.id}
            className="p-3 border rounded-md flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{task.task}</p>
              <p className="text-sm text-gray-600">{task.department}</p>
            </div>
            <span
              className={`px-3 py-1 text-sm rounded-full font-semibold ${
                task.status === "Completed"
                  ? "bg-green-200 text-green-800"
                  : task.status === "In Progress"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyResponse;
