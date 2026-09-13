export default function Button({
  type = "button",
  text,
  onClick,
  icon: Icon,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 py-2 px-4 rounded border cursor-pointer w-full text-center bg-blue-500 text-gray hover:bg-blue-500/80 ${className}`}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} alt="" className="w-5 h-5" />
      ) : (
        Icon && <Icon className="w-5 h-5" />
      )}

      {text}
    </button>
  );
}