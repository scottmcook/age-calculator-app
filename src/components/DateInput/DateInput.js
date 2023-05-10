const DateInput = ({ label, type, id, placeholder, min, max }) => {
  return (
    <>
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </>
  );
};

export default DateInput;
