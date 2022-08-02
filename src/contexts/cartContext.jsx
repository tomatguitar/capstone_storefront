import { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const addCartItem = (cartItems, productToAdd) => {
  const itemIdx = cartItems.findIndex((element) => element.name === productToAdd.name);

  if (itemIdx !== -1) {
    const updatedItem = cartItems[itemIdx];
    updatedItem.quantity += 1;

    return [...cartItems.slice(0, itemIdx), updatedItem, ...cartItems.slice(itemIdx + 1)];
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = useCallback({ isCartOpen, setIsCartOpen, cartItems, addItemToCart });

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};
