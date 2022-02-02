import React from 'react';
import RightSideHeader from './RightSideHeader';
import ArchiveButton from './RightSideHeader/ArchiveButton';
import HomeButton from './RightSideHeader/HomeButton';
import SearchBar from './RightSideHeader/SearchBar';
import { Navbar } from './Header.styles';

const Header = () => {
  return (
    <Navbar>
      <RightSideHeader>
        <ArchiveButton />
        <HomeButton />
        <SearchBar />
      </RightSideHeader>
    </Navbar>
  );
};

export default Header;
