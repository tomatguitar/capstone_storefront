import { useState } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import {
  // auth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth
  // signInWithGoogleRedirect
} from '../../utils/firebase/firebase';
import Button from '../Button/Button';
import Input from '../Input/Input';

import classes from './SignInForm.module.scss';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Keep this part if you'd like to change pop-up to redirect page

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);

  //   if (response) {
  //     const { user } = response;
  //     const userDocRef = await createUserDocumentFromAuth(user);
  //     console.log(userDocRef);
  //   }
  // }, []);

  const signInWithGooglePopUp = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log('Signed In!', userDocRef);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password or email!');
          break;
        case 'auth/user-not-found':
          alert('No user with such credentials!');
          break;

        default:
          console.log(err);
          break;
      }
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <form className={classes.signUpContainer} onSubmit={onSubmitHandler}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
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
      <div className={classes.buttonsContainer}>
        <Button buttonType="inverted" name="signIn" type="submit">
          Sign In
        </Button>
        <Button buttonType="google" name="googleSignIn" onClick={signInWithGooglePopUp}>
          Google Sign In
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
