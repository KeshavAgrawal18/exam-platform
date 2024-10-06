export default function CustomModal({ title, message, onConfirm, isConfirm }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="modal-buttons">
                    {isConfirm ? (
                        <>
                            <button onClick={() => onConfirm(true)} className="confirm-btn">
                                Yes
                            </button>
                            <button onClick={() => onConfirm(false)} className="cancel-btn">
                                No
                            </button>
                        </>
                    ) : (
                        <button onClick={() => onConfirm(true)} className="confirm-btn">
                            OK
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
