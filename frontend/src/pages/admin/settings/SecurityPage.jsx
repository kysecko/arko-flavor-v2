import AdminHeader from './../../../components/admin/Header';
import ProfileTabs from './../../../components/admin/ProfileTabs';
function SecurityPage() {
    return (
        <div>
            {/* header */}
            <AdminHeader title="Account Settings" description="Customize preferences and manage your business configuration. " />
            <ProfileTabs />

            <section
                className="mt-4 flex min-h-95 w-full flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6"
            >
                <h2>haha</h2>
            </section>
        </div>
    );
}

export default SecurityPage;