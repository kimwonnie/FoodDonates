import "./Forms.css";

const TextArea = ({
  label,
  name,
  value,
  onChange,
  rows = 4,
  placeholder
}) => {

  return (
    <div className="form-group">

      <label>{label}</label>

      <textarea
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

    </div>
  );
};

export default TextArea;