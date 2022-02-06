import styled from 'styled-components';
import { LogOut } from '@styled-icons/boxicons-solid/LogOut';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  display: flex;
  color: white;
  min-width: 30px;
  min-height: 30px;
  align-items: center;
`;

export const CustomButton = styled(LogOut)`
  margin-left: 10px;
  color: white;
  min-width: 30px;
  min-height: 30px;
`;

export const ContainerDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;
