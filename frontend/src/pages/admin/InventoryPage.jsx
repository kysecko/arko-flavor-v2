import {
    ArchiveBoxIcon,
    ExclamationTriangleIcon,
    ArchiveBoxArrowDownIcon,
    CheckCircleIcon,
    MagnifyingGlassIcon,
    ArrowDownTrayIcon,
    ArrowUpTrayIcon,
    PencilSquareIcon,
    TrashIcon
} from "@heroicons/react/24/outline";

import AdminHeader from "../../components/admin/Header";
import SearchBar from "../../components/ui/SearchBar";
import Button from "../../components/ui/Button";

const Cards = [
    {
        id: 0,
        icon: ArchiveBoxIcon,
        title: "Total Items",
        number: 12215,
        iconColor: "text-blue-500",
        bgColor: "bg-blue-50",
    },
    {
        id: 1,
        icon: ExclamationTriangleIcon,
        title: "Out of Stock",
        number: 421,
        iconColor: "text-red-500",
        bgColor: "bg-red-50",
    },
    {
        id: 2,
        icon: ArchiveBoxArrowDownIcon,
        title: "Low Stock",
        number: 932,
        iconColor: "text-amber-500",
        bgColor: "bg-amber-50",
    },
    {
        id: 3,
        icon: CheckCircleIcon,
        title: "In Stock",
        number: 10862,
        iconColor: "text-emerald-500",
        bgColor: "bg-emerald-50",
    },
];

const TableData = [
    {
        rawMaterial: "Bangus Silog",
        unit: "",
        usedIn: "With Garlic Rice and Eggs: ₱175 | Ala Carte: ₱145 | Egg Fried Rice: ₱195",
        currentStock: 5,
        status: "Low Stock",
    },
    {
        rawMaterial: "Chicken Fillet Silog",
        unit: "",
        usedIn: "With Garlic Rice and Eggs: ₱135 | Ala Carte: ₱110 | Egg Fried Rice: ₱160",
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        rawMaterial: "Chicken Silog",
        unit: "",
        usedIn: "With Garlic Rice and Eggs: ₱135 | Ala Carte: ₱110 | Egg Fried Rice: ₱160",
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        rawMaterial: "Fish Fillet Silog",
        unit: "",
        usedIn: "With Garlic Rice and Eggs: ₱140 | Ala Carte: ₱115 | Egg Fried Rice: ₱165",
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        rawMaterial: "Hotdog Silog",
        unit: "",
        usedIn: "With Garlic Rice and Eggs: ₱85 | Ala Carte: ₱55 | Egg Fried Rice: ₱110",
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        rawMaterial: "Hungarian Silog",
        unit: "",
        usedIn: "With Garlic Rice and Eggs: ₱105 | Ala Carte: ₱80 | Egg Fried Rice: ₱130",
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        rawMaterial: "Longganisa With Egg Fried Rice",
        unit: "Garlic Flavor",
        usedIn: "Original: ₱170 | Ala Carte: ₱115 | With Garlic Rice and Eggs: ₱145",
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        rawMaterial: "Shanghai Silog",
        unit: "",
        usedIn: "With Garlic Rice and Eggs: ₱105 | Ala Carte: ₱80 | Egg Fried Rice: ₱110",
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        rawMaterial: "Tapa Silog",
        unit: "",
        usedIn: "With Garlic Rice and Eggs: ₱145 | Ala Carte: ₱115 | Egg Fried Rice: ₱170",
        currentStock: 0,
        status: "Out of Stock",
    },
    {
        rawMaterial: "Tocino Silog",
        unit: "",
        usedIn: "With Garlic Rice and Eggs: ₱135 | Ala Carte: ₱110 | Egg Fried Rice: ₱160",
        currentStock: 0,
        status: "Out of Stock",
    },
];

// const goToProduct (){
//     navigation.navigate('P')
// }

function handleEdit() {
    console.log("gege");
};

function handleDelete() {
    console.log("hehe")
}
function InventoryPage() {
    return (
        <div className="gap-3">

            {/* header */}
            <AdminHeader title="Inventory" description="Track stock levels, manage products, and stay ahead of restocking needs." />

            {/* MAIN CONTENT */}
            {/* cards */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">

                {Cards.map((card) => (
                    <div className="w-full bg-white border border-blue-100 rounded-xl p-4 sm:p-5 shadow-sm" key={card.id}>

                        <div className="flex items-center gap-3 mb-3">

                            <div className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ${card.bgColor}`}>
                                <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                            </div>

                            <h3 className="text-base font-semibold text-black-700">
                                {card.title}
                            </h3>

                        </div>

                        <p className="text-black text-xl sm:text-3xl font-bold mb-2">
                            ₱{card.number.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
                        </p>

                        <p className="text-[12px] text-gray-500 font-medium">
                            {card.tag}
                        </p>

                    </div>
                ))}
            </div>

            {/* search and buttons */}
            <div className="flex justify-end w-full items-center gap-3 mt-6">
                <div className="w-80">
                    <SearchBar icon={MagnifyingGlassIcon} placeholder="Search anything" className="rounded-full! px-4 py-3 border-blue-500" />
                </div>
                <Button
                    text="Import"
                    icon={ArrowDownTrayIcon}
                    iconClassName="w-5 h-5"
                    className="rounded-full! w-24 bg-gray-100 border-0 text-blue-500 font-semibold px-4 py-3 text-sm p-5 hover:bg-gray-200"
                />

                <Button
                    text="Export"
                    icon={ArrowUpTrayIcon}
                    iconClassName="w-5 h-5"
                    className="rounded-full! w-24 bg-gray-100 border-0 text-blue-500 font-semibold px-4 py-3 text-sm p-5 hover:bg-gray-200"
                />

                <Button
                    // onClick={goToProduct}
                    text={"View Products"}
                    className="rounded-full! bg-blue-500 border-0 text-white font-semibold px-4 py-3 text-sm p-5"
                />
            </div>

            {/* table */}
            <div className="mt-6 w-full bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-blue-50 text-gray-600 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-4 py-3">Raw Material</th>
                            <th className="px-4 py-3">Unit</th>
                            <th className="px-4 py-3">Used In</th>
                            <th className="px-4 py-3">Current Stock</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {TableData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-gray-800 font-bold">
                                    {item.rawMaterial}
                                </td>

                                <td className="px-4 py-3 text-gray-600">
                                    {item.unit}
                                </td>

                                <td className="px-4 py-3 text-gray-600">
                                    {item.usedIn}
                                </td>

                                <td className="px-4 py-3 text-gray-600">
                                    {item.currentStock}
                                </td>

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
                                            text={"Edit"}
                                            onClick={() => handleEdit(item)}
                                            className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded border-0 hover:bg-blue-100"
                                        />

                                        <Button
                                            icon={TrashIcon}
                                            text={"Delete"}
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

export default InventoryPage;