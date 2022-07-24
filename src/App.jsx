import CategoryItem from './components/CategoryItem/CategoryItem';
import classes from './App.module.scss';

const App = () => {
  const DUMMY_CATEGORIES = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ];

  return (
    <div className={classes.categoriesContainer}>
      {DUMMY_CATEGORIES.map((category) => {
        return (
          <CategoryItem id={category.id} title={category.title} imageUrl={category.imageUrl} />
        );
      })}
    </div>
  );
};

export default App;
