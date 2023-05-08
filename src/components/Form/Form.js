import DateInput from "../DateInput/DateInput";

function Form() {
  return (
    <>
      <DateInput label="Day" type="text" id="day" placeholder="DD" />
      <DateInput label="Month" type="text" id="month" placeholder="MM" />
      <DateInput label="Year" type="text" id="year" placeholder="YYYY" />
    </>
  );
}

export default Form;
