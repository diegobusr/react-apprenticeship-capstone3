import React from 'react';
import { CustomButton, CustomLink } from './HomeButton.styles';

const HomeButton = () => {
  return (
    <CustomLink to={'notes'}>
      <span>Notes</span>
      <CustomButton />
    </CustomLink>
  );
};

export default HomeButton;
