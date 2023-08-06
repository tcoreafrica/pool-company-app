import React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ placeholder, onChangeText, value }) => {
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default SearchBar;