import React from 'react';
import { CustomButton, CustomLink } from './ArchiveButton.styles';

const ArchiveButton = () => {
  return (
    <CustomLink to={'archived'}>
      <span>Archived</span>
      <CustomButton />
    </CustomLink>
  );
};

export default ArchiveButton;
