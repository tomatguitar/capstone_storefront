import { createContext, useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PRODUCTS from '../shopData.json';

export const ProductsContext = createContext({
  shopProducts: [],
  setShopProducts: () => {}
});

export const ProductsProvider = ({ children }) => {
  const [shopProducts, setShopProducts] = useState(PRODUCTS);
  const value = useCallback({ shopProducts, setShopProducts });

  useEffect(() => {}, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired
};
