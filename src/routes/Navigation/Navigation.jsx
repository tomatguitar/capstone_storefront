import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import classes from './Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <header className={classes.navigation}>
        <Link className={classes.logoContainer} to="/">
          <Logo className="logo" />
        </Link>
        <nav className={classes.navLinksContainer}>
          <Link className={classes.navLink} to="/">
            HOME
          </Link>
          <Link className={classes.navLink} to="/shop">
            SHOP
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
