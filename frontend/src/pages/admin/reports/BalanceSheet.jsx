import ReportTabs from '../../../components/admin/ReportTabs';
import AdminHeader from './../../../components/admin/Header';

const assets = [
    { label: "Cash and Cash Equivalents", amount: 75932 },
    { label: "Accounts Receivable", amount: 12500 },
    { label: "Inventory", amount: 34200 },
    { label: "Prepaid Expenses", amount: 3100 },
];

const liabilities = [
    { label: "Accounts Payable", amount: 18400 },
    { label: "Short-Term Loans", amount: 10000 },
    { label: "Accrued Expenses", amount: 2200 },
];

const equity = [
    { label: "Owner's Capital", amount: 80000 },
    { label: "Retained Earnings", amount: 15132 },
];

function sum(items) {
    return items.reduce((acc, item) => acc + item.amount, 0);
}

function ReportRow({ label, amount, bold = false }) {
    return (
        <div className={`flex justify-between py-2 ${bold ? "uppercase font-bold text-gray-900" : "text-gray-600"}`}>
            <span>{label}</span>
            <span>₱{amount.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</span>
        </div>
    );
}

function BalanceSheet() {
    const totalAssets = sum(assets);
    const totalLiabilities = sum(liabilities);
    const totalEquity = sum(equity);
    const totalLiabilitiesAndEquity = totalLiabilities + totalEquity;

    return (
        <div>
            <AdminHeader
                title="Balance Sheet"
                description="A snapshot of what your business owns, owes, and is worth."
            />

            {/* tabs */}
            <ReportTabs />

            {/* date selector placeholder */}
            <div className="flex justify-end mb-4">
                <span className="text-sm text-gray-500 font-bold italic">As of September 26, 2026</span>
            </div>

            <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-5  mb-4">
                <div className="grid grid-cols-1 gap-6">

                    {/* assets */}
                    <div>
                        <h3 className="text-base font-bold text-gray-800 mb-3">Assets</h3>
                        <div className="divide-y divide-gray-100">
                            {assets.map((item) => (
                                <ReportRow key={item.label} label={item.label} amount={item.amount} />
                            ))}
                        </div>
                        <div className="border-t-2 border-gray-800 mt-2">
                            <ReportRow label="Total Assets" amount={totalAssets} bold />
                        </div>
                    </div>

                    {/* liabilities + equity */}
                    <div>
                        <h3 className="text-base font-bold text-gray-800 mb-3">Liabilities</h3>
                        <div className="divide-y divide-gray-100">
                            {liabilities.map((item) => (
                                <ReportRow key={item.label} label={item.label} amount={item.amount} />
                            ))}
                        </div>
                        <ReportRow label="Total Liabilities" amount={totalLiabilities} bold />

                        <h3 className="text-base font-bold text-gray-800 mb-3 mt-6">Equity</h3>
                        <div className="divide-y divide-gray-100">
                            {equity.map((item) => (
                                <ReportRow key={item.label} label={item.label} amount={item.amount} />
                            ))}
                        </div>
                        <ReportRow label="Total Equity" amount={totalEquity} bold />

                        <div className="border-t-2 border-gray-800 mt-2 mb-4">
                            <ReportRow label="Total Liabilities + Equity" amount={totalLiabilitiesAndEquity} bold />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BalanceSheet;