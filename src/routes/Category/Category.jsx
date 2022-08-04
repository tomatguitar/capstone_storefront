import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categoriesContext';

import classes from './Category.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';

const Category = () => {
  const { category } = useParams();
  const { shopCategories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(shopCategories[category]);

  useEffect(() => {
    setProducts(shopCategories[category]);
  }, [category, shopCategories]);

  return (
    <>
      <h2>{category.toUpperCase()}</h2>
      <div className={classes.categoryContainer}>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default Category;
