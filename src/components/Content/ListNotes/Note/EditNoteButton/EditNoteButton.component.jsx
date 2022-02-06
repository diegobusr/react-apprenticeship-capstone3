import React, { useState } from 'react';
import EditNoteModal from '../EditNoteModal';

import { NoteButton } from './EditNoteButton.styles';

const EditNoteButton = ({ noteInfo, noteIndex }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleAddNote = () => {
    setModalIsOpen((current) => !current);
  };
  const handleCloseModal = () => setModalIsOpen((current) => !current);

  return (
    <>
      <NoteButton onClick={handleAddNote}>Edit</NoteButton>
      <EditNoteModal
        noteInfo={noteInfo}
        noteIndex={noteIndex}
        open={modalIsOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default EditNoteButton;
