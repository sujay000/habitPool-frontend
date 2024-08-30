import '../css/Modal.css';
import { IoIosCloseCircle } from "react-icons/io";


const Modal = ({ isOpen, onClose, children }: {
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
        <IoIosCloseCircle />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;