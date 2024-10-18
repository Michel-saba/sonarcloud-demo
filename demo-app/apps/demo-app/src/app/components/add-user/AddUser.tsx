
'use client';
import React, { useState } from 'react';
 import './AddUser.css';

export const AddUser = ({header}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleErrors();
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if (containsNumber(formData.username)) {
      console.log('username can not contain number');
    }
  };
  function containsNumber(str: string) {
    const regex = /\d/;
    return regex.test(str);
  }

  const handleErrors = () => {
    if (formData.username.length < 3) {
      return 'error';
    }
    if (formData.password.length < 8) {
      return 'error';
    }

    if (formData.username.length > 3) {
      console.log('handle errors');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="wrapperform">
      <div

      >
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div >
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" value="Submit" >submit</button>
      </div>
    </form>
  );
};
