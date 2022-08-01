import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { signOutUser } from '../../utils/firebase/firebase';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import classes from './Navigation.module.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <header className={classes.navigation}>
        <Link className={classes.logoContainer} to="/">
          <Logo className="logo" />
        </Link>
        <nav className={classes.navLinksContainer}>
          <Link className={classes.navLink} to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span
              role="button"
              tabIndex={0}
              className={classes.navLink}
              onClick={signOutUser}
              onKeyDown={() => {}}>
              SIGN OUT
            </span>
          ) : (
            <Link className={classes.navLink} to="/auth">
              SIGN IN
            </Link>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
