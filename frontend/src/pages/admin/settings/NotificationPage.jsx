import { useState } from "react";
import AdminHeader from "../../../components/admin/Header";
import ProfileTabs from "../../../components/admin/ProfileTabs";
import {
    EnvelopeIcon,
    ShoppingCartIcon,
    BanknotesIcon,
    MegaphoneIcon,
    ShieldExclamationIcon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const initialNotifications = [
    {
        id: "email",
        icon: EnvelopeIcon,
        color: "bg-blue-50",
        iconColor: "text-blue-600",
        title: "Email Notifications",
        description: "Receive account and activity updates in your inbox.",
        enabled: true,
    },
    {
        id: "orders",
        icon: ShoppingCartIcon,
        color: "bg-green-50",
        iconColor: "text-green-600",
        title: "Order Updates",
        description: "Get notified when an order is placed, shipped, or completed.",
        enabled: true,
    },
    {
        id: "payments",
        icon: BanknotesIcon,
        color: "bg-amber-50",
        iconColor: "text-amber-600",
        title: "Payment Alerts",
        description: "Be informed about payments, refunds, and failed transactions.",
        enabled: true,
    },
    {
        id: "promo",
        icon: MegaphoneIcon,
        color: "bg-purple-50",
        iconColor: "text-purple-600",
        title: "Promotions & Updates",
        description: "News, product updates, and promotional offers.",
        enabled: false,
    },
    {
        id: "security",
        icon: ShieldExclamationIcon,
        color: "bg-red-50",
        iconColor: "text-red-600",
        title: "Security Alerts",
        description: "Warn me about unusual sign-ins and account security events.",
        enabled: true,
    },
    {
        id: "push",
        icon: DevicePhoneMobileIcon,
        color: "bg-gray-100",
        iconColor: "text-gray-600",
        title: "Push Notifications",
        description: "Receive real-time alerts on your mobile device.",
        enabled: false,
    },
];

function NotificationPage() {
    const [notifications, setNotifications] = useState(initialNotifications);

    const toggle = (id) => {
        setNotifications((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, enabled: !item.enabled } : item
            )
        );
    };

    return (
        <div>
            <AdminHeader
                title="Account Settings"
                description="Customize preferences and manage your business configuration. "
            />
            <ProfileTabs />

            <section className="mt-4 flex min-h-95 w-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
                <div className="mb-2">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        Notification Preferences
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Choose which updates you want to receive and how they reach you.
                    </p>
                </div>

                <div className="mt-4 space-y-3">
                    {notifications.map((item) => (
                        <div
                            key={item.id}
                            className="flex w-full items-center justify-between gap-4 rounded-2xl border border-gray-200 px-4 py-4 transition hover:border-blue-200 hover:bg-gray-50"
                        >
                            <div className="flex min-w-0 items-center gap-4">
                                <div
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.color}`}
                                >
                                    <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                                </div>

                                <div className="min-w-0">
                                    <h3 className="font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                role="switch"
                                aria-checked={item.enabled}
                                aria-label={`Toggle ${item.title}`}
                                onClick={() => toggle(item.id)}
                                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 ${item.enabled ? "bg-blue-600" : "bg-gray-300"
                                    }`}
                            >
                                <span
                                    className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${item.enabled ? "translate-x-5" : "translate-x-0"
                                        }`}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default NotificationPage;
