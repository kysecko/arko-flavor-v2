import AdminHeader from './../../../components/admin/Header';
import OrderTabs from './../../../components/admin/OrderTabs';


export default function CancelledOrders() {
    return (
        <div className="font-manrope">
            {/* header */}
            <AdminHeader
                title="Order Management"
                description="View, process, and track every order from start to delivery."
            />

            <OrderTabs />
        </div>
    );
}