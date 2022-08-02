import { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const addCartItem = (cartItems, productToAdd) => {
  const itemIdx = cartItems.findIndex((element) => element.id === productToAdd.id);

  if (itemIdx !== -1) {
    const updatedItem = cartItems[itemIdx];
    updatedItem.quantity += 1;

    return [...cartItems.slice(0, itemIdx), updatedItem, ...cartItems.slice(itemIdx + 1)];
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((item) => item.id !== productToDelete.id);
};

const removeCartItem = (cartItems, productToRemove) => {
  if (productToRemove.quantity === 1) {
    return deleteCartItem(cartItems, productToRemove);
  }

  const itemIdx = cartItems.findIndex((element) => element.id === productToRemove.id);

  if (itemIdx !== -1) {
    const updatedItem = cartItems[itemIdx];
    updatedItem.quantity -= 1;

    return [...cartItems.slice(0, itemIdx), updatedItem, ...cartItems.slice(itemIdx + 1)];
  }

  return null;
};

const countItemsInCart = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
};

const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartItemsQuantity: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  clearItemFromCart: () => {},
  removeItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartItemsQuantity(countItemsInCart(cartItems));
    setCartTotal(calculateCartTotal(cartItems));
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  const value = useCallback({
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartItemsQuantity,
    cartTotal,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart
  });

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};
