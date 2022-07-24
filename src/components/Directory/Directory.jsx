import PropTypes from 'prop-types';
import CategoryItem from '../CategoryItem/CategoryItem';
import classes from './Directory.module.scss';

const Directory = ({ categories }) => {
  return (
    <div className={classes.directoryContainer}>
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            id={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        );
      })}
    </div>
  );
};

Directory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Directory;
