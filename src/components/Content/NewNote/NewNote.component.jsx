import React, { useState, useContext } from 'react';
import NewNoteTitle from './NewNoteTitle';
import NewNoteText from './NewNoteText';
import NewNoteColor from './NewNoteColor';
import NewNoteButton from './NewNoteButton';
import { GlobalContext } from '../../App/App';
import { NewNoteDiv, CloseDivButton, NoteDiv } from './NewNote.styles';
import { ButtonsDiv } from '../ListNotes/Note/Note.styles';

const NewNote = ({ onClose }) => {
  const [noteInfo, setNoteInfo] = useState({
    title: '',
    text: '',
    color: '#42255E',
  });

  const { text, color } = noteInfo;
  const { globalNoteColor } = useContext(GlobalContext).appContext;

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) onClose();
  };

  return (
    <NoteDiv>
      <NewNoteDiv onKeyDown={handleKeyDown} color={globalNoteColor}>
        <NewNoteTitle setNoteInfo={setNoteInfo} />
        <NewNoteText text={text} setNoteInfo={setNoteInfo} />
        <NewNoteColor color={color} setNoteInfo={setNoteInfo} />
        <ButtonsDiv>
          <CloseDivButton onClick={onClose}>Close</CloseDivButton>
          <NewNoteButton noteInfo={noteInfo} />
        </ButtonsDiv>
      </NewNoteDiv>
    </NoteDiv>
  );
};

export default NewNote;
