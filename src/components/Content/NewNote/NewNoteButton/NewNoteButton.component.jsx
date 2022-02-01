import React, { useContext } from 'react';
import { types } from '../../../../utils/reducer';
import { GlobalContext } from '../../../App/App';
import { NoteButtonDiv, AddNoteButton } from './NewNoteButton.styles';

const NewNoteButton = ({ noteInfo }) => {
  const { setAppContext } = useContext(GlobalContext);

  const buttonDisabled = Boolean(!noteInfo.title);

  const handleAddNote = () => {
    setAppContext({
      type: types.ADD_NEW_NOTE,
      payload: noteInfo,
    });
  };

  return (
    <NoteButtonDiv>
      <AddNoteButton onClick={handleAddNote} disabled={buttonDisabled}>
        + add note
      </AddNoteButton>
    </NoteButtonDiv>
  );
};

export default NewNoteButton;
