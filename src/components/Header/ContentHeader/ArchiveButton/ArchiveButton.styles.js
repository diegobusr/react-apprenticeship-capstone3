import styled from 'styled-components';
import { ArchiveFill } from '@styled-icons/bootstrap/ArchiveFill';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  display: flex;
  flex-direction: row;
  color: white;
  min-width: 30px;
  min-height: 30px;
  align-items: center;
`;

export const CustomButton = styled(ArchiveFill)`
  color: white;
  margin-left: 10px;
  min-width: 30px;
  min-height: 30px;
`;
