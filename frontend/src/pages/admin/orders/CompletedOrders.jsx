import OrderTabs from '../../../components/admin/OrderTabs';
import AdminHeader from './../../../components/admin/Header';


export default function CompletedOrders() {
    return (
        <div>
            {/* header */}
            <AdminHeader
                title="Order Management"
                description="View, process, and track every order from start to delivery."
            />

            <OrderTabs />
        </div>
    );
}