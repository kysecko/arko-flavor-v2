import AdminHeader from "../../components/admin/Header";
import {
    CurrencyDollarIcon,
    CheckCircleIcon,
    BanknotesIcon,
    ArrowTrendingUpIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    CalendarIcon,
    ArrowRightIcon
} from "@heroicons/react/24/outline";
import DropdownInput from "../../components/ui/DropdownInput";
import { useState } from "react";

import noRecordsImage from "../../assets/images/No records.png";

const Cards = [
    {
        id: 0,
        icon: CurrencyDollarIcon,
        title: "Total Revenue",
        value: 0,
        threshold: 10000,
        format: (v) =>
            `₱${v.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
        tag: "From sales",
    },
    {
        id: 1,
        icon: CheckCircleIcon,
        title: "Completed Orders",
        value: 3099,
        threshold: 1000,
        format: (v) => v.toLocaleString("en-PH"),
        tag: "This period",
    },
    {
        id: 2,
        icon: BanknotesIcon,
        title: "Order Revenue",
        value: 0,
        threshold: 5000,
        format: (v) =>
            `₱${v.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`,
        tag: "From completed orders",
    },
    {
        id: 3,
        icon: ArrowTrendingUpIcon,
        title: "Success Rates",
        value: 0,
        threshold: 50,
        format: (v) => `${v}%`,
        tag: "Completion rate",
    },
];
function getAccent(card) {
    const rate = card.threshold > 0
        ? card.value / card.threshold
        : card.value > 0 ? 1 : 0;

    if (rate < 0.5) {
        return { tagColor: "text-red-500", ArrowIcon: ArrowDownIcon };
    }

    if (rate < 1) {
        return { tagColor: "text-amber-500", ArrowIcon: ArrowRightIcon };
    }

    return { tagColor: "text-green-600", ArrowIcon: ArrowUpIcon };
}
function SalesPage() {
    const [year, setYear] = useState();

    return (
        <div>

            {/* header */}
            <AdminHeader
                title="Sales Insight"
                description="Monitor revenue trends and track performance across your store."
            />

            {/* card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
                {Cards.map((card) => {
                    const style = getAccent(card);

                    return (
                        <div
                            key={card.id}
                            className="w-full bg-white border border-blue-100 rounded-xl p-4 sm:p-5 shadow-sm"
                        >
                            {/* icon — always blue, never changes */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-blue-50">
                                    <card.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="text-base font-semibold text-gray-700">
                                    {card.title}
                                </h3>
                            </div>

                            {/* big number */}
                            <p className="text-black text-xl sm:text-3xl font-bold mb-2">
                                {card.format(card.value)}
                            </p>

                            {/* tag — only this changes */}
                            <p className={`flex items-center gap-1 text-xs font-medium ${style.tagColor}`}>
                                <style.ArrowIcon className="h-3.5 w-3.5" />
                                {card.tag}
                            </p>
                        </div>
                    );
                })}
            </div>


            {/* table performance container */}
            <div className="w-full flex flex-col h-95 mt-4 p-6 border shadow-sm border-gray-100 rounded-xl">

                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-xl font-bold">Sales Performance</h2>

                    <div className="flex items-center gap-3">
                        <DropdownInput
                            id="year"
                            icon={CalendarIcon}
                            placeholder="Select year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            options={[
                                { value: "last_7_days", label: "Last 7 days" },
                                { value: "last_30_days", label: "Last 30 days" },
                                { value: "last_3_months", label: "Last 3 months" },
                                { value: "last_6_months", label: "Last 6 months" },
                                { value: "last_12_months", label: "Last 12 months" },
                            ]}
                            className="w-75!"
                        />
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center">
                    <img
                        src={noRecordsImage}
                        alt="No sales data"
                        className="h-42 w-64 object-contain"
                    />

                    <p className="mt-2 text-sm text-gray-500">
                        No sales data available for the selected period.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default SalesPage;