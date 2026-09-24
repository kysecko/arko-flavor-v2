import {
    Squares2X2Icon,
    CheckCircleIcon,
    XCircleIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const tabs = [
    {
        path: "/admin/orders/all",
        label: "All",
        icon: Squares2X2Icon,
    },
    {
        path: "/admin/orders/completed",
        label: "Completed",
        icon: CheckCircleIcon,
    },
    {
        path: "/admin/orders/inprogress",
        label: "In Progress",
        icon: ClockIcon,
    },
    {
        path: "/admin/orders/cancelled",
        label: "Cancelled",
        icon: XCircleIcon,
    },
];

export default function OrderTabs() {
    return (
        <div className="flex gap-2 border-gray-200 mb-4">
            {tabs.map((tab) => {
                const Icon = tab.icon;

                return (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                                isActive
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                            }`
                        }
                    >
                        <Icon className="w-5 h-5" />
                        <span>{tab.label}</span>
                    </NavLink>
                );
            })}
        </div>
    );
}