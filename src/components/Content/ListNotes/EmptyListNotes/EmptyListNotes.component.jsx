import React from 'react';
import { EmptyNotesDiv, EmptyDiv } from './EmptyListNotes.styles';

const EmptyListNotes = ({ children }) => {
  return (
    <EmptyDiv>
      <EmptyNotesDiv>
        <h3> {children} </h3>
      </EmptyNotesDiv>
    </EmptyDiv>
  );
};

export default EmptyListNotes;
