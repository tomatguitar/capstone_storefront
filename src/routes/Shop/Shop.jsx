import { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductsContext } from '../../contexts/productsContext';
import classes from './Shop.module.scss';

const Shop = () => {
  const { shopProducts } = useContext(ProductsContext);

  return (
    <div className={classes.productsContainer}>
      {shopProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
