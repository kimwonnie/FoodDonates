import "./Forms.css";

const Select = ({
  label,
  name,
  value,
  onChange,
  options = []
}) => {

  return (
    <div className="form-group">

      <label>{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
      >

        <option value="">
          Selecione
        </option>

        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}

      </select>

    </div>
  );
};

export default Select;