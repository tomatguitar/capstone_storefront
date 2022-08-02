import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import classes from './CartIcon.module.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemsQuantity } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      role="link"
      tabIndex={0}
      className={classes.cartIconContainer}
      onClick={toggleIsCartOpen}
      onKeyDown={() => {}}>
      <ShoppingIcon className={classes.shoppingIcon} />
      <span className={classes.itemCount}>{cartItemsQuantity}</span>
    </div>
  );
};

export default CartIcon;
