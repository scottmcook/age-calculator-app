import DateInput from "../DateInput/DateInput";

// const CURRENT_YEAR = new Date().getFullYear();

function Form() {
  return (
    <>
      <DateInput label="Day" type="number" id="day" placeholder="DD" />
      <DateInput label="Month" type="number" id="month" placeholder="MM" />
      <DateInput label="Year" type="number" id="year" placeholder="YYYY" />
    </>
  );
}

export default Form;
