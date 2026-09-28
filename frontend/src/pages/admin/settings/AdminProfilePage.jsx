import AdminHeader from "../../../components/admin/Header";
import ProfileTabs from '../../../components/admin/ProfileTabs';

import profile from "../../../assets/images/profile.jpg";
import Button from "../../../components/ui/Button";
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import TextInput from './../../../components/ui/TextInput';

function handleEdit() {
    console.log("jhaha");
};

function AdminProfilePage() {
    return (
        <div>

            {/* header */}
            <AdminHeader title="Account Settings" description="Customize preferences and manage your business configuration. " />
            <ProfileTabs />

            <section
                className="mt-4 flex min-h-95 w-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6"
            >
                <div className="text-start">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        My Profile
                    </h2>

                </div>
                {/* image */}
                <div className="flex justify-between items-center gap-4 my-5 w-full border rounded-2xl border-gray-200 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <img src={profile} className="h-22 w-22 object-cover rounded-full shrink-0" />
                        <div>
                            <h2 className="font-semibold text-gray-800">Juan Dela Cruz</h2>
                            <p className="text-sm text-gray-500">admin@gmail.com</p>
                            <p className="text-sm text-gray-500">321 Main Street</p>
                        </div>
                    </div>
                    <Button
                        icon={PencilSquareIcon}
                        text={"Edit"}
                        onClick={() => handleEdit()}
                        className="px-3 py-1 text-xs font-medium shadow-sm text-gray-600 bg-white border rounded border-gray-200 hover:border-blue-100 hover:bg-blue-100"
                    />

                </div>

                {/* profile info */}
                <div className="w-full rounded-2xl border border-gray-200 px-4 py-4">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-base font-bold text-gray-900">
                            Personal Information
                        </h2>

                        <Button
                            icon={PencilSquareIcon}
                            text="Edit"
                            onClick={handleEdit}
                            className="rounded border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm hover:border-blue-200 hover:bg-blue-50"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="mb-1 block text-sm font-bold text-gray-500">
                                First Name
                            </label>
                            <TextInput id="firstName" value="Juan" />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="mb-1 block text-sm font-bold text-gray-500">
                                Last Name
                            </label>
                            <TextInput id="lastName" value="Dela Cruz" />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-bold text-gray-500">
                                Email Address
                            </label>
                            <TextInput id="email" type="email" value="admin@arkoflavours.com" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="mb-1 block text-sm font-bold text-gray-500">
                                Phone Number
                            </label>
                            <TextInput id="phone" type="tel" value="+63 983 732 1651" />
                        </div>
                    </div>
                </div>

                {/* company info */}
                <div className="w-full rounded-2xl mt-5 border border-gray-200 px-4 py-4">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-base font-bold text-gray-900">
                            Professional Information
                        </h2>

                        <Button
                            icon={PencilSquareIcon}
                            text="Edit"
                            onClick={handleEdit}
                            className="rounded border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm hover:border-blue-200 hover:bg-blue-50"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="mb-1 block text-sm font-bold text-gray-500">
                                Company Name
                            </label>
                            <TextInput id="firstName" value="ArkoFlavours Corp." />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="mb-1 block text-sm font-bold text-gray-500">
                                Job Title
                            </label>
                            <TextInput id="lastName" value="Full-Stack Developer" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="mb-1 block text-sm font-bold text-gray-500">
                                Website Link
                            </label>
                            <TextInput id="phone" type="tel" value="https://admin.arko.com" />
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default AdminProfilePage;