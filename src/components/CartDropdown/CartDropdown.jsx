import React from 'react';

import Button from '../Button/Button';

import classes from './CartDropdown.module.scss';

const CartDropdown = () => (
  <div className={classes.cartDropdownContainer}>
    <div className={classes.CartItems} />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
