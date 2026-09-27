import ReportTabs from "../../../components/admin/ReportTabs";
import AdminHeader from "../../../components/admin/Header";

import {
    CurrencyDollarIcon,
    BanknotesIcon,
    ChartBarIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

const revenue = [
    { label: "Product Sales", amount: 92000 },
    { label: "Other Income", amount: 3215 },
];

const cogs = [
    { label: "Cost of Goods Sold", amount: 38000 },
];

const operatingExpenses = [
    { label: "Rent", amount: 12000 },
    { label: "Salaries and Wages", amount: 18000 },
    { label: "Utilities", amount: 4500 },
    { label: "Marketing", amount: 3200 },
    { label: "Miscellaneous", amount: 1183 },
];

function sum(items) {
    return items.reduce((acc, item) => acc + item.amount, 0);
}

function formatCurrency(amount) {
    return `₱${amount.toLocaleString("en-PH", {
        minimumFractionDigits: 2,
    })}`;
}

function ReportRow({ label, amount, bold = false }) {
    return (
        <div
            className={`flex justify-between items-center py-2 ${bold
                    ? "font-bold uppercase text-gray-900"
                    : "text-gray-600"
                }`}
        >
            <span className="text-sm">
                {label}
            </span>

            <span className="text-sm">
                {formatCurrency(amount)}
            </span>
        </div>
    );
}

function IncomeStatement() {
    const totalRevenue = sum(revenue);
    const totalCOGS = sum(cogs);
    const grossProfit = totalRevenue - totalCOGS;
    const totalOpEx = sum(operatingExpenses);
    const netIncome = grossProfit - totalOpEx;

    const Cards = [
        {
            id: 0,
            icon: CurrencyDollarIcon,
            title: "Total Revenue",
            value: totalRevenue,
            tag: "Total income generated",
            tagColor: "text-green-600",
            ArrowIcon: ArrowTrendingUpIcon,
        },
        {
            id: 1,
            icon: BanknotesIcon,
            title: "Gross Profit",
            value: grossProfit,
            tag: "Revenue after COGS",
            tagColor: "text-blue-600",
            ArrowIcon: ArrowTrendingUpIcon,
        },
        {
            id: 2,
            icon: ChartBarIcon,
            title: "Net Income",
            value: netIncome,
            tag:
                netIncome >= 0
                    ? "Profit after expenses"
                    : "Loss after expenses",
            tagColor:
                netIncome >= 0
                    ? "text-green-600"
                    : "text-red-500",
            ArrowIcon:
                netIncome >= 0
                    ? ArrowTrendingUpIcon
                    : ArrowTrendingDownIcon,
        },
    ];

    return (
        <div>
            <AdminHeader
                title="Income Statement"
                description="See how much your business earned and spent over a period."
            />

            {/* tabs */}
            <ReportTabs />

            {/* Period */}
            <div className="flex justify-end mb-4">
                <p className="text-xs sm:text-sm text-gray-500 font-bold italic">
                    Period:{" "}
                    <span className="font-semibold">
                        September 2026
                    </span>
                </p>
            </div>

            {/* summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
                {Cards.map((card) => {
                    const Icon = card.icon;
                    const ArrowIcon = card.ArrowIcon;

                    return (
                        <div
                            key={card.id}
                            className="w-full bg-white p-4 sm:p-5 rounded-lg shadow-md"
                        >
                            {/* Icon + Title */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-blue-50">
                                    <Icon className="w-5 h-5 text-blue-600" />
                                </div>

                                <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Amount */}
                            <p
                                className={`text-xl sm:text-3xl font-bold mb-2 ${card.value < 0
                                        ? "text-red-500"
                                        : "text-black"
                                    }`}
                            >
                                {formatCurrency(card.value)}
                            </p>

                            {/* Description */}
                            <p
                                className={`flex items-center gap-1 text-[11px] sm:text-xs font-medium ${card.tagColor}`}
                            >
                                <ArrowIcon className="w-3.5 h-3.5" />
                                {card.tag}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* INCOME STATEMENT DETAILS */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 mb-4">

                {/* revenue */}
                <h3 className="text-sm sm:text-base font-bold uppercase text-gray-800 mb-3">
                    Revenue
                </h3>

                <div className="divide-y divide-gray-100">
                    {revenue.map((item) => (
                        <ReportRow
                            key={item.label}
                            label={item.label}
                            amount={item.amount}
                        />
                    ))}
                </div>

                <ReportRow
                    label="Total Revenue"
                    amount={totalRevenue}
                    bold
                />

                {/* cost of good sold */}
                <h3 className="text-sm sm:text-base uppercase font-semibold text-gray-800 mb-3 mt-6">
                    Cost of Goods Sold
                </h3>

                <div className="divide-y divide-gray-100">
                    {cogs.map((item) => (
                        <ReportRow
                            key={item.label}
                            label={item.label}
                            amount={item.amount}
                        />
                    ))}
                </div>

                <ReportRow
                    label="Gross Profit"
                    amount={grossProfit}
                    bold
                />

                {/* operating Expenses */}
                <h3 className="text-sm sm:text-base uppercase font-semibold text-gray-800 mb-3 mt-6">
                    Operating Expenses
                </h3>

                <div className="divide-y divide-gray-100">
                    {operatingExpenses.map((item) => (
                        <ReportRow
                            key={item.label}
                            label={item.label}
                            amount={item.amount}
                        />
                    ))}
                </div>

                <ReportRow
                    label="Total Operating Expenses"
                    amount={totalOpEx}
                    bold
                />

                {/* net Income */}
                <div className="border-t-2 border-gray-800 mt-4">
                    <ReportRow
                        label="Net Income"
                        amount={netIncome}
                        bold
                    />
                </div>
            </div>
        </div>
    );
}

export default IncomeStatement;