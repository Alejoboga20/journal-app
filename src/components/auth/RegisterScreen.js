import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {
  const initialState = { name: '', email: '', password: '', password2: '' };

  const [formValues, handleInputChange] = useForm(initialState);

  const { name, email, password, password2 } = formValues;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log('Name is required');
      return false;
    } else if (!validator.isEmail(email)) {
      console.log('email invalid');
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log('Passwords should be equal and at least 5 characters long');
      return false;
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);

    if (isFormValid()) {
      console.log('Form correct');
    }
  };

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleRegister}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          autoComplete='off'
          className='auth__input'
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          autoComplete='off'
          className='auth__input'
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          className='auth__input'
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          className='auth__input'
          onChange={handleInputChange}
        />
        <button type='submit' className='btn btn-primary btn-block mb-5'>
          Register
        </button>

        <Link to='/auth/login' className='link'>
          Already Registered?
        </Link>
      </form>
    </>
  );
};
