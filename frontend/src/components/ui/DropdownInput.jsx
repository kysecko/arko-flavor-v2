import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function DropdownInput({
    id,
    icon: Icon,
    placeholder,
    value,
    onChange,
    options = [],
    className = "",
    ...params
}) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    // close when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const selected = options.find((o) => o.value === value);

    const handleSelect = (val) => {
        onChange({ target: { id, value: val } });
        setIsOpen(false);
    };

    return (
        <div className="relative w-full" ref={ref}>
            {/* Left icon */}
            {Icon && (
                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            )}

            {/* Trigger — rounded pill */}
            <button
                type="button"
                id={id}
                onClick={() => setIsOpen((o) => !o)}
                className={`
                    w-full flex items-center gap-2 text-left cursor-pointer
                    border-2 rounded-full border-gray-100 bg-transparent
                    text-sm text-gray-800
                    hover:border-blue-100 focus:border-blue-300 focus:outline-none
                    py-2 pr-10 ${Icon ? "pl-10" : "pl-4"}
                    ${className}
                `}
                {...params}
            >
                {selected ? (
                    <span className="truncate">{selected.label}</span>
                ) : (
                    <span className="text-gray-400 truncate">{placeholder}</span>
                )}
            </button>

            {/* Chevron */}
            <ChevronDownIcon
                className={`
                    absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4
                    text-gray-400 pointer-events-none
                    transition-transform duration-200
                    ${isOpen ? "rotate-180" : "rotate-0"}
                `}
            />

            {/* Menu — rounded panel */}
            {isOpen && (
                <ul
                    className="
                        absolute z-50 mt-2 w-full min-w-40 max-h-60 overflow-y-auto
                        bg-white border border-gray-200 rounded-2xl shadow-lg p-1.5
                    "
                >
                    <li className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
                        {placeholder}
                    </li>

                    {options.map((option) => (
                        <li key={option.value}>
                            <button
                                type="button"
                                onClick={() => handleSelect(option.value)}
                                className={`
                                    w-full text-left px-4 py-2 text-sm rounded-full transition-colors
                                    ${value === option.value
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                    }
                                `}
                            >
                                {option.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
