import { useState } from "react";
import AdminHeader from "../../components/admin/Header";
import DropdownInput from "../../components/ui/DropdownInput";
import Button from "../../components/ui/Button";
import {
    CurrencyDollarIcon,
    ShoppingCartIcon,
    BanknotesIcon,
    ArrowsRightLeftIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    ArrowRightIcon,
    CalendarDateRangeIcon,
    FunnelIcon,
    PrinterIcon,
} from "@heroicons/react/24/outline";

const totalSales = 0;
const totalOrders = 0;
const averageOrderValue = 0;
const totalExpenses = 0;
const netCashFlow = totalSales - totalExpenses;
const cashIn = totalSales;
const cashOut = totalExpenses;
const endingBalance = 0;

const expenseCategories = [];

const formatPeso = (value) =>
    `₱${value.toLocaleString("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;

const Cards = [
    {
        id: 0,
        icon: CurrencyDollarIcon,
        title: "Total Sales",
        value: totalSales,
        threshold: 10000,
        tag: `${totalOrders} orders`,
        format: formatPeso,
    },
    {
        id: 1,
        icon: ShoppingCartIcon,
        title: "Avg Order Value",
        value: averageOrderValue,
        threshold: 500,
        tag: "Per completed order",
        format: formatPeso,
    },
    {
        id: 2,
        icon: BanknotesIcon,
        title: "Total Expenses",
        value: totalExpenses,
        threshold: 10000,
        invert: true,
        tag: "Cash outflows",
        format: formatPeso,
    },
    {
        id: 3,
        icon: ArrowsRightLeftIcon,
        title: "Net Cash Flow",
        value: netCashFlow,
        threshold: 5000,
        tag: "In - Out",
        format: formatPeso,
    },
];

function getAccent(card) {
    const rate = card.invert
        ? card.value <= 0
            ? Infinity
            : card.threshold / card.value
        : card.threshold > 0
            ? card.value / card.threshold
            : card.value > 0
                ? 1
                : 0;

    if (rate < 0.5) {
        return { tagColor: "text-red-500", ArrowIcon: ArrowDownIcon };
    }

    if (rate < 1) {
        return { tagColor: "text-amber-500", ArrowIcon: ArrowRightIcon };
    }

    return { tagColor: "text-green-600", ArrowIcon: ArrowUpIcon };
}

function SummaryPage() {
    const [daily, setDaily] = useState("");

    return (
        <div>
            <style>{`
                @media print {
                    body * { visibility: hidden !important; }
                    #daily-report, #daily-report * { visibility: visible !important; }
                    #daily-report {
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                        width: 100% !important;
                        margin: 0 !important;
                        border: none !important;
                        box-shadow: none !important;
                        background: white !important;
                    }
                    #daily-report table { width: 100% !important; }
                    #daily-report thead th,
                    #daily-report .amount {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    @page { margin: 12mm; }
                }
            `}</style>

            <div className="print:hidden">
                <AdminHeader
                    title="Business Summary"
                    description="See a quick snapshot of your overall performance at a glance."
                />
            </div>

            <div className="print:hidden grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {Cards.map((card) => {
                    const style = getAccent(card);

                    return (
                        <div
                            key={card.id}
                            className="w-full rounded-xl border border-blue-100 bg-white p-4 shadow-sm sm:p-5"
                        >
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                    <card.icon className="h-5 w-5 text-blue-600" />
                                </div>
                                <h3 className="text-base font-semibold text-gray-700">
                                    {card.title}
                                </h3>
                            </div>

                            <p className="mb-2 text-xl font-bold text-black sm:text-3xl">
                                {card.format(card.value)}
                            </p>

                            <p className={`flex items-center gap-1 text-xs font-medium ${style.tagColor}`}>
                                <style.ArrowIcon className="h-3.5 w-3.5 shrink-0" />
                                {card.tag}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="print:hidden mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="w-full sm:w-59!">
                    <DropdownInput
                        id="daily"
                        icon={CalendarDateRangeIcon}
                        value={daily}
                        placeholder="Select year"
                        onChange={(event) => setDaily(event.target.value)}
                        options={[
                            { value: "today", label: "Today" },
                            { value: "yesterday", label: "Yesterday" },
                            { value: "last_7_days", label: "Last 7 Days" },
                            { value: "last_14_days", label: "Last 14 Days" },
                            { value: "last_30_days", label: "Last 30 Days" },
                        ]}
                    />
                </div>

                <Button
                    text="Set Filter"
                    icon={FunnelIcon}
                    className="w-full rounded-full! border border-gray-200 bg-white px-3 py-2 shadow-sm hover:border-blue-300 sm:w-auto"
                />

                <Button
                    text="Print"
                    icon={PrinterIcon}
                    onClick={() => window.print()}
                    className="w-full rounded-full! border border-blue-500 bg-blue-500 px-3 py-2 text-white shadow-sm hover:border-blue-300 sm:w-auto"
                />
            </div>

            <section
                id="daily-report"
                className="mt-4 flex min-h-95 w-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6"
            >
                <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        Daily Operations Report
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Today (Sep 27, 2026)
                    </p>
                </div>

                <hr className="my-5 border-gray-200" />

                <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                    Sales Summary
                </h3>

                <div className="mt-3 overflow-x-auto rounded-lg border border-gray-100">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-sm font-semibold text-gray-700">
                            <tr>
                                <th className="px-4 py-3">Metric</th>
                                <th className="px-4 py-3 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="px-4 py-3 text-gray-700">Total Sales</td>
                                <td className="amount px-4 py-3 text-right font-medium text-green-600">
                                    {formatPeso(totalSales)}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-gray-700">Number of Orders</td>
                                <td className="amount px-4 py-3 text-right font-medium text-gray-700">
                                    {totalOrders.toLocaleString("en-PH")}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-gray-700">Average Order Value</td>
                                <td className="amount px-4 py-3 text-right font-medium text-gray-700">
                                    {formatPeso(averageOrderValue)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="mt-7 text-base font-bold text-gray-900 sm:text-lg">
                    Expense Summary (by Category)
                </h3>

                <div className="mt-3 overflow-x-auto rounded-lg border border-gray-100">
                    {expenseCategories.length > 0 ? (
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 text-sm font-semibold text-gray-700">
                                <tr>
                                    <th className="px-4 py-3">Category</th>
                                    <th className="px-4 py-3 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {expenseCategories.map((category) => (
                                    <tr key={category.name}>
                                        <td className="px-4 py-3 text-gray-700">
                                            {category.name}
                                        </td>
                                        <td className="amount px-4 py-3 text-right font-medium text-gray-700">
                                            {formatPeso(category.amount)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="px-4 py-5 text-center text-sm text-gray-400">
                            No categorized expenses
                        </p>
                    )}
                </div>

                <h3 className="mt-7 text-base font-bold text-gray-900 sm:text-lg">
                    Cash Flow Summary
                </h3>

                <div className="mt-3 overflow-x-auto rounded-lg border border-gray-100">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-sm font-semibold text-gray-700">
                            <tr>
                                <th className="px-4 py-3">Description</th>
                                <th className="px-4 py-3 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="px-4 py-3 text-gray-700">Cash In</td>
                                <td className="amount px-4 py-3 text-right font-medium text-green-600">
                                    {formatPeso(cashIn)}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-gray-700">Cash Out</td>
                                <td className="amount px-4 py-3 text-right font-medium text-red-500">
                                    {formatPeso(cashOut)}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-bold text-gray-900">Net Cash Flow</td>
                                <td className="amount px-4 py-3 text-right font-bold text-green-600">
                                    {formatPeso(netCashFlow)}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-gray-700">Ending Cash Balance</td>
                                <td className="amount px-4 py-3 text-right font-medium text-gray-700">
                                    {formatPeso(endingBalance)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default SummaryPage;
