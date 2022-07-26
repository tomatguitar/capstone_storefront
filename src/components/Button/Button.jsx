/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

const BUTTON_TYPE_CLASES = {
  google: 'googleSignIn',
  inverted: 'inverted'
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      type={otherProps.type ? otherProps.type : 'button'}
      className={`${classes.buttonContainer} ${BUTTON_TYPE_CLASES[buttonType]}`}
      {...otherProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string.isRequired,
  otherProps: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]).isRequired
};

export default Button;
