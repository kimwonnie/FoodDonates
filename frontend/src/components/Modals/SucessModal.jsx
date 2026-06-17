import "./Modals.css";

const SuccessModal = ({
  isOpen,
  title,
  message,
  onClose
}) => {

  if (!isOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="modal success">

        <h2>{title}</h2>

        <p>{message}</p>

        <button
          className="btn-success"
          onClick={onClose}
        >
          OK
        </button>

      </div>

    </div>

  );
};

export default SuccessModal;