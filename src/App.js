import "./App.css";

function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label for="day">
        Day
        <input
          name="day"
          type="number"
          min={1}
          max={31}
          placeholder="DD"
          oninvalid="this.setCustomValidity('This field is required')"
          required
        />
      </label>

      <label for="month">
        Month
        <input
          name="month"
          type="number"
          min={1}
          max={12}
          placeholder="MM"
          required
        />
      </label>

      <label for="year">
        Year
        <input
          name="year"
          type="number"
          min={1890}
          placeholder="YYYY"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
