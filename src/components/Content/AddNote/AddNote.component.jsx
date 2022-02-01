import React, { useState } from 'react';
import NewNote from '../NewNote';
import { AddNoteDiv } from './AddNote.styles';

const AddNote = () => {
  const [addingNote, setAddingNote] = useState(false);

  const handleToggleNewNote = () => setAddingNote((current) => !current);

  if (addingNote) {
    return <NewNote onClose={handleToggleNewNote} />;
  }
  return (
    <AddNoteDiv onClick={handleToggleNewNote}>
      <span> Take a note.. </span>
    </AddNoteDiv>
  );
};

export default AddNote;
