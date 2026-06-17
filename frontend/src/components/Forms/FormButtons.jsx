import "./Forms.css";

const FormButtons = ({
  onCancel,
  submitText = "Salvar"
}) => {

  return (

    <div className="form-buttons">

      <button
        type="button"
        className="btn-cancel"
        onClick={onCancel}
      >
        Cancelar
      </button>

      <button
        type="submit"
        className="btn-save"
      >
        {submitText}
      </button>

    </div>

  );
};

export default FormButtons;