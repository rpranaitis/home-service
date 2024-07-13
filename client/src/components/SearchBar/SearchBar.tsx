import RoundedButton from '../RoundedButton/RoundedButton';
import RoundedInput from '../RoundedInput/RoundedInput';
import styles from './SearchBar.module.scss';
import { CiSearch } from 'react-icons/ci';
import { FC, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, ...props }) => {
  const [query, setQuery] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className={styles.searchBar} {...props}>
      <RoundedInput onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search" style={{ width: '90%' }} />
      <RoundedButton onClick={() => onSearch(query)}>
        <CiSearch />
      </RoundedButton>
    </div>
  );
};

export default SearchBar;
