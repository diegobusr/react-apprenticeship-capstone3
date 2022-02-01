import React, { useState } from 'react';
import { NoteTitle } from './NewNoteTitle.styles';

const NewNoteTitle = ({ setNoteInfo, title }) => {
  const [noteTitle, setNoteTitle] = useState(title || '');

  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
    setNoteInfo((current) => ({ ...current, title: e.target.value }));
  };
  return (
    <NoteTitle>
      <input
        type="text"
        autoFocus
        placeholder="Title"
        value={noteTitle}
        onChange={handleTitleChange}
      />
    </NoteTitle>
  );
};

export default NewNoteTitle;
