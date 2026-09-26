import ReportTabs from '../../../components/admin/ReportTabs';
import AdminHeader from './../../../components/admin/Header';

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

function sum(items) {
    return items.reduce((acc, item) => acc + item.amount, 0);
}

function ReportRow({ label, amount, bold = false }) {
    const isNegative = amount < 0;
    return (
        <div className={`flex justify-between py-2 ${bold ? "font-bold text-gray-900" : "text-gray-600"}`}>
            <span>{label}</span>
            <span className={isNegative ? "text-red-500" : ""}>
                {isNegative ? "-" : ""}₱{Math.abs(amount).toLocaleString("en-PH", { minimumFractionDigits: 2 })}
            </span>
        </div>
    );
}

function CashFlow() {
    const operatingTotal = sum(operating);
    const investingTotal = sum(investing);
    const financingTotal = sum(financing);
    const netCashFlow = operatingTotal + investingTotal + financingTotal;

    return (
        <div>
            <AdminHeader
                title="Cash Flow Statement"
                description="Track how cash moves in and out of your business."
            />

            {/* tabs */}
            <ReportTabs/>

            <div className="flex justify-end mb-4">
                <p className="text-sm text-gray-500 font-bold italic">Period: <span className='font-semibold italic'>September 2026</span></p>
            </div>

            {/* summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-xs text-gray-500 font-medium mb-1">Operating Activities</p>
                    <p className="text-xl font-bold text-gray-900">₱{operatingTotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-xs text-gray-500 font-medium mb-1">Investing Activities</p>
                    <p className="text-xl font-bold text-gray-900">₱{investingTotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-xs text-gray-500 font-medium mb-1">Financing Activities</p>
                    <p className="text-xl font-bold text-gray-900">₱{financingTotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5">

                <h3 className="text-base font-semibold text-gray-800 mb-3">Operating Activities</h3>
                <div className="divide-y divide-gray-100">
                    {operating.map((item) => (
                        <ReportRow key={item.label} label={item.label} amount={item.amount} />
                    ))}
                </div>
                <ReportRow label="Net Cash from Operating" amount={operatingTotal} bold />

                <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">Investing Activities</h3>
                <div className="divide-y divide-gray-100">
                    {investing.map((item) => (
                        <ReportRow key={item.label} label={item.label} amount={item.amount} />
                    ))}
                </div>
                <ReportRow label="Net Cash from Investing" amount={investingTotal} bold />

                <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">Financing Activities</h3>
                <div className="divide-y divide-gray-100">
                    {financing.map((item) => (
                        <ReportRow key={item.label} label={item.label} amount={item.amount} />
                    ))}
                </div>
                <ReportRow label="Net Cash from Financing" amount={financingTotal} bold />

                <div className="border-t-2 border-gray-800 mt-4">
                    <ReportRow label="Net Increase in Cash" amount={netCashFlow} bold />
                </div>
            </div>
        </div>
    );
}

export default CashFlow;