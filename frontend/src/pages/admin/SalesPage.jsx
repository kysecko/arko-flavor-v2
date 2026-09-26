import AdminHeader from "../../components/admin/Header";
import { CurrencyDollarIcon, CheckCircleIcon, BanknotesIcon, ArrowTrendingUpIcon, ArrowUpIcon, ArrowDownIcon, CalendarIcon } from "@heroicons/react/24/outline";
import DropdownInput from "../../components/ui/DropdownInput";
import { useState } from "react";

import noRecordsImage from "../../assets/images/No records.png";

const Cards = [
    {
        id: 0,
        icon: CurrencyDollarIcon,
        title: "Total Sales",
        number: 12215.00,
        tag: "Revenue from others",
        threshold: 10000,
    },
    {
        id: 1,
        icon: CheckCircleIcon,
        title: "Total Expenses",
        number: 4221.00,
        tag: "Total cash outflow",
        threshold: 5000,
        invert: true,
    },
    {
        id: 2,
        icon: BanknotesIcon,
        title: "Cash Balance",
        number: 75932.00,
        tag: "Current available balance",
        threshold: 20000,
    },
    {
        id: 3,
        icon: ArrowTrendingUpIcon,
        title: "Net Profit",
        number: 15.00,
        tag: "Revenue minus expenses",
        threshold: 0,
    },
];

function getAccent(card) {
    const isHigh = card.number >= card.threshold;
    return {
        icon: "text-blue-600",
        iconBg: "bg-blue-50",
        tag: isHigh ? "text-green-600" : "text-red-500",
        ArrowIcon: isHigh ? ArrowUpIcon : ArrowDownIcon,
    };
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
                        <div key={card.id} className="w-full bg-white p-4 sm:p-5 rounded-lg shadow-md">
                            <div className="flex items-center gap-3 mb-3">

                                <div className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ${style.iconBg}`}>
                                    <card.icon className={`w-5 h-5 ${style.icon}`} />
                                </div>

                                <h3 className="text-base font-semibold text-gray-700">
                                    {card.title}
                                </h3>

                            </div>

                            <p className="text-black text-xl sm:text-3xl font-bold mb-2">
                                ₱{card.number.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
                            </p>

                            <p className={`flex items-center gap-1 text-[12px] font-medium ${style.tag}`}>
                                <style.ArrowIcon className="w-3.5 h-3.5" />
                                {card.tag}
                            </p>

                        </div>
                    );
                })}
            </div>


            {/* table performance container */}
            <div className="w-full flex-col h-95 mt-4 p-6 border shadow-sm border-gray-100 rounded-xl">

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

                <div className="flex flex-col items-center justify-center flex-1">
                    <img
                        src={noRecordsImage}
                        alt="No sales data"
                        className="mt-3 h-42 w-64 object-cover"
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