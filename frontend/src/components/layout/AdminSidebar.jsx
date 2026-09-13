import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import LogoutModal from '../../components/ui/LogoutModal';
import Button from "../../components/ui/Button";

import {
    Squares2X2Icon,
    ArchiveBoxIcon,
    CubeIcon,
    ClipboardDocumentListIcon,
    CreditCardIcon,
    ShoppingCartIcon,
    BanknotesIcon,
    ChartBarIcon,
    DocumentChartBarIcon,
    Cog6ToothIcon,
    Bars3Icon,
    XMarkIcon,
    ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

import {
    Squares2X2Icon as Squares2X2IconSolid,
    ArchiveBoxIcon as ArchiveBoxIconSolid,
    CubeIcon as CubeIconSolid,
    ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
    CreditCardIcon as CreditCardIconSolid,
    ShoppingCartIcon as ShoppingCartIconSolid,
    BanknotesIcon as BanknotesIconSolid,
    ChartBarIcon as ChartBarIconSolid,
    DocumentChartBarIcon as DocumentChartBarIconSolid,
    Cog6ToothIcon as Cog6ToothIconSolid,
} from "@heroicons/react/24/solid";

function AdminSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const { logout } = useAuth();

    const menuItems = [
        { name: "Dashboard", icon: Squares2X2Icon, activeIcon: Squares2X2IconSolid, to: "/admin/dashboard" },
        { name: "Inventory", icon: ArchiveBoxIcon, activeIcon: ArchiveBoxIconSolid, to: "/admin/inventory" },
        { name: "Products", icon: CubeIcon, activeIcon: CubeIconSolid, to: "/admin/products" },
        { name: "Orders", icon: ClipboardDocumentListIcon, activeIcon: ClipboardDocumentListIconSolid, to: "/admin/orders" },
        { name: "Payments", icon: CreditCardIcon, activeIcon: CreditCardIconSolid, to: "/admin/payment" },
        { name: "Sales", icon: ShoppingCartIcon, activeIcon: ShoppingCartIconSolid, to: "/admin/sales" },
        { name: "Expenses", icon: BanknotesIcon, activeIcon: BanknotesIconSolid, to: "/admin/expenses" },
        { name: "Reports", icon: ChartBarIcon, activeIcon: ChartBarIconSolid, to: "/admin/reports" },
        { name: "Summary", icon: DocumentChartBarIcon, activeIcon: DocumentChartBarIconSolid, to: "/admin/summary" },
        { name: "Settings", icon: Cog6ToothIcon, activeIcon: Cog6ToothIconSolid, to: "/admin/settings" },
    ];

    const [loggingOut, setLoggingOut] = useState(false);

    const handleLogout = () => {
        setLoggingOut(true);
        logout();
        setTimeout(() => {
            window.location.replace("/auth/login");
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-white">

            {/* mobile menu */}
            {!sidebarOpen && (
                <button
                    type="button"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="cursor-pointer fixed top-3 left-3 z-50 p-2 rounded-lg bg-white border border-gray-200 shadow-sm sm:hidden"
                >
                    <span className="sr-only">open sidebar</span>
                    <Bars3Icon className="w-6 h-6 text-gray-700" />
                </button>
            )}

            {/* mobile overlay */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-30 bg-black/30 sm:hidden"
                />
            )}

            {/* sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-300 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
            >
                <div className="flex flex-col h-full">

                    {/* logo */}
                    <div className="px-5 py-5 border-b border-gray-200">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                                <img src="/arko.jpg" alt="Company Logo" className="w-10 h-10 rounded-full object-cover" />
                                <span className="text-sm sm:text-lg font-tapestry font-bold uppercase text-gray-700">Arko Flavour</span>
                            </div>
                            <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-lg bg-white border border-gray-200 shadow-sm cursor-pointer sm:hidden">
                                <XMarkIcon className="w-6 h-6 text-gray-700" />
                            </button>
                        </div>
                        <span className="block text-[10px] text-center font-bold text-gray-500 uppercase">Administrator</span>
                    </div>

                    {/* navigation */}
                    <nav className="flex-1 px-3 py-4 overflow-y-auto">
                        <ul className="space-y-1">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.to}
                                        onClick={() => setSidebarOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100 hover:text-blue-700"}`
                                        }
                                    >
                                        {({ isActive }) => {
                                            const Icon = isActive ? item.activeIcon : item.icon;
                                            return (
                                                <>
                                                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-blue-700" : "text-gray-500 group-hover:text-blue-600"}`} />
                                                    <span className="text-sm font-semibold">{item.name}</span>
                                                </>
                                            );
                                        }}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* logout btn */}
                    <div className="p-3 border-t border-gray-200">
                        <button
                            onClick={() => setIsLogoutOpen(true)}
                            className=" cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group text-red-500 hover:bg-red-50 hover:text-red-600 w-full"
                        >
                            <ArrowLeftEndOnRectangleIcon className="w-5 h-5 shrink-0 text-red-400 group-hover:text-red-500" />
                            <span className="text-sm font-semibold">Logout</span>
                        </button>
                    </div>

                </div>
            </aside>

            {/* main content  */}
            <main className="min-h-screen w-full bg-white p-4 pt-16 sm:ml-64 sm:w-[calc(100%-16rem)] sm:p-6">
                <Outlet />

                {/* logout modal */}
                <LogoutModal isOpen={isLogoutOpen} onClose={() => setIsLogoutOpen(false)}>
                    <h3 className="text-lg font-semibold mb-2">Logging out</h3>
                    <p className="text-sm text-gray-500 mb-8">Are you sure you want to logout?</p>
                    <div className="flex justify-end gap-1">
                        <Button
                            text="Cancel"
                            onClick={() => setIsLogoutOpen(false)}
                            className="inline-flex justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-600/80"
                        />
                        <Button
                            text={loggingOut ? "Logging out..." : "Logout"}
                            onClick={handleLogout}
                            disabled={loggingOut}
                            className="inline-flex justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3"
                        />
                    </div>
                </LogoutModal>

            </main>

        </div>
    );
}

export default AdminSidebar;
