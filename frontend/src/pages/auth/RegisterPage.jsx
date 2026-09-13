import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/ui/Button";
import TextInput from "../../components/ui/TextInput";

import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

import leftImage from "../../assets/images/left.jpg";
import fbIcon from "../../assets/icons/facebook-icon.svg";
import googleIcon from "../../assets/icons/google-icon.svg";

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showVerifyMessage, setShowVerifyMessage] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setShowVerifyMessage(false);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: name, email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.message || 'Something went wrong. Please try again.');
                return;
            }

            setShowVerifyMessage(true);
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Could not reach the server. Please check your connection and try again.');
        }
    };

    const goToLogin = () => navigate('/auth/login');

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

            {/* form and verify message */}
            <div className="w-full lg:w-1/2 h-full bg-white flex items-center justify-center overflow-y-auto">
                <div className="w-full max-w-md p-8 m-1 text-center">
                    {showVerifyMessage ? (
                        /*verification message */
                        <div className="text-center py-8">
                            <EnvelopeIcon className="h-16 w-16 mx-auto text-orange-500 mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Check your email</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                We sent a verification link to <strong>{email}</strong>
                            </p>
                            <button
                                onClick={() => navigate('/auth/login')}
                                className="text-orange-500 font-bold underline text-sm"
                            >
                                Back to Login
                            </button>
                        </div>
                    ) : (
                        /* form */
                        <>
                            <form onSubmit={handleRegister} className="text-left">
                                <h2 className="text-4xl font-tapestry font-bold mb-1 text-orange-500">Create an account</h2>
                                <p className="text-sm font-medium mb-3 text-gray-500">
                                    Taste a variety of foods you'll never forget. Start your journey today!
                                </p>
                                {error && <p className="bg-red-50 rounded-sm p-2 text-red-500 text-sm mb-4">{error}</p>}

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <TextInput
                                        id="username"
                                        placeholder="Enter your name"
                                        icon={UserIcon}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <TextInput
                                        id="email"
                                        placeholder="Enter your email"
                                        icon={EnvelopeIcon}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <TextInput
                                        id="password"
                                        placeholder="Enter your password"
                                        icon={LockClosedIcon}
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="flex items-center justify-center">
                                    <Button
                                        type="submit"
                                        text="Sign Up"
                                        className="w-full text-center font-semibold bg-orange-500 border-0 text-white hover:bg-orange-500/80"
                                    />
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
                                    onClick={goToLogin}
                                    className="w-full bg-white border-2 border-gray-200 text-xs text-gray-500 hover:bg-gray-100 hover:border-blue-200"
                                />
                                <Button
                                    type="button"
                                    icon={fbIcon}
                                    text="Continue with Facebook"
                                    onClick={goToLogin}
                                    className="w-full bg-white border-2 border-gray-200 text-xs text-gray-500 hover:bg-gray-100 hover:border-blue-200"
                                />
                            </div>

                            <div className="flex items-center justify-center gap-1 text-sm mt-3">
                                <p className="text-gray-600">Already have an account?</p>
                                <Link
                                    to="/auth/login"
                                    className="text-orange-500 hover:text-orange-500/80 cursor-pointer font-bold underline"
                                >
                                    Login
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default RegisterPage;
