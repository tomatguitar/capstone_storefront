import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase';
import Button from '../Button/Button';
import Input from '../Input/Input';

import classes from './SignUpForm.module.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      const response = await createUserDocumentFromAuth(user, { displayName });
      console.log(response);
      resetFormFields();
    } catch (err) {
      console.log('User creation encoutered ana error', err.message);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <form className={classes.signUpContainer} onSubmit={onSubmitHandler}>
      <h2>Don&#39;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <Input
        label="Display Name"
        type="text"
        id="name"
        name="displayName"
        value={displayName}
        required
        onChange={onChangeHandler}
      />

      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        value={email}
        required
        onChange={onChangeHandler}
      />

      <Input
        label="Password"
        type="password"
        id="password"
        name="password"
        value={password}
        required
        onChange={onChangeHandler}
      />

      <Input
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        required
        onChange={onChangeHandler}
      />

      <Button buttonType="inverted" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
