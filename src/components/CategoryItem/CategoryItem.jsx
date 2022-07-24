import PropTypes from 'prop-types';
import classes from './CategoryItem.module.scss';

const CategoryItem = (props) => {
  const { id, title, imageUrl } = props;
  return (
    <div className={classes.categoryContainer} id={id}>
      <img className={classes.backgroundImage} src={imageUrl} alt={title} />
      <div className={classes.categoryBodyContainer}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default CategoryItem;
