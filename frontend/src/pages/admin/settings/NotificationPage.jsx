import AdminHeader from "../../../components/admin/Header";
import ProfileTabs from "../../../components/admin/ProfileTabs";

function NotificationPage() {
    return (
        <div>
            {/* header */}
            <AdminHeader title="Account Settings" description="Customize preferences and manage your business configuration. " />
            <ProfileTabs />
        </div>
    );
}

export default NotificationPage;