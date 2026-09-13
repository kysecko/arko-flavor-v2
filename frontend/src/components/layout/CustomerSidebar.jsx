import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import LogoutModal from "../../components/ui/LogoutModal";
import Button from "../../components/ui/Button";

import {
    Squares2X2Icon,
    ShoppingCartIcon,
    ClipboardDocumentListIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    Bars3Icon,
    ArrowLeftEndOnRectangleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

import {
    Squares2X2Icon as Squares2X2IconSolid,
    ShoppingCartIcon as ShoppingCartIconSolid,
    ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
    UserCircleIcon as UserCircleIconSolid,
    Cog6ToothIcon as Cog6ToothIconSolid,
} from "@heroicons/react/24/solid";

import logo from '../../../public/arko.jpg';

function CustomerSidebar() {
    const menuItems = [
        { name: "Dashboard", icon: Squares2X2Icon, activeIcon: Squares2X2IconSolid, to: "/customer/dashboard" },
        { name: "Cart", icon: ShoppingCartIcon, activeIcon: ShoppingCartIconSolid, to: "/customer/cart" },
        { name: "My Orders", icon: ClipboardDocumentListIcon, activeIcon: ClipboardDocumentListIconSolid, to: "/customer/orders" },
        { name: "Profile", icon: UserCircleIcon, activeIcon: UserCircleIconSolid, to: "/customer/profile" },
        { name: "Settings", icon: Cog6ToothIcon, activeIcon: Cog6ToothIconSolid, to: "/customer/settings" },
    ];

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const { logout } = useAuth();
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
            <button
                type="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="fixed top-3 left-3 z-50 p-2 rounded-lg bg-white border border-gray-200 shadow-sm sm:hidden"
            >
                <span className="sr-only">Toggle sidebar</span>
                <Bars3Icon className="w-6 h-6 text-gray-700" />
            </button>

            {/* overlay */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-30 bg-black/30 sm:hidden"
                />
            )}

            {/* sidebar */}
            <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-300 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}>
                <div className="flex flex-col h-full">

                    {/* logo */}
                    <div className="flex flex-col items-center justify-between px-5 py-5 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Company Logo" className="w-10 h-10 rounded-full object-cover" />
                            <span className="text-lg font-tapestry font-bold text-gray-700 uppercase">Arko Flavour</span>
                        </div>
                        <button onClick={() => setSidebarOpen(false)} className="sm:hidden">
                            <XMarkIcon className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* navigation */}
                    <nav className="flex-1 px-3 py-4 overflow-y-auto">
                        <ul className="space-y-1">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.to}
                                        onClick={() => setSidebarOpen(false)}
                                        className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100 hover:text-blue-700"}`}
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
                            className="cursor-pointer  flex items-center justify-start gap-3 w-full px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                        >
                            <ArrowLeftEndOnRectangleIcon className="w-5 h-5 shrink-0" />
                            <span className="text-sm font-semibold">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* main content */}
            <main className="min-h-screen w-full bg-white p-4 pt-16 sm:ml-64 sm:w-[calc(100%-16rem)] sm:p-6">
                <Outlet />

                {/* logout moda */}
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

export default CustomerSidebar;
