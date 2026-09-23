import { useAuth } from "../../context/AuthContext";

import { BellAlertIcon } from "@heroicons/react/24/outline";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex align-center justify-between">
      <div>
        <h2 className="text-lg sm:text-2xl font-bold">Customer Dashboard 👋</h2>
        <p>
          Welcome to the customer dashboard. Here you can view your account and
          manage your orders.
        </p>
      </div>
      <div className="flex items-center gap-4">
        {" "}
        <button className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-blue-600 transition-all duration-200 cursor-pointer">
          {" "}
          <BellAlertIcon className="w-5 h-5" />{" "}
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold">
            {" "}
            3{" "}
          </span>{" "}
        </button>{" "}
        <div className="flex items-center gap-2">
          {" "}
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-semibold text-sm">
            {" "}
            {user?.username?.charAt(0).toUpperCase() || "U"}{" "}
          </div>{" "}
          <div className="hidden sm:block">
            {" "}
            <h2 className="font-semibold text-gray-800">
              {" "}
              {user?.username || "User"}{" "}
            </h2>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Dashboard;
