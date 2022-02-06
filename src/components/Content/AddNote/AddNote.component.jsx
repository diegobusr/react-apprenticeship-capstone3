import React, { useState } from 'react';
import NewNote from '../NewNote';
import { AddNoteDiv, AddDiv } from './AddNote.styles';

const AddNote = () => {
  const [addingNote, setAddingNote] = useState(false);

  const handleToggleNewNote = () => setAddingNote((current) => !current);

  if (addingNote) {
    return <NewNote onClose={handleToggleNewNote} />;
  }
  return (
    <AddDiv>
      <AddNoteDiv onClick={handleToggleNewNote}>
        <span> Take a note.. </span>
      </AddNoteDiv>
    </AddDiv>
  );
};

export default AddNote;
