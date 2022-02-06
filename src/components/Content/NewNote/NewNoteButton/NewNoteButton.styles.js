import styled from 'styled-components';

export const NoteButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const AddNoteButton = styled.button`
  color: white;
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'green')};
  border: none;
  border-radius: 5px;
  width: 30%;
`;
