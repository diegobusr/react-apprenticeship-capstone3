import React, { useContext } from 'react';
import { searchNote } from '../../../../utils/noteComparator';
import { types } from '../../../../utils/reducer';
import { GlobalContext } from '../../../App/App';
import { NoteButtonDiv, AddNoteButton } from './NewNoteButton.styles';

const NewNoteButton = ({ noteInfo }) => {
  const { setAppContext } = useContext(GlobalContext);

  const buttonDisabled = Boolean(!noteInfo.title || searchNote(noteInfo));

  const handleAddNote = () => {
    setAppContext({
      type: types.ADD_NEW_NOTE,
      payload: noteInfo,
    });
  };

  return (
    <NoteButtonDiv>
      <AddNoteButton onClick={handleAddNote} disabled={buttonDisabled}>
        + Add note
      </AddNoteButton>
    </NoteButtonDiv>
  );
};

export default NewNoteButton;
