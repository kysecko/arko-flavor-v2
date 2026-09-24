import AdminHeader from './../../components/admin/Header';
import SearchBar from './../../components/ui/SearchBar';

import { MagnifyingGlassIcon, ArrowsUpDownIcon, FunnelIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import Button from './../../components/ui/Button';

const RawData = [
    {
        customer: "Juan Dela Cruz",
        productName: "Bangus Silog",
        date: "2026-09-20",
        amount: 1250,
        quantity: 2,
        paymentMethod: "GCash",
    },
    {
        customer: "Maria Santos",
        productName: "Chicken Fillet Silog",
        date: "2026-09-21",
        amount: 890,
        quantity: 1,
        paymentMethod: "Cash",
    },
    {
        customer: "Pedro Reyes",
        productName: "Longganisa With Egg Fried Rice",
        date: "2026-09-22",
        amount: 430,
        quantity: 3,
        paymentMethod: "Credit Card",
    },
    {
        customer: "Ana Garcia",
        productName: "Shanghai Silog",
        date: "2026-09-23",
        amount: 1750,
        quantity: 5,
        paymentMethod: "GCash",
    },
    {
        customer: "Carlos Mendoza",
        productName: "Tocino Silog",
        date: "2026-09-23",
        amount: 620,
        quantity: 2,
        paymentMethod: "Maya",
    },
    {
        customer: "Sofia Ramirez",
        productName: "Chicken Silog",
        date: "2026-09-24",
        amount: 980,
        quantity: 1,
        paymentMethod: "Credit Card",
    },
    {
        customer: "Manuel Samson",
        productName: "Tapa Silog",
        date: "2026-05-13",
        amount: 450,
        quantity: 9,
        paymentMethod: "Maya"
    }
];

function handleEdit() {
    console.log("gege");
};

function handleDelete() {
    console.log("hehe")
}

function PaymentPage() {
    return (
        <div>

            {/* header */}
            <AdminHeader
                title='Payment Overview' description='Monitor transactions, track pending payments, and manage billing with ease.'

            />

            {/* MAIN CONTENT */}

            {/* title + search + filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                    Recent Transaction
                </h2>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="w-full sm:w-72">
                        <SearchBar
                            icon={MagnifyingGlassIcon}
                            placeholder="Search"
                            className="rounded-full! border-gray-200"
                        />
                    </div>

                    <Button
                        text="Filter"
                        icon={FunnelIcon}
                        className="rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm font-medium hover:border-blue-300"
                    />

                    <Button
                        text="Sort By"
                        icon={ArrowsUpDownIcon}
                        className="rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm font-medium hover:border-blue-300"
                    />
                </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-blue-50 text-gray-600 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-4 py-3">Customer name</th>
                            <th className="px-4 py-3">Product Name</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Quantity</th>
                            <th className="px-4 py-3">Payment Method</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {RawData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-gray-800 font-bold">{item.customer}</td>
                                <td className="px-4 py-3 text-gray-600">{item.productName}</td>
                                <td className="px-4 py-3 text-gray-600">{item.date}</td>
                                <td className="px-4 py-3 text-gray-600">₱{item.amount.toLocaleString()}</td>
                                <td className="px-4 py-3 text-gray-600">{item.quantity}</td>
                                <td className="px-4 py-3 text-gray-600 font-semibold">{item.paymentMethod}</td>
                                
                                <td className="px-4 py-3">
                                    <div className="flex gap-2">
                                        <Button
                                            icon={PencilSquareIcon}
                                            text="Edit"
                                            onClick={handleEdit}
                                            className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded border-0 hover:bg-blue-100"
                                        />
                                        <Button
                                            icon={TrashIcon}
                                            text="Delete"
                                            onClick={handleDelete}
                                            className="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 rounded border-0 hover:bg-red-100"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default PaymentPage;