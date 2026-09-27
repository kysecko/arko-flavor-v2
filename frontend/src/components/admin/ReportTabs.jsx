import {
    DocumentTextIcon,
    ArrowTrendingUpIcon,
    ChartBarIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

const tabs = [
    {
        path: "/admin/reports/balance_sheet",
        label: "Balance Sheet",
        icon: DocumentTextIcon,
    },
    {
        path: "/admin/reports/cashflow",
        label: "Cash Flow",
        icon: ArrowTrendingUpIcon,
    },
    {
        path: "/admin/reports/income_statement",
        label: "Income Statement",
        icon: ChartBarIcon,
    },
];

export default function ReportTabs() {
    return (
        <div className="w-full overflow-x-auto mb-4 scrollbar-hide">
            <div className="flex min-w-max gap-1 sm:gap-2 border-gray-200 ">
                {tabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                        <NavLink
                            key={tab.path}
                            to={tab.path}
                            className={({ isActive }) =>
                                `flex items-center justify-center gap-1.5 sm:gap-2
                                px-3 sm:px-4 py-2
                                text-xs sm:text-sm font-medium
                                whitespace-nowrap shrink-0
                                border-b-2 transition-colors  ${
                                    isActive
                                        ? "border-blue-500 text-blue-600"
                                        : "border-transparent text-gray-500 hover:border-b-2 hover:border-blue-500 hover:text-blue-600"
                                }`
                            }
                        >
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                            <span>{tab.label}</span>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}