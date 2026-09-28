import AdminHeader from './../../../components/admin/Header';
import ProfileTabs from './../../../components/admin/ProfileTabs';
import { PencilSquareIcon, LockClosedIcon, ClockIcon, EyeIcon, Cog6ToothIcon, ShieldCheckIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Button from './../../../components/ui/Button';

function handleEdit() {
    console.log("hahaha");
};

function handleLoginActivity() {
    console.log("haah");

};

function handleSessions() {
    console.log("haah");

};

function SecurityPage() {
    return (
        <div>
            {/* header */}
            <AdminHeader title="Account Settings" description="Customize preferences and manage your business configuration. " />
            <ProfileTabs />

            <section className="mt-4 flex min-h-95 w-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
                <div className="mb-2">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        System Security
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage your account security and control how your account is protected.
                    </p>
                </div>

                {/* security settings */}
                <div className="mt-4 space-y-3">

                    {/* 2fa */}
                    <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-gray-200 px-4 py-4 transition hover:border-blue-200 hover:bg-gray-50">
                        <div className="flex min-w-0 items-center gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                                <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                            </div>

                            <div className="min-w-0">
                                <h3 className="font-semibold text-gray-800">
                                    Two-Factor Authentication
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Adds a second layer of security by requiring a unique
                                    verification code when signing in.
                                </p>
                            </div>
                        </div>

                        <Button
                            icon={PencilSquareIcon}
                            text="Edit"
                            onClick={() => handleEdit()}
                            className="shrink-0 border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm hover:border-blue-200 hover:bg-blue-50"
                        />
                    </div>

                    {/* password */}
                    <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-gray-200 px-4 py-4 transition hover:border-blue-200 hover:bg-gray-50">
                        <div className="flex min-w-0 items-center gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                                <LockClosedIcon className="h-5 w-5 text-gray-600" />
                            </div>

                            <div className="min-w-0">
                                <h3 className="font-semibold text-gray-800">
                                    Password Management
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Manage your password and keep your account credentials
                                    secure.
                                </p>
                            </div>
                        </div>

                        <Button
                            icon={PencilSquareIcon}
                            text="View"
                            onClick={() => handleLoginActivity()}
                            className="shrink-0 border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm hover:border-blue-200 hover:bg-blue-50"
                        />
                    </div>

                    {/* logs activity */}
                    <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-gray-200 px-4 py-4 transition hover:border-blue-200 hover:bg-gray-50">
                        <div className="flex min-w-0 items-center gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                                <ClockIcon className="h-5 w-5 text-green-600" />
                            </div>

                            <div className="min-w-0">
                                <h3 className="font-semibold text-gray-800">
                                    Login Activity
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Review recent login attempts and account access activity.
                                </p>
                            </div>
                        </div>

                        <Button
                            icon={EyeIcon}
                            text="Edit"
                            onClick={() => handleEdit()}
                            className="shrink-0 border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm hover:border-blue-200 hover:bg-blue-50"
                        />
                    </div>

                    {/* active session */}
                    <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-gray-200 px-4 py-4 transition hover:border-blue-200 hover:bg-gray-50">
                        <div className="flex min-w-0 items-center gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50">
                                <ComputerDesktopIcon className="h-5 w-5 text-purple-600" />
                            </div>

                            <div className="min-w-0">
                                <h3 className="font-semibold text-gray-800">
                                    Active Sessions
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    View devices currently signed in to your account and
                                    manage active sessions.
                                </p>
                            </div>
                        </div>

                        <Button
                            icon={Cog6ToothIcon}
                            text="Manage"
                            onClick={() => handleSessions()}
                            className="shrink-0 border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm hover:border-blue-200 hover:bg-blue-50"
                        />
                    </div>

                </div>
            </section>
        </div>
    );
}

export default SecurityPage;