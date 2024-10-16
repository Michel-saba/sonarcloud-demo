// create reactjs component as form that have 3 inputs username , email and password and submit button . use pure css . you can use three color : white, blue and red.
'use client';
import React, { useState } from 'react';
// import './AddUser.css';

export const AddUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event ) => {
    event.preventDefault();
    console.log(formData);

  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:{' '}
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
