import {
    ArchiveBoxIcon,
    ExclamationTriangleIcon,
    ArchiveBoxArrowDownIcon,
    CheckCircleIcon,
    MagnifyingGlassIcon,
    ArrowDownTrayIcon,
    ArrowUpTrayIcon
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

// const goToProduct (){
//     navigation.navigate('P')
// }
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
                    <div className="w-full bg-white p-4 sm:p-5 rounded-lg shadow-md" key={card.id}>

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
                <div className="w-120">
                    <SearchBar icon={MagnifyingGlassIcon} placeholder="Search anything" className="border-blue-500" />
                </div>
                <Button
                    text="Import"
                    icon={ArrowDownTrayIcon}
                    iconClassName="w-5 h-5"
                    className="w-24 bg-gray-100 border-0 text-blue-500 font-semibold text-sm p-5 hover:bg-gray-200"
                />

                <Button
                    text="Export"
                    icon={ArrowUpTrayIcon}
                    iconClassName="w-5 h-5"
                    className="w-24 bg-gray-100 border-0 text-blue-500 font-semibold text-sm p-5 hover:bg-gray-200"
                />

                <Button
                    // onClick={goToProduct}
                    text={"View Products"}
                    className="bg-blue-500 border-0 text-white font-semibold text-sm p-5 "
                />
            </div>




        </div>
    );
}

export default InventoryPage;