import React from 'react';
import { EmptyNotesDiv } from './EmptyListNotes.styles';

const EmptyListNotes = () => {
  return (
    <EmptyNotesDiv>
      <h3>
        There are no notes; please create a new one using the creation note
        input.
      </h3>
    </EmptyNotesDiv>
  );
};

export default EmptyListNotes;
