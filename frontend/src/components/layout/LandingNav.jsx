import { useState } from "react";

function LandingTopBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Menu", href: "#menu", current: true },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="absolute top-0 left-0 w-full z-20 bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between" >

                    <div className="flex flex-1 items-center sm:items-stretch">
                        <div className="flex shrink-0 items-center">
                            <img src="/arko.jpg" alt="Arko Flavors" className="h-8 w-8 rounded-full object-cover" />
                            <span className="ml-2 text-yellow-400 font-bold font-tapestry uppercase text-sm ">
                                Arko <span className="text-black">Flavour</span> 
                            </span>
                        </div>
                    </div>

                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="rounded-md px-3 py-2 text-sm font-semibold text-black hover:bg-white/10">
                                    {link.name}
                                </a>
                            ))}
                            <a href="/auth/login" className="rounded-md px-3 py-2 text-sm font-semibold text-black hover:bg-white/10">
                                Login
                            </a>
                            <a href="/auth/register" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
                                Register
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-white/10"
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="sm:hidden bg-white backdrop-blur">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="block rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-white/10">
                                {link.name}
                            </a>
                        ))}
                        <a href="/auth/login" className="block rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-white/10">
                            Login
                        </a>
                        <a href="/auth/register" className="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white">
                            Register
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default LandingTopBar;