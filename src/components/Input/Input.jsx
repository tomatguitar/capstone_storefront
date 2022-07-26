/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

const Input = ({ label, ...otherProps }) => {
  return (
    <div className={classes.group}>
      <input className={classes.formInput} {...otherProps} />
      {label && (
        <label
          htmlFor={otherProps.id}
          className={`${otherProps.value.length ? classes.shrink : ''} ${classes.formInputLabel}`}>
          {label}
        </label>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]).isRequired
};

export default Input;
