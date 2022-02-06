import styled from 'styled-components';
import { Note } from '@styled-icons/boxicons-solid/Note';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  display: flex;
  color: white;
  min-width: 30px;
  min-height: 30px;
  align-items: center;
`;

export const CustomButton = styled(Note)`
  margin-left: 10px;
  color: white;
  min-width: 30px;
  min-height: 30px;
`;
