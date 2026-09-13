// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // On first load, restore session from localStorage (so refresh doesn't log you out)
    useEffect(() => {
        const storedToken = localStorage.getItem("access_token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setAccessToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Called by LoginPage after a successful /api/auth/login response
    const setSession = (token, userData) => {
        localStorage.setItem("access_token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setAccessToken(token);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        setAccessToken(null);
        setUser(null);
    };

    const value = {
        user,
        accessToken,
        isAuthenticated: !!user,
        role: user?.role || null,
        setSession,
        logout,
    };

    if (loading) return null;

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside an AuthProvider");
    }
    return context;
}