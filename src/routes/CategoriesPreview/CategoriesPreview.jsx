import { useContext } from 'react';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { CategoriesContext } from '../../contexts/categoriesContext';

const CategoriesPreview = () => {
  const { shopCategories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(shopCategories).map((title) => {
        const products = shopCategories[title];
        return <CategoryPreview key={title} products={products} title={title} />;
      })}
    </>
  );
};

export default CategoriesPreview;
