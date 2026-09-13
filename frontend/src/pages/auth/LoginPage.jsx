import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/ui/Button";
import TextInput from "../../components/ui/TextInput";
import { useAuth } from "../../context/AuthContext";

import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import leftImage from "../../assets/images/left.jpg";
import fbIcon from "../../assets/icons/facebook-icon.svg";
import googleIcon from "../../assets/icons/google-icon.svg";


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setSession } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();

        if (!res.ok) {
            setError(data.message);
            return;
        }

        setSession(data.access_token, data.user);

        const dashboard = data.user.role === 'admin'
            ? '/admin/dashboard'
            : '/customer/dashboard';

        navigate(dashboard, { replace: true });
    };

    const goToRegister = () => {
        navigate('/auth/register');
    };


    return (
        <section className="relative h-screen overflow-hidden flex">

            {/* image */}
            <div className="hidden lg:block lg:w-1/2 h-172 relative">
                <img
                    src={leftImage}
                    alt="Arko Flavors"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* form */}
            <div className="w-full lg:w-1/2 h-full bg-white flex items-center justify-center overflow-y-auto">

                <div className="w-full max-w-md p-8 m-1 text-center">
                    <form onSubmit={handleLogin} className="text-left">
                        <h2 className="text-4xl font-tapestry font-bold mb-1 text-orange-500">Welcome Back!</h2>
                        <p className="text-sm font-medium mb-3 text-gray-500">
                            Let's discover the latest flavors waiting for you.
                        </p>
                        {error && <p className="bg-red-50 rounded-sm p-2 text-red-500 text-sm mb-4">{error}</p>}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <TextInput
                                id="email"
                                placeholder="Enter your email"
                                icon={EnvelopeIcon}
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <TextInput id="password"
                                placeholder="Enter your password"
                                icon={LockClosedIcon}
                                type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <Button type="submit" text="Login" className="w-full text-center font-semibold bg-orange-500 border-0 text-white hover:bg-orange-500/80" />
                        </div>

                    </form>

                    <div className="m-4 flex items-center">
                        <hr className="flex-1 border-t border-gray-300" />
                        <span className="text-sm text-gray-600 px-4">or</span>
                        <hr className="flex-1 border-t border-gray-300" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button
                            type="button"
                            icon={googleIcon}
                            text="Continue with Google"
                            onClick={goToRegister}
                            className="w-full bg-white border-2 border-gray-200 text-xs text-gray-500 hover:bg-gray-100 hover:border-blue-200"
                        />

                        <Button
                            type="button"
                            icon={fbIcon}
                            text="Continue with Facebook"
                            onClick={goToRegister}
                            className="w-full bg-white border-2 border-gray-200 text-xs text-gray-500 hover:bg-gray-100 hover:border-blue-200"
                        />
                    </div>

                    {/* login link */}
                    <div className="flex items-center justify-center gap-1 text-sm mt-3">
                        <p className="text-gray-600">
                            Don't have an account?
                        </p>

                        <Link
                            to="/auth/register"
                            className="text-orange-500 hover:text-orange-500/80 cursor-pointer underline font-bold"
                        >
                            Sign up here
                        </Link>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default LoginPage;