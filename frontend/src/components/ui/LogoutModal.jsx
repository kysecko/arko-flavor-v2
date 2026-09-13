const LogoutModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-5 rounded-lg shadow-lg"
            >
                {children}
            </div>
        </div>
    );
};

export default LogoutModal;
