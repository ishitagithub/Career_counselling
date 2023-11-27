import React, { useState } from 'react';
import TopBar from "../../components/topbar/TopBar";

import "./register.css";
function Register() {
  const [userInput, setUserInput] = useState({
    username: '',
    firstname: '',
    age: '',
    institution: '',
    email: '',
    password: '',
    lastname: '',
    class: '',
    course: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or perform client-side validation
    console.log(userInput);
  };

  return (
    
    <div className='page'>
    <TopBar/>
    <div className='title'>
      Register</div>
      
    <div className="user-registration-form">
      
      <form onSubmit={handleSubmit}>
        <div className="column">
          
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={userInput.username}
            onChange={handleChange}
          />
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            value={userInput.firstname}
            onChange={handleChange}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            value={userInput.age}
            onChange={handleChange}
          />
          <label htmlFor="institution">Institution:</label>
          <input
            type="text"
            name="institution"
            value={userInput.institution}
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={userInput.email}
            onChange={handleChange}
          />
        </div>
        <div className="column">
          
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={userInput.password}
            onChange={handleChange}
          />
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={userInput.lastname}
            onChange={handleChange}
          />
          <label htmlFor="class">Class:</label>
          <input
            type="text"
            name="class"
            value={userInput.class}
            onChange={handleChange}
          />
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            name="course"
            value={userInput.course}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone No:</label>
          <input
            type="text"
            name="phone"
            value={userInput.phone}
            onChange={handleChange}
          />
        </div>
        
      </form>
      
    </div>
    <div className='sub'>
        <button type="submit">Submit</button>
        </div>
        </div>
    
  );
}

export default Register;
