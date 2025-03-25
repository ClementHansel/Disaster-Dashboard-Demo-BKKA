"use client";

import Link from "next/link";
import {
  FaBars,
  FaHome,
  FaChartBar,
  FaCogs,
  FaCamera,
  FaTasks,
  FaDatabase,
  FaRobot,
  FaUser,
  FaQuestionCircle,
  FaPen,
  FaTable,
  FaMicrochip,
  FaWrench,
} from "react-icons/fa";

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, toggleSidebar }) => {
  return (
    <aside
      className={`h-full bg-gray-900 text-white px-4 pt-20 pb-12 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        {isExpanded && (
          <span className="text-xl font-bold text-sm">Disaster Dashboard</span>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-700 rounded"
          title="Toggle Sidebar"
        >
          <FaBars />
        </button>
      </div>

      <nav className="overflow-y-auto h-full">
        <ul className="space-y-2 list-none">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FaHome />
              {isExpanded && <span className="ml-2 text-sm">Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/sensors"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              title={!isExpanded ? "Sensors" : ""}
            >
              <FaMicrochip />
              {isExpanded && <span className="text-sm">Sensors</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/cctv"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              title={!isExpanded ? "CCTV" : ""}
            >
              <FaCamera />
              {isExpanded && <span className="text-sm">CCTV</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/control-panels"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              title={!isExpanded ? "Control Panels" : ""}
            >
              <FaWrench />
              {isExpanded && <span className="text-sm">Control Panels</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/analytics"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FaChartBar />
              {isExpanded && <span className="ml-2 text-sm">Analytics</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/annotation"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              title={!isExpanded ? "Annotation" : ""}
            >
              <FaPen />
              {isExpanded && <span className="text-sm">Annotation</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/dataset"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              title={!isExpanded ? "Data Set" : ""}
            >
              <FaTable />
              {isExpanded && <span className="text-sm">Data Set</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/modeling"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              title={!isExpanded ? "Modeling" : ""}
            >
              <FaDatabase />
              {isExpanded && <span className="text-sm">Modeling</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/task-manager"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              title={!isExpanded ? "Task Manager" : ""}
            >
              <FaTasks />
              {isExpanded && <span className="text-sm">Task Manager</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/cortheaAI"
              className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
              title={!isExpanded ? "Corthea AI" : ""}
            >
              <FaRobot />
              {isExpanded && <span className="text-sm">Corthea AI</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FaCogs />
              {isExpanded && <span className="ml-2 text-sm">Settings</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/account"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FaUser />
              {isExpanded && <span className="ml-2 text-sm">Account</span>}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/help"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FaQuestionCircle />
              {isExpanded && <span className="ml-2 text-sm">Help</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
