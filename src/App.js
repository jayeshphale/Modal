import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal-content") setIsOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.phoneNo.value.toString().length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(e.target.dob.value).getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      e.target.username.value = "";
      e.target.email.value = "";
      e.target.phoneNo.value = "";
      e.target.dob.value = "";
    }
    console.log(e.target.dob.value);
  };

  return (
    <div className="App">
      <div className="modal">
        <h1>User Details Modal</h1>
        <button onClick={clickHandler}>Open Form</button>
        {isOpen && (
          <div className="modal-content" onClick={closeHandler}>
            <form onSubmit={submitHandler}>
              <h2>Fill Details</h2>
              <div className="input-group">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="phoneNo">Phone Number:</label>
                <input type="number" name="phoneNo" id="phone" required />
              </div>
              <div className="input-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" name="dob" id="dob" />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
