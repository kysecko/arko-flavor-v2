import ReportTabs from '../../../components/admin/ReportTabs';
import AdminHeader from './../../../components/admin/Header';

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

function ReportRow({ label, amount, bold = false }) {
    return (
        <div className={`flex justify-between py-2 ${bold ? "font-bold text-gray-900" : "text-gray-600"}`}>
            <span>{label}</span>
            <span>₱{amount.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</span>
        </div>
    );
}

function IncomeStatement() {
    const totalRevenue = sum(revenue);
    const totalCOGS = sum(cogs);
    const grossProfit = totalRevenue - totalCOGS;
    const totalOpEx = sum(operatingExpenses);
    const netIncome = grossProfit - totalOpEx;

    return (
        <div>
            <AdminHeader
                title="Income Statement"
                description="See how much your business earned and spent over a period."
            />

            {/* tabs */}
            <ReportTabs />

            <div className="flex justify-end mb-4">
                <span className="text-sm text-gray-500">Period: September 2026</span>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-xs text-gray-500 font-medium mb-1">Total Revenue</p>
                    <p className="text-xl font-bold text-green-600">₱{totalRevenue.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-xs text-gray-500 font-medium mb-1">Gross Profit</p>
                    <p className="text-xl font-bold text-blue-600">₱{grossProfit.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-xs text-gray-500 font-medium mb-1">Net Income</p>
                    <p className={`text-xl font-bold ${netIncome >= 0 ? "text-green-600" : "text-red-500"}`}>
                        ₱{netIncome.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5">

                <h3 className="text-base font-semibold text-gray-800 mb-3">Revenue</h3>
                <div className="divide-y divide-gray-100">
                    {revenue.map((item) => (
                        <ReportRow key={item.label} label={item.label} amount={item.amount} />
                    ))}
                </div>
                <ReportRow label="Total Revenue" amount={totalRevenue} bold />

                <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">Cost of Goods Sold</h3>
                <div className="divide-y divide-gray-100">
                    {cogs.map((item) => (
                        <ReportRow key={item.label} label={item.label} amount={item.amount} />
                    ))}
                </div>
                <ReportRow label="Gross Profit" amount={grossProfit} bold />

                <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">Operating Expenses</h3>
                <div className="divide-y divide-gray-100">
                    {operatingExpenses.map((item) => (
                        <ReportRow key={item.label} label={item.label} amount={item.amount} />
                    ))}
                </div>
                <ReportRow label="Total Operating Expenses" amount={totalOpEx} bold />

                <div className="border-t-2 border-gray-800 mt-4">
                    <ReportRow label="Net Income" amount={netIncome} bold />
                </div>
            </div>
        </div>
    );
}

export default IncomeStatement;