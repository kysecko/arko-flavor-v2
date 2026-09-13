import { useState } from "react";
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

    return (
        <div className="relative w-full">
            {/* Left icon */}
            {Icon && (
                <Icon
                    className="
                        absolute left-3 top-1/2
                        -translate-y-1/2
                        h-5 w-5
                        text-gray-400
                        pointer-events-none
                    "
                />
            )}

            <select
                id={id}
                value={value}
                onChange={onChange}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                className={`
                    appearance-none
                    border-2 rounded-md border-gray-100
                    bg-transparent text-sm text-gray-800
                    hover:bg-gray-100 hover:border-blue-100
                    py-2
                    ${Icon ? "pl-10" : "pl-4"}
                    pr-10
                    w-full
                    focus:bg-white focus:border-blue-300
                    focus:outline-none
                    ease-in
                    ${className}
                `}
                {...params}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}

                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Custom dropdown icon */}
            <ChevronDownIcon
                className={`
                    absolute right-3 top-1/2
                    -translate-y-1/2
                    h-4 w-4
                    text-gray-400
                    pointer-events-none
                    transition-transform duration-200
                    ${isOpen ? "rotate-180" : "rotate-0"}
                `}
            />
        </div>
    );
}
