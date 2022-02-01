import styled from 'styled-components';

export const NewNoteDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.color};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 33%;
  margin: 15px;
  padding: 5px 5px 5px 5px;
  justify-content: start;

  :hover {
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.1);
  }
`;

export const CloseDivButton = styled.button`
  color: white;
  background-color: #e34d3b;
  border: none;
  border-radius: 5px;
  width: 30%;
`;
