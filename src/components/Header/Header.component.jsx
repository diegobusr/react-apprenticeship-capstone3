import React from 'react';
import RightSideHeader from './RightSideHeader';
import ArchiveButton from './RightSideHeader/ArchiveButton';
import HomeButton from './RightSideHeader/HomeButton';
import { Navbar } from './Header.styles';

const Header = () => {
  return (
    <Navbar>
      <RightSideHeader>
        <ArchiveButton />
        <HomeButton />
      </RightSideHeader>
    </Navbar>
  );
};

export default Header;
