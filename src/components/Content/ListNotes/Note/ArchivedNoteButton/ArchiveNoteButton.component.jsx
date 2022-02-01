import React, { useContext } from 'react';
import { types } from '../../../../../utils/reducer';
import { GlobalContext } from '../../../../App/App';
import { ArchiveButton } from './ArchiveNoteButton.styles';

const ArchiveNoteButton = ({ noteInfo, noteIndex }) => {
  const { setAppContext } = useContext(GlobalContext);

  const handleArchiveNote = () => {
    setAppContext({
      type: types.ARCHIVE_NOTE,
      payload: { archivedNoteInfo: noteInfo, archivedNoteIndex: noteIndex },
    });
  };

  return <ArchiveButton onClick={handleArchiveNote}> Archive </ArchiveButton>;
};

export default ArchiveNoteButton;
