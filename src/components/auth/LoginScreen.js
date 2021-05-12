import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeUIError, setUIError } from '../../actions/ui';
import useForm from '../../hooks/useForm';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const isFormValid = () => {
    if (!validator.isEmail(email) || password.trim().length <= 5) {
      dispatch(setUIError('Please enter valid email and password'));
      return false;
    }

    dispatch(removeUIError());
    return true;
  };

  const initialFormValues = {
    email: 'test@email.com',
    password: '123456'
  };

  const [formValues, handleInputChange] = useForm(initialFormValues);
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => dispatch(startGoogleLogin());

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Email'
          name='email'
          autoComplete='off'
          className='auth__input'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='btn btn-primary btn-block'
          disabled={loading}
        >
          Login
        </button>
        <hr />

        <div className='auth__social-networks'>
          <p>Login with social networks</p>
          <div className='google-btn' onClick={handleGoogleLogin}>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button'
              />
            </div>
            <p className='btn-text'>
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to='/auth/register' className='link'>
          Create New Account
        </Link>
      </form>
    </>
  );
};
