const DateInput = ({ label, type, id, placeholder }) => {
  return (
    <>
      <label htmlFor={id} className="font-semibold capitalize">
        {label}
      </label>
      <input id={id} type={type} placeholder={placeholder} />
    </>
  );
};

export default DateInput;
