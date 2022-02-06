import React, { useContext, useState } from 'react';
import { login } from '../../utils/firebase';
import Message from './Message';
import { errors } from '../../utils/presetErrors';
import { GlobalContext } from '../../components/App/App';
import { types } from '../../utils/reducer';
import {
  LoginDiv,
  UsernameInput,
  PasswordInput,
  LoginTitle,
  UsernameLabel,
  PasswordLabel,
  InputDiv,
  LoginButton,
} from './login.styles';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);
  const onChangeUsernameInput = (e) => setUsername(e.target.value);
  const onChangePasswordInput = (e) => setPassword(e.target.value);

  const { setAppContext } = useContext(GlobalContext);

  const signIn = (e) => {
    if (!username || !password) {
      setError(errors.EMPTY_INPUTS);
      return;
    }
    setIsSubmiting(true);
    setError('');
    e.preventDefault();
    login(username, password)
      .then(() => {
        setAppContext({
          type: types.IS_AUTHENTICATED,
          payload: true,
        });
      })
      .catch(() => {
        setError(errors.INVALID_INPUTS);
      });
    setIsSubmiting(false);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') signIn(e);
  };

  return (
    <LoginDiv onKeyPress={handleEnterPress}>
      <LoginTitle>Sign In</LoginTitle>
      <Message message={error} />
      <InputDiv>
        <UsernameLabel>Username</UsernameLabel>
        <UsernameInput
          autoFocus
          value={username}
          type="text"
          onChange={(e) => onChangeUsernameInput(e)}
        />
        <PasswordLabel>Password</PasswordLabel>
        <PasswordInput
          value={password}
          type="password"
          onChange={(e) => onChangePasswordInput(e)}
        />
      </InputDiv>
      <LoginButton onClick={signIn} disabled={isSubmiting}>
        <h3>Login</h3>
      </LoginButton>
    </LoginDiv>
  );
};

export default LoginPage;
