import { FC, HTMLAttributes } from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';
import RoundedInput from '../RoundedInput/RoundedInput';
import styles from './SearchBar.module.scss';
import { CiSearch } from 'react-icons/ci';

interface SearchBarProps extends HTMLAttributes<HTMLDivElement> {}

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className={styles.searchBar} {...props}>
      <RoundedInput placeholder="Search" style={{ width: '90%' }} />
      <RoundedButton>
        <CiSearch />
      </RoundedButton>
    </div>
  );
};

export default SearchBar;
