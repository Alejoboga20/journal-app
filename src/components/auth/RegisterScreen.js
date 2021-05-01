import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

export const RegisterScreen = () => {
  const initialState = { name: '', email: '', password: '', password2: '' };

  const [formValues, handleInputChange] = useForm(initialState);

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);
  };

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleRegister}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          autoComplete='off'
          className='auth__input'
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          autoComplete='off'
          className='auth__input'
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
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
