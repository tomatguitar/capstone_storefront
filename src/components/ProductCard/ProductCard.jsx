import propTypes from 'prop-types';
import Button from '../Button/Button';
import classes from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className={classes.productCardContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={classes.footer}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

ProductCard.propTypes = {
  product: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    imageUrl: propTypes.string,
    price: propTypes.number
  }).isRequired
};

export default ProductCard;
