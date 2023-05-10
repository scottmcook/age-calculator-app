import DateInput from "../DateInput/DateInput";

const CURRENT_YEAR = new Date().getFullYear();

function Form() {
  return (
    <>
      <DateInput
        label="Day"
        type="number"
        id="day"
        placeholder="DD"
        min={1}
        max={31}
      />
      <DateInput
        label="Month"
        type="number"
        id="month"
        placeholder="MM"
        min={1}
        max={12}
      />
      <DateInput
        label="Year"
        type="number"
        id="year"
        placeholder="YYYY"
        min={1896}
        max={CURRENT_YEAR}
      />
    </>
  );
}

export default Form;
