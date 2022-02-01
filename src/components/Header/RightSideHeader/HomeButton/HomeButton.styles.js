import styled from 'styled-components';
import { HouseFill } from '@styled-icons/bootstrap/HouseFill';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  display: flex;
  color: white;
  min-width: 30px;
  min-height: 30px;
`;

export const CustomButton = styled(HouseFill)`
  margin-left: 10px;
  color: white;
  min-width: 30px;
  min-height: 30px;
`;
