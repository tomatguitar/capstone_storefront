import { useContext } from 'react';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { CategoriesContext } from '../../contexts/categoriesContext';
import classes from './Shop.module.scss';

const Shop = () => {
  const { shopCategories } = useContext(CategoriesContext);

  return (
    <div className={classes.shopContainer}>
      {Object.keys(shopCategories).map((title) => {
        const products = shopCategories[title];
        return <CategoryPreview key={title} products={products} title={title} />;
      })}
    </div>
  );
};

export default Shop;
