import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import classes from './CategoryPreview.module.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className={classes.categoryPreviewContainer}>
      <h2>
        <span className={classes.title}>{title.toUpperCase()}</span>
      </h2>
      <div className={classes.preview}>
        {products
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </div>
  );
};

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

export default CategoryPreview;
