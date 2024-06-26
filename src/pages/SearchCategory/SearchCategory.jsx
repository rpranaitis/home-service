import { useParams } from 'react-router-dom';

const SearchCategory = () => {
  const { category } = useParams();

  return <div>Category: {category}</div>;
};

export default SearchCategory;
