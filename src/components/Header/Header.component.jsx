import React from 'react';
import RightSideHeader from './ContentHeader';
import ArchiveButton from './ContentHeader/ArchiveButton';
import HomeButton from './ContentHeader/HomeButton';
import SearchBar from './ContentHeader/SearchBar';
import LogoutButton from './ContentHeader/LogoutButton';
import { Navbar } from './Header.styles';

const Header = () => {
  return (
    <Navbar>
      <RightSideHeader>
        <ArchiveButton />
        <HomeButton />
        <SearchBar />
        <LogoutButton />
      </RightSideHeader>
    </Navbar>
  );
};

export default Header;
