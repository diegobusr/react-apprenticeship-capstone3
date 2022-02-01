import styled from 'styled-components';

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
    overflow: hidden;
    min-height: 250px;
    width: 100%;
  }
`;
