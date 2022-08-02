import { useContext } from 'react';

import PropTypes from 'prop-types';

import { CartContext } from '../../contexts/cartContext';
import classes from './CheckoutItem.module.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className={classes.checkoutItemContainer}>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={classes.name}> {name} </span>
      <span className={classes.quantity}>
        <div
          role="button"
          tabIndex={0}
          className={classes.arrow}
          onClick={removeItemHandler}
          onKeyDown={() => {}}>
          &#10094;
        </div>
        <span className={classes.value}>{quantity}</span>
        <div
          role="button"
          tabIndex={0}
          className={classes.arrow}
          onClick={addItemHandler}
          onKeyDown={() => {}}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div
        role="button"
        tabIndex={0}
        className={classes.removeButton}
        onClick={clearItemHandler}
        onKeyDown={() => {}}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default CheckoutItem;
