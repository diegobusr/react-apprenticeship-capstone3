import React, { useContext } from 'react';
import { auth } from '../../../../utils/firebase';
import { types } from '../../../../utils/reducer';
import { GlobalContext } from '../../../App/App';
import { CustomButton, CustomLink, ContainerDiv } from './LogoutButton.styles';

const LogoutButton = () => {
  const { setAppContext } = useContext(GlobalContext);

  const logout = () => {
    auth.signOut();
    setAppContext({
      type: types.IS_AUTHENTICATED,
      payload: false,
    });
  };

  return (
    <ContainerDiv>
      <CustomLink onClick={logout} to="/login">
        <span>Logout</span>
        <CustomButton />
      </CustomLink>
    </ContainerDiv>
  );
};

export default LogoutButton;
