import { Outlet } from 'react-router-dom';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

import classes from './Authentication.module.scss';

const SignIn = () => {
  return (
    <div>
      <div className={classes.authenticationContainer}>
        <SignInForm />
        <SignUpForm />
      </div>
      <Outlet />
    </div>
  );
};

export default SignIn;
