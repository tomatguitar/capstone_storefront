import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import classes from './CartDropdown.module.scss';

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, cartItemsQuantity } = useContext(CartContext);
  const isEmptyCart = cartItemsQuantity === 0;

  const clickHandler = () => {
    navigate('checkout');
  };

  return (
    <div className={classes.cartDropdownContainer}>
      {!isEmptyCart && (
        <div className={classes.cartItems}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })}
        </div>
      )}
      {isEmptyCart && <p className={classes.empty}>Your cart is empty</p>}
      {!isEmptyCart && <Button onClick={clickHandler}>GO TO CHECKOUT</Button>}
    </div>
  );
};

export default CartDropdown;
