import styled from 'styled-components';

export const NoteView = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.color};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 22%;
  min-height: 150px;
  margin: 15px;
  flex-direction: row;
  padding: 5px 10px 5px 10px;

  :hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const NoteText = styled.div`
  width: 100%;

  textarea {
    line-height: 1.6;
    font-weight: 400;
    font-family: sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0 0 0 0%);
    font-size: 0.9em;
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    resize: none;
    min-height: 140px;
    width: 100%;
  }
`;

export const TitleSpan = styled.span`
  font-size: 1em;
  font-weight: bold;
`;

export const ButtonsDiv = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const DeleteNoteButton = styled.button`
  color: white;
  background-color: #e34d3b;
  border: none;
  border-radius: 5px;
  width: 25%;
`;
