export default function Button({
  type = "button",
  text,
  onClick,
  icon: Icon,
  iconClassName = "w-5 h-5",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 py-2 px-4 rounded border cursor-pointer text-center whitespace-nowrap text-gray  ${className}`}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} alt="" className={`${iconClassName} shrink-0`} />
      ) : (
        Icon && <Icon className={`${iconClassName} shrink-0`} />
      )}
      {text}
    </button>
  );
}