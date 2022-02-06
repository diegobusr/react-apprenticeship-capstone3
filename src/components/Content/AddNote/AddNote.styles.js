import styled from 'styled-components';

export const AddDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AddNoteDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #42245e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 25%;
  margin: 10px 15px 0 15px;
  padding: 5px 10px 0 10px;
  justify-content: start;

  :hover {
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.1);
  }
`;
