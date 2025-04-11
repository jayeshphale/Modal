import React, { useState } from 'react';
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const closeHandler = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      alert('Please fill out all fields');
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert('Invalid phone number');
      return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    if (dobDate > today) {
      alert('Invalid date of birth');
      return;
    }

    alert('Form submitted successfully!');
    closeModal();
  };

  return (
    <div id="root" className="app">
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal-overlay" onClick={closeHandler}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={submitHandler}>
              <label>
                Username:
                <input type="text" id="username" onChange={changeHandler} />
              </label>
              <label>
                Email:
                <input type="text" id="email" onChange={changeHandler} />
              </label>
              <label>
                Phone:
                <input type="text" id="phone" onChange={changeHandler} />
              </label>
              <label>
                Date of Birth:
                <input type="date" id="dob" onChange={changeHandler} />
              </label>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
