import React, { useState, useContext } from 'react';
import { types } from '../../../../utils/reducer';
import { GlobalContext } from '../../../App/App';
import { SearchInput } from './SearchBar.styles';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const { setAppContext } = useContext(GlobalContext);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyEnterPress = (e) => {
    setInputValue(e.target.value);
    if (e.key === 'Enter')
      setAppContext({ type: types.SET_SEARCH_TEXT, payload: e.target.value });
  };

  return (
    <SearchInput
      value={inputValue}
      type="text"
      placeholder="Search.."
      onChange={onChangeInput}
      onKeyPress={onKeyEnterPress}
    />
  );
};

export default SearchBar;
