import "../styles/css/Modal.css";

export default function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <p>{content}</p>
      </div>
    </div>
  );
}
