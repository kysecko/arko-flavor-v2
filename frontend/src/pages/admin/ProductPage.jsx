import AdminHeader from "../../components/admin/Header";
import Button from './../../components/ui/Button';
import { ArrowDownTrayIcon, ArrowUpTrayIcon, PlusIcon, MagnifyingGlassIcon, CalendarIcon, FunnelIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import SearchBar from './../../components/ui/SearchBar';

const TableData = [
    {
        productName: "Bangus Silog",
        category: "",
        price: 24,
        usedIn: "With Garlic Rice and Eggs: ₱175 | Ala Carte: ₱145 | Egg Fried Rice: ₱195",
        currentStock: 5,
        status: "Low Stock",
    },
    {
        productName: "Chicken Fillet Silog",
        category: "",
        price: 24,
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        productName: "Chicken Silog",
        category: "",
        price: 24,
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        productName: "Fish Fillet Silog",
        category: "",
        price: 24,
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        productName: "Hotdog Silog",
        category: "",
        price: 24,
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        productName: "Hungarian Silog",
        category: "",
        price: 24,
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        productName: "Longganisa With Egg Fried Rice",
        category: "",
        price: 24,
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        productName: "Shanghai Silog",
        category: "",
        price: 24,
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        productName: "Tapa Silog",
        category: "",
        price: 24,
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        productName: "Tocino Silog",
        category: "",
        price: 24,
        usedIn: "With Garlic Rice and Eggs: ₱135 | Ala Carte: ₱110 | Egg Fried Rice: ₱160",
        currentStock: 0,
        status: "Out of Stock",
    },
];

function handleEdit() {
    console.log("gege");
}

function handleDelete() {
    console.log("hehe");
}

function ProductPage() {
    return (
        <div>

            {/* header */}
            <AdminHeader
                title="Product Catalog"
                description="Organize, update, and manage all your products in one central hub."
            />

            {/* top buttons */}
            <div className="mt-6 mb-4">

                {/* action buttons */}
                <div className="flex items-center justify-end gap-3">
                    <Button
                        text="Import"
                        icon={ArrowDownTrayIcon}
                        iconClassName="w-5 h-5"
                        className="rounded-full! w-24 bg-gray-100 border-0 text-blue-500 font-semibold text-sm px-4 py-3 hover:bg-gray-200"
                    />

                    <Button
                        text="Export"
                        icon={ArrowUpTrayIcon}
                        iconClassName="w-5 h-5"
                        className="rounded-full! w-24 bg-gray-100 border-0 text-blue-500 font-semibold text-sm px-4 py-3 hover:bg-gray-200"
                    />

                    <Button
                        icon={PlusIcon}
                        text="Add Product"
                        className="rounded-full! bg-blue-500 border-0 text-white font-semibold text-sm px-4 py-3 hover:bg-blue-400"
                    />
                </div>

                {/* filtering */}
                <div className="flex flex-wrap items-center gap-3 mt-6">
                    <div className="w-full sm:w-80">
                        <SearchBar icon={MagnifyingGlassIcon} placeholder="Search products" className="rounded-full! border-blue-500" />
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
                        className="rounded-full! bg-white px-3 py-2 border shadow-sm border-gray-200 hover:border-blue-300"
                    />
                </div>

            </div>

            {/* Table card */}
            <div className="w-full bg-white rounded-lg shadow-md overflow-x-auto mt-5">
                <table className="w-full text-sm text-left">
                    <thead className="bg-blue-50 text-gray-600 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-4 py-3">Product Name</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Stock</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {TableData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-gray-800 font-bold">{item.productName}</td>
                                <td className="px-4 py-3 text-gray-600">{item.category}</td>
                                <td className="px-4 py-3 text-gray-600">{item.currentStock}</td>
                                <td className="px-4 py-3 text-gray-600">{item.price}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === "In Stock"
                                            ? "bg-green-100 text-green-700"
                                            : item.status === "Low Stock"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-2">
                                        <Button
                                            icon={PencilSquareIcon}
                                            text="Edit"
                                            onClick={() => handleEdit(item)}
                                            className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded border-0 hover:bg-blue-100"
                                        />
                                        <Button
                                            icon={TrashIcon}
                                            text="Delete"
                                            onClick={() => handleDelete(item)}
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

export default ProductPage;