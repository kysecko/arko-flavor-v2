import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

import {
    CurrencyDollarIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon, WalletIcon, CalendarIcon, EllipsisVerticalIcon,
    
} from "@heroicons/react/24/outline";

import DropdownInput from './../../components/ui/DropdownInput';
import { useState } from "react";
import AdminHeader from "../../components/admin/Header";


// cards data
const Cards = [
    {
        id: 0,
        icon: CurrencyDollarIcon,
        title: "Total Sales",
        number: 12215.00,
        tag: "Revenue from others"
    },
    {
        id: 1,
        icon: ArrowTrendingDownIcon,
        title: "Total Expenses",
        number: 4221.00,
        tag: "Total cash outflow"
    },
    {
        id: 2,
        icon: WalletIcon,
        title: "Cash Balance",
        number: 75932.00,
        tag: "Current available balance"
    },
    {
        id: 3,
        icon: ArrowTrendingUpIcon,
        title: "Net Profit",
        number: 90215.00,
        tag: "Revenue minus expenses"
    },
];

// ANALYTICS DATA

//revenue vs expenses
const dummyData = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ],
    datasets: [
        {
            label: "Cash Inflow",
            data: [
                20000,
                14000,
                42000,
                20000,
                24000,
                35000,
                92300,
                45000,
                30000,
                52000,
                38000,
                94000,
            ],
            backgroundColor: "rgba(37, 99, 235, 1)",
        },
        {
            label: "Cash Outflow",
            data: [
                32000,
                74000,
                44000,
                60000,
                71000,
                29000,
                36000,
                68000,
                90000,
                43000,
                29000,
                48000,
            ],
            backgroundColor: "rgba(37, 99, 235, 0.25)",
        },
    ],
};
// cashflow overview
const cashFlowData = {
    labels: ["Cash Inflow", "Cash Outflow"],
    datasets: [
        {
            data: [155000, 310000],
            backgroundColor: [
                "rgba(37, 99, 235, 1)",
                "rgba(37, 99, 235, 0.25)",
            ],
            borderWidth: 0,
        },
    ],
};


function Dashboard() {
    const [year, setYear] = useState();


    return (
        <div>

            {/* header */}
           <AdminHeader title="Dashboard" description="Get an overview of inventory, orders, suppliers, sales, and waste tracking in one place." />

            {/* cards */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">

                {Cards.map((card) =>
                (
                    <div className="w-full bg-white border border-blue-100 rounded-xl p-4 sm:p-5 shadow-sm">

                        <div className="flex items-center gap-3 mb-3" key={card.id}>

                            <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg shrink-0">
                                <card.icon className="w-5 h-5 text-blue-600" />
                            </div>

                            <h3 className="text-base font-semibold text-black-700">
                                {card.title}
                            </h3>

                        </div>

                        <p className="text-black text-xl sm:text-3xl font-bold mb-2">
                            ₱{card.number.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
                        </p>

                        <p className="text-[12px] text-gray-500 font-medium">
                            {card.tag}
                        </p>

                    </div>
                ))}
            </div>

            {/* analytics */}
            <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="bg-white rounded-xl p-5 shadow-sm">
                        {/* chart header */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-gray-800">
                                Revenue vs Expenses
                            </h3>

                            <div className="flex items-center gap-3">
                                <DropdownInput
                                    id="year"
                                    icon={CalendarIcon}
                                    placeholder="Select year"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    options={[
                                        { value: "2023", label: "2023" },
                                        { value: "2024", label: "2024" },
                                        { value: "2025", label: "2025" },
                                        { value: "2026", label: "2026" },
                                    ]}
                                />
                            </div>
                        </div>

                        {/* bar chart */}
                        <div className="h-75">
                            <Bar
                                data={dummyData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,

                                    plugins: {
                                        legend: {
                                            position: "top",
                                            align: "end",
                                            labels: {
                                                usePointStyle: true,
                                                pointStyle: "rectRounded",
                                                boxWidth: 6,
                                                boxHeight: 6,
                                                padding: 12,
                                                color: "#6B7280",
                                                font: {
                                                    size: 12,
                                                },
                                            },
                                        },

                                        tooltip: {
                                            backgroundColor: "#6B7280",
                                            titleFont: {
                                                size: 11,
                                            },
                                            bodyFont: {
                                                size: 11,
                                            },
                                            padding: 8,
                                            cornerRadius: 6,
                                        },
                                    },

                                    scales: {
                                        x: {
                                            grid: {
                                                display: false,
                                            },
                                            border: {
                                                display: false,
                                            },
                                            ticks: {
                                                color: "#9CA3AF",
                                                font: {
                                                    size: 12,
                                                },
                                            },
                                        },

                                        y: {
                                            beginAtZero: true,
                                            border: {
                                                display: false,
                                            },
                                            grid: {
                                                color: "#F3F4F6",
                                            },
                                            ticks: {
                                                color: "#9CA3AF",
                                                font: {
                                                    size: 12,
                                                },
                                                callback: (value) => `${value / 1000}K`,
                                            },
                                        },
                                    },

                                    elements: {
                                        bar: {
                                            borderRadius: 0,
                                            borderSkipped: false,
                                        },
                                    },

                                    datasets: {
                                        bar: {
                                            barPercentage: 0.8,
                                            categoryPercentage: 0.7,
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>

                    <div className="shadow-md p-4 rounded-lg h-105">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-gray-800">
                                Cash Flow Overview
                            </h3>
                            <EllipsisVerticalIcon className="w-8 h-8 text-gray-500" />

                        </div>


                        <div className="h-82 flex items-center justify-center">
                            <Doughnut
                                data={cashFlowData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: "top",
                                            align: "end",
                                            labels: {
                                                usePointStyle: true,
                                                pointStyle: "rectRounded",
                                                boxWidth: 6,
                                                boxHeight: 6,
                                                padding: 12,
                                                color: "#6B7280",
                                                font: {
                                                    size: 12,
                                                },
                                            },
                                        },
                                    }
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Dashboard;
