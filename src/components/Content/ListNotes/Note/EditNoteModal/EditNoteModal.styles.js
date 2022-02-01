import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
`;

export const ModalDiv = styled.div`
  position: fixed;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px;
  z-index: 1000;
`;

export const CloseModalButton = styled.button`
  color: white;
  background-color: #e34d3b;
  border: none;
  border-radius: 5px;
  width: 30%;
`;

export const SaveModalButton = styled.button`
  color: white;
  background-color: ${({ disabled }) => (disabled ? 'gray' : '#018001')};
  border: none;
  border-radius: 5px;
  width: 30%;
`;
