import { useAuth } from "../../context/AuthContext";

import {
    BellAlertIcon
} from "@heroicons/react/24/outline";

function AdminHeader({
    title = "Dashboard",
    description = "",
    username = "Admin",
    notificationCount = 0,
}) {

    const { user } = useAuth();

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg sm:text-2xl font-bold">
                        {title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        {description}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        className="relative flex items-center justify-center
                                   w-10 h-10 rounded-full
                                   bg-gray-100 text-gray-600
                                   hover:bg-gray-200 hover:text-blue-600
                                   transition-all duration-200 cursor-pointer"
                    >
                        <BellAlertIcon className="w-5 h-5" />

                        {notificationCount > 0 && (
                            <span
                                className="absolute -top-1 -right-1
                                           flex items-center justify-center
                                           w-4 h-4 rounded-full
                                           bg-red-500 text-white
                                           text-[10px] font-bold"
                            >
                                {notificationCount > 9
                                    ? "9+"
                                    : notificationCount}
                            </span>
                        )}
                    </button>

                    <div className="flex items-center gap-2">
                        <div
                            className="flex items-center justify-center
                                       w-9 h-9 rounded-full
                                       bg-blue-600 text-white
                                       font-semibold text-sm"
                        >
                            {username.charAt(0).toUpperCase()}
                        </div>

                        <div className="hidden sm:block">
                            <p className="text-xs text-gray-400">
                                Signed in as
                            </p>

                            <p className="font-semibold text-gray-800">
                                {user?.name || "Admin"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-4 border-gray-200" />
        </div>
    );
}

export default AdminHeader;
