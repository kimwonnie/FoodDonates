import "./Modals.css";

const ErrorModal = ({
  isOpen,
  title,
  message,
  onClose
}) => {

  if (!isOpen) return null;

  return (

    <div className="modal-overlay">

      <div className="modal error">

        <h2>{title}</h2>

        <p>{message}</p>

        <button
          className="btn-error"
          onClick={onClose}
        >
          Fechar
        </button>

      </div>

    </div>

  );
};

export default ErrorModal;