import "../styles/LoginModal.scss";
import { FaTimes } from "react-icons/fa";

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="login-modal-backdrop" onClick={onClose}>
            <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-icon" onClick={onClose}>
                    <FaTimes />
                </button>
                <h2 className="modal-title">Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="login-btn">Login</button>
            </div>
        </div>
    );
};

export default LoginModal;
