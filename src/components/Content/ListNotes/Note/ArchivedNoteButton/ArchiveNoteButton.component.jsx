import React, { useContext } from 'react';
import { types } from '../../../../../utils/reducer';
import { GlobalContext } from '../../../../App/App';
import { ArchiveButton } from './ArchiveNoteButton.styles';

const ArchiveNoteButton = ({ noteInfo, noteIndex, typeOfNotes }) => {
  const { setAppContext } = useContext(GlobalContext);

  const handleArchiveNote = () => {
    setAppContext({
      type: types.ARCHIVE_NOTE,
      payload: {
        archivedNoteInfo: noteInfo,
        archivedNoteIndex: noteIndex,
        typeOfNotes,
      },
    });
  };

  return (
    <ArchiveButton onClick={handleArchiveNote}>
      {typeOfNotes === '/notes' ? 'Archive' : 'Unarchive'}
    </ArchiveButton>
  );
};

export default ArchiveNoteButton;
