export default function SearchBar({
    id,
    type = "text",
    icon: Icon,
    placeholder,
    value,
    onChange,
    className = "",
    ...params
}) {
    return (
        <div className="relative w-full">
            {Icon && (
                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            )}

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete={type === "password" ? "new-password" : "off"}
                required
                className={`
                    border-2 rounded-md border-gray-100
                    bg-transparent text-sm text-gray-800
                    hover:bg-gray-100 hover:border-blue-100
                    py-2 ${Icon ? "pl-10" : "px-4"} pr-4
                    w-full
                    focus:bg-white focus:border-blue-300
                    focus:outline-none
                    ease-in
                    ${className}
                `}
                {...params}
            />
        </div>
    );
}
