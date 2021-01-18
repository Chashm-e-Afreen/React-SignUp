import React from "react";
import "./styles.css";

export default function App() {
  const countries = [
    "Pakistan",
    "USA",
    "UK",
    "Australia",
    "Canada",
    "New Zealand"
  ];
  const gender = ["Male", "Female"];

  const today = new Date();
  const currentYear = today.getFullYear();

  //set custom error message if age requirements aren't met
  const checkBirthYear = (e) => {
    const element = document.getElementById("birthYear");
    if (element.value > currentYear - 15) {
      element.setCustomValidity(
        "You must at least be 15 years of Age to Register"
      );
    }
  };

  const resetValidity = (e) => {
    e.target.setCustomValidity("");
  };
  return (
    <div className="App">
      <h2>Create an Account</h2>
      <form className="Form" id="registrationForm">
        <input
          type="text"
          name="name"
          pattern="[a-zA-Z0-9 ]{6,}"
          placeholder="Full Name"
          title="Must at least be 6 characters long"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Username"
          pattern="[a-z0-9]{1,}"
          title="No spaces allowed"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          title="Invalid Email"
          required
        />
        <input
          type="number"
          name="Year of Birth"
          id="birthYear"
          placeholder="Year of Birth"
          max={currentYear - 15}
          title="You must at least be 15 years of age to register"
          onInvalid={checkBirthYear}
          onInput={resetValidity}
          required
        />
        <select required>
          <option value="">Gender</option>
          {gender.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select required>
          <option value="">Country</option>
          {countries.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <input
          type="tel"
          pattern="[0-9]{1,}"
          title="Numbers only"
          placeholder="Phone Number"
          required
        />
        <button type="submit" className="Submit-button">
          Register
        </button>
      </form>
    </div>
  );
}
