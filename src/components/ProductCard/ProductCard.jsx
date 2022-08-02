import propTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import Button from '../Button/Button';
import classes from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const onClickHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className={classes.productCardContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={classes.footer}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={onClickHandler}>
        Add to cart
      </Button>
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
