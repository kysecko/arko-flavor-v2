import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
    const { isAuthenticated, role } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(role)) {
        const fallback = role === "admin" ? "/admin/dashboard" : "/customer/dashboard";
        return <Navigate to={fallback} replace />;
    }

    return children;
}

export default ProtectedRoute;