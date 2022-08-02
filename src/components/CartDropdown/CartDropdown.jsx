import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import classes from './CartDropdown.module.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const isEmptyCart = cartItems.length === 0;
  return (
    <div className={classes.cartDropdownContainer}>
      <div className={classes.cartItems}>
        {!isEmptyCart &&
          cartItems.map((item) => {
            return <CartItem cartItem={item} />;
          })}
      </div>
      {isEmptyCart && <p>Your cart is empty</p>}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
