import PropTypes from 'prop-types';
import classes from './CartItem.module.scss';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className={classes.cartItemContainer}>
      <img src={imageUrl} alt={name} />
      <div className={classes.itemDetails}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default CartItem;
