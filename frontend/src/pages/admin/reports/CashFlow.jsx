import ReportTabs from "../../../components/admin/ReportTabs";
import AdminHeader from "../../../components/admin/Header";

import {
    BanknotesIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const operating = [
    { label: "Net Income", amount: 15132 },
    { label: "Depreciation", amount: 2000 },
    { label: "Change in Accounts Receivable", amount: -3200 },
    { label: "Change in Inventory", amount: -4500 },
    { label: "Change in Accounts Payable", amount: 1800 },
];

const investing = [
    { label: "Purchase of Equipment", amount: -12000 },
    { label: "Sale of Assets", amount: 2500 },
];

const financing = [
    { label: "Owner Contributions", amount: 10000 },
    { label: "Loan Repayments", amount: -5000 },
];

const Cards = [
    {
        id: 0,
        icon: BanknotesIcon,
        title: "Operating Cash",
        value: 11132,
        tag: "Cash from operations",
        tagColor: "text-green-600",
        ArrowIcon: ArrowTrendingUpIcon,
    },
    {
        id: 1,
        icon: ArrowTrendingDownIcon,
        title: "Investing Cash",
        value: -9500,
        tag: "Cash from investments",
        tagColor: "text-red-500",
        ArrowIcon: ArrowTrendingDownIcon,
    },
    {
        id: 2,
        icon: CurrencyDollarIcon,
        title: "Financing Cash",
        value: 5000,
        tag: "Cash from financing",
        tagColor: "text-green-600",
        ArrowIcon: ArrowTrendingUpIcon,
    },
    {
        id: 3,
        icon: BanknotesIcon,
        title: "Net Cash Flow",
        value: 6632,
        tag: "Overall cash movement",
        tagColor: "text-green-600",
        ArrowIcon: ArrowTrendingUpIcon,
    },
];

function sum(items) {
    return items.reduce((acc, item) => acc + item.amount, 0);
}

function formatCurrency(amount) {
    return `₱${Math.abs(amount).toLocaleString("en-PH", {
        minimumFractionDigits: 2,
    })}`;
}

function ReportRow({ label, amount, bold = false }) {
    const isNegative = amount < 0;

    return (
        <div
            className={`flex justify-between py-2 ${
                bold
                    ? "font-bold uppercase text-gray-900"
                    : "text-gray-600"
            }`}
        >
            <span>{label}</span>

            <span className={isNegative ? "text-red-500" : ""}>
                {isNegative ? "-" : ""}
                {formatCurrency(amount)}
            </span>
        </div>
    );
}

function CashFlow() {
    // Calculate totals
    const operatingTotal = sum(operating);
    const investingTotal = sum(investing);
    const financingTotal = sum(financing);

    const netCashFlow =
        operatingTotal +
        investingTotal +
        financingTotal;

    return (
        <div>
            <AdminHeader
                title="Cash Flow Statement"
                description="Track how cash moves in and out of your business."
            />

            {/* tabs */}
            <ReportTabs />

            {/* period */}
            <div className="flex justify-end mb-4">
                <p className="text-sm text-gray-500 font-bold italic">
                    Period:{" "}
                    <span className="font-semibold">
                        September 2026
                    </span>
                </p>
            </div>

            {/* summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
                {Cards.map((card) => {
                    const Icon = card.icon;
                    const ArrowIcon = card.ArrowIcon;

                    return (
                        <div
                            key={card.id}
                            className="w-full bg-white p-4 sm:p-5 rounded-lg shadow-md"
                        >
                            {/* icon + title */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-blue-50">
                                    <Icon className="w-5 h-5 text-blue-600" />
                                </div>

                                <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                                    {card.title}
                                </h3>
                            </div>

                            {/* amount */}
                            <p
                                className={`text-xl sm:text-3xl font-bold mb-2 ${
                                    card.value < 0
                                        ? "text-red-500"
                                        : "text-black"
                                }`}
                            >
                                {card.value < 0 ? "-" : ""}
                                {formatCurrency(card.value)}
                            </p>

                            {/* description */}
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

            {/* cash flow details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mt-6">

                {/* operating */}
                <h3 className="text-base uppercase font-semibold text-gray-800 mb-3">
                    Operating Activities
                </h3>

                <div className="divide-y divide-gray-100">
                    {operating.map((item) => (
                        <ReportRow
                            key={item.label}
                            label={item.label}
                            amount={item.amount}
                        />
                    ))}
                </div>

                <ReportRow
                    label="Net Cash from Operating"
                    amount={operatingTotal}
                    bold
                />

                {/* investing */}
                <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">
                    Investing Activities
                </h3>

                <div className="divide-y divide-gray-100">
                    {investing.map((item) => (
                        <ReportRow
                            key={item.label}
                            label={item.label}
                            amount={item.amount}
                        />
                    ))}
                </div>

                <ReportRow
                    label="Net Cash from Investing"
                    amount={investingTotal}
                    bold
                />

                {/* financing */}
                <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">
                    Financing Activities
                </h3>

                <div className="divide-y divide-gray-100">
                    {financing.map((item) => (
                        <ReportRow
                            key={item.label}
                            label={item.label}
                            amount={item.amount}
                        />
                    ))}
                </div>

                <ReportRow
                    label="Net Cash from Financing"
                    amount={financingTotal}
                    bold
                />

                {/* net cash */}
                <div className="border-t-2 border-gray-800 mt-4">
                    <ReportRow
                        label="Net Increase in Cash"
                        amount={netCashFlow}
                        bold
                    />
                </div>
            </div>
        </div>
    );
}

export default CashFlow;