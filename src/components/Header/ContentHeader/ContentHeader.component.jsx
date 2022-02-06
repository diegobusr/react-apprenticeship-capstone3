import React from 'react';
import { ContentDiv } from './ContentHeader.styles';

const ContentHeader = ({ children }) => {
  return <ContentDiv>{children}</ContentDiv>;
};

export default ContentHeader;
