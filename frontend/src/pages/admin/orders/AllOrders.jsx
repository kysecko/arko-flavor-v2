import AdminHeader from "../../../components/admin/Header";
import {
    MagnifyingGlassIcon, CalendarIcon, FunnelIcon, PencilSquareIcon, TrashIcon,
} from "@heroicons/react/24/outline";

import SearchBar from "../../../components/ui/SearchBar";
import Button from "../../../components/ui/Button";
import OrderTabs from "../../../components/admin/OrderTabs";

const TableData = [
    { orderId: "ORD-0012", customer: "Juan Dela Cruz", date: "2026-09-20", amount: 1250, status: "Completed", paymentStatus: "Paid" },
    { orderId: "ORD-0013", customer: "Maria Santos", date: "2026-09-21", amount: 890, status: "In Progress", paymentStatus: "Pending" },
    { orderId: "ORD-0014", customer: "Pedro Reyes", date: "2026-09-22", amount: 430, status: "Cancelled", paymentStatus: "Refunded" },
    { orderId: "ORD-0015", customer: "Ana Garcia", date: "2026-09-23", amount: 1750, status: "Completed", paymentStatus: "Paid" },
    { orderId: "ORD-0016", customer: "Carlos Mendoza", date: "2026-09-23", amount: 620, status: "In Progress", paymentStatus: "Pending" },
    { orderId: "ORD-0017", customer: "Sofia Ramirez", date: "2026-09-24", amount: 980, status: "Cancelled", paymentStatus: "Refunded" },
];


export default function AllOrders() {

    return (
        <div className="font-manrope">
            {/* header */}
            <AdminHeader
                title="Order Management"
                description="View, process, and track every order from start to delivery."
            />

            <OrderTabs />

            <div className="mt-6 w-full">

                {/* toolbar */}
                <div className="flex flex-wrap justify-end items-center gap-3 mb-4">
                    <div className="w-full sm:w-80">
                        <SearchBar icon={MagnifyingGlassIcon} placeholder="Search orders" className="rounded-full! border-blue-500" />
                    </div>

                    <div className="flex flex-row items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-gray-200 w-fit hover:border-blue-300">
                        <CalendarIcon className="w-5 h-5 text-gray-500 shrink-0" />
                        <select
                            name="dateFilter"
                            className="text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0 cursor-pointer"
                        >
                            <option value="All">By date</option>
                            <option value="Today">Today</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="This Week">This Week</option>
                            <option value="This Month">This Month</option>
                        </select>
                    </div>

                    <Button
                        text="Set Filter"
                        icon={FunnelIcon}
                        className="rounded-full! px-3 py-2 shadow-sm border border-gray-200 hover:border-blue-300"
                    />
                </div>

                {/* table card */}
                <div className="w-full bg-white rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-blue-50 text-gray-600 uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-4 py-3">Order ID</th>
                                <th className="px-4 py-3">Customer</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Order Status</th>
                                <th className="px-4 py-3">Payment Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {TableData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-800 font-bold">{item.orderId}</td>
                                    <td className="px-4 py-3 text-gray-600">{item.customer}</td>
                                    <td className="px-4 py-3 text-gray-600">{item.date}</td>
                                    <td className="px-4 py-3 text-gray-600">₱{item.amount.toLocaleString()}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : item.status === "In Progress"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${item.paymentStatus === "Paid"
                                                ? "bg-green-100 text-green-700"
                                                : item.paymentStatus === "Pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {item.paymentStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex gap-2">
                                            <Button
                                                icon={PencilSquareIcon}
                                                text="Edit"
                                                onClick={() => console.log("edit", item)}
                                                className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded border-0 hover:bg-blue-100"
                                            />
                                            <Button
                                                icon={TrashIcon}
                                                text="Delete"
                                                onClick={() => console.log("delete", item)}
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
        </div>
    );
}