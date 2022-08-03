import { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase';

// import SHOP_DATA from '../shopData';

export const CategoriesContext = createContext({
  shopCategories: {},
  setShopCategories: () => {}
});

export const CategoriesProvider = ({ children }) => {
  const [shopCategories, setShopCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setShopCategories(categoriesMap);
    };
    getCategories();
  }, []);

  const value = useCallback({ shopCategories });

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired
};
