import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Dropdown({
    label,
    options = [],
    icon: Icon,
    onSelect,
    className = "",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative ${className}`} ref={ref}>
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`
                    flex items-center justify-between w-full
                    px-4 py-3 rounded-lg
                    border-2
                    text-sm font-semibold
                    transition-colors cursor-pointer
                    ${
                        isOpen
                            ? "bg-blue-700 border-blue-700 text-white"
                            : "bg-blue-500 border-blue-500 text-white hover:bg-blue-600"
                    }
                `}
            >
                {/* Left side: icon + label */}
                <div className="flex items-center gap-2">
                    {Icon && (
                        <Icon className="w-5 h-5 text-white shrink-0" />
                    )}

                    <span>{label}</span>
                </div>

                {/* Right side: dropdown arrow */}
                <ChevronDownIcon
                    className={`w-4 h-4 text-white transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                                onSelect(option.value);
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-gray-50 border-b last:border-b-0 border-gray-100"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}