import styled from 'styled-components';

export const LoginDiv = styled.div`
  padding-bottom: 50px;
  position: fixed;
  min-width: 20%;
  min-height: 45%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #42255e;
  border-radius: 5px;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
`;

export const UsernameInput = styled.input`
  width: 70%;
  font-size: 0.9em;
  padding: 10px;
  background-color: #703b9c;
  color: white;
  border: none;
  outline: none;
  margin-bottom: 5px;
  border-radius: 5px;

  ::placeholder {
    color: #cfcccc96;
  }
`;

export const PasswordInput = styled.input`
  width: 70%;
  font-size: 0.9em;
  padding: 10px;
  background-color: #703b9c;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;

  ::placeholder {
    color: #cfcccc96;
  }
`;

export const LoginTitle = styled.h2`
  color: white;
  font-size: 1.8em;
`;

export const UsernameLabel = styled.label`
  color: white;
  font-size: 1em;
`;

export const PasswordLabel = styled.label`
  color: white;
  font-size: 1em;
`;

export const LoginButton = styled.button`
  color: white;
  background-color: ${({ disabled }) => (disabled ? 'gray' : '#703b9c')};
  border: none;
  border-radius: 5px;
  width: 20%;
  min-width: 70px;
`;
