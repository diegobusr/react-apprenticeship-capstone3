import React from 'react';
import LeftSideHeader from './LeftSideHeader';
import RightSideHeader from './RightSideHeader';
import ArchiveButton from './RightSideHeader/ArchiveButton';
import HomeButton from './RightSideHeader/HomeButton';
import { Navbar } from './Header.styles';

const Header = () => {
  return (
    <Navbar>
      <LeftSideHeader></LeftSideHeader>
      <RightSideHeader>
        <ArchiveButton />
        <HomeButton />
      </RightSideHeader>
    </Navbar>
  );
};

export default Header;
