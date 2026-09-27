import ProtectedRoute from "./ProtectedRoutes";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// shared pages
import LandingPage from "../pages/public/index.jsx";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import VerifyPage from '../pages/auth/VerifyPage';

// customer pages
import Dashboard from "../pages/customer/Dashboard";
import MenuPage from "../pages/customer/MenuPage";
import CartPage from "../pages/customer/CartPage";
import OrdersPage from "../pages/customer/OrdersPage";
import ProfilePage from "../pages/customer/ProfilePage";
import SettingsPage from "../pages/customer/SettingsPage";
import CustomerLayout from '../pages/customer/CustomerLayout';

// admin pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import InventoryPage from "../pages/admin/InventoryPage";
import ProductPage from "../pages/admin/ProductPage";
import PaymentPage from "../pages/admin/PaymentPage";
import SalesPage from "../pages/admin/SalesPage";
import ExpensePage from "../pages/admin/ExpensePage";
import SummaryPage from "../pages/admin/SummaryPage";
import AdminLayout from "../pages/admin/AdminLayout.jsx";

// orders
import AllOrders from "../pages/admin/orders/AllOrders";
import CompletedOrders from "../pages/admin/orders/CompletedOrders";
import InProgressOrders from "../pages/admin/orders/InProgressOrders";
import CancelledOrders from "../pages/admin/orders/CancelledOrders";

// reports
import BalanceSheet from "../pages/admin/reports/BalanceSheet.jsx";
import CashFlow from "../pages/admin/reports/CashFlow.jsx";
import IncomeStatement from "../pages/admin/reports/IncomeStatement.jsx";


import AdminProfilePage from "../pages/admin/settings/AdminProfilePage.jsx";
import SecurityPage from "../pages/admin/settings/SecurityPage.jsx";
import NotificationPage from "../pages/admin/settings/NotificationPage.jsx";

function AuthRedirect({ children }) {
  const { isAuthenticated, role } = useAuth();

  if (isAuthenticated) {
    const fallback = role === "admin" ? "/admin/dashboard" : "/customer/dashboard";
    return <Navigate to={fallback} replace />;
  }
  return children;
}
function AppRoutes() {
  return (
    <Routes>
      {/* shared routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/login" element={<AuthRedirect><LoginPage /></AuthRedirect>} />
      <Route path="/auth/register" element={<AuthRedirect><RegisterPage /></AuthRedirect>} />
      <Route path="/auth/verify" element={<AuthRedirect><VerifyPage /></AuthRedirect>} />

      {/* customer routes */}
      <Route
        path="/customer"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <CustomerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
        <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
        <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
      </Route>

      {/* admin routes */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="expenses" element={<ExpensePage />} />
        <Route path="summary" element={<SummaryPage />} />

        <Route path="orders">
          <Route index element={<Navigate to="all" replace />} />
          <Route path="all" element={<AllOrders />} />
          <Route path="completed" element={<CompletedOrders />} />
          <Route path="inprogress" element={<InProgressOrders />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>

        <Route path="reports">
          <Route index element={<Navigate to="balance_sheet" />} />
          <Route path="balance_sheet" element={<BalanceSheet />} />
          <Route path="cashflow" element={<CashFlow />} />
          <Route path="income_statement" element={<IncomeStatement/>} />
        </Route>

        <Route path="settings">
          <Route index element={<Navigate to="profile" />} />
          <Route path="profile" element={<AdminProfilePage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="notification" element={<NotificationPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;