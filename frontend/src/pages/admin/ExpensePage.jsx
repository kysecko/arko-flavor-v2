import { PlusIcon, CurrencyDollarIcon, CalendarDaysIcon, CalendarDateRangeIcon, ReceiptPercentIcon, ArrowDownIcon, ArrowRightIcon,  } from "@heroicons/react/24/outline";
import DropdownButton from "../../components/ui/DropdownButton";
import AdminHeader from "../../components/admin/Header";


const Cards = [
    {
        id: 0,
        icon: CurrencyDollarIcon,
        title: "Total Expenses",
        value: 0,
        format: (v) =>
            `₱${v.toLocaleString("en-PH", {
                minimumFractionDigits: 2,
            })}`,
        tag: "All-time expenses",
        tagColor: "text-gray-500",
        ArrowIcon: ArrowRightIcon,
    },
    {
        id: 1,
        icon: CalendarDaysIcon,
        title: "This Month",
        value: 0,
        format: (v) =>
            `₱${v.toLocaleString("en-PH", {
                minimumFractionDigits: 2,
            })}`,
        tag: "From current month",
        tagColor: "text-gray-500",
        ArrowIcon: ArrowRightIcon,
    },
    {
        id: 2,
        icon: CalendarDateRangeIcon,
        title: "This Week",
        value: 0,
        format: (v) =>
            `₱${v.toLocaleString("en-PH", {
                minimumFractionDigits: 2,
            })}`,
        tag: "Weekly spending",
        tagColor: "text-gray-500",
        ArrowIcon: ArrowRightIcon,
    },
    {
        id: 3,
        icon: ReceiptPercentIcon,
        title: "Unpaid Bills",
        value: 3099,
        format: (v) => `₱${v.toLocaleString("en-PH")}`,
        tag: "Your pending payments",
        tagColor: "text-red-500",
        ArrowIcon: ArrowDownIcon,
    },
];

function ExpensePage() {
    return (
        <div>

            {/* header */}
            <AdminHeader title="Expense Tracker"
                description="Keep tabs on cost and manage your business spending efficiently." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
                {Cards.map((card) => {

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

                            <p className={`flex items-center gap-1 text-xs font-medium ${card.tagColor}`}>
                                <card.ArrowIcon className="h-3.5 w-3.5" />
                                {card.tag}
                            </p>
                        </div>
                    );
                })}
            </div>


            {/* filtering */}
            <div className="flex flex-row justify-end mt-5 w-full">
                <DropdownButton
                    icon={PlusIcon}
                    label="Add New Expenses"
                    options={[
                        { value: "business_record", label: "Business Record" },
                        { value: "bill_payment", label: "Bill Payment" },
                    ]}
                    onSelect={(value) => console.log("selected:", value)}
                    className=" w-64!"
                />
            </div>
        </div>
    );
}

export default ExpensePage;