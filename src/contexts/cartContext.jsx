import { createContext, useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = useCallback({ isCartOpen, setIsCartOpen });

  useEffect(() => {}, []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};
