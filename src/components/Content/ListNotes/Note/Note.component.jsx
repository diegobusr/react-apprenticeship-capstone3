import React, { useContext } from 'react';
import { types } from '../../../../utils/reducer';
import { GlobalContext } from '../../../App/App';
import ArchivedNoteButton from './ArchivedNoteButton';
import EditNoteButton from './EditNoteButton';
import { useLocation } from 'react-router-dom';
import {
  NoteView,
  TitleSpan,
  NoteText,
  ButtonsDiv,
  DeleteNoteButton,
} from './Note.styles';

const Note = ({ noteInfo, noteIndex }) => {
  const { title, text, color } = noteInfo;
  const { setAppContext } = useContext(GlobalContext);
  const typeOfNotes = useLocation().pathname;
  const handleDeleteNote = () => {
    setAppContext({
      type: types.REMOVE_NOTE,
      payload: { typeOfNotes, noteInfo },
    });
  };

  return (
    <NoteView color={color}>
      <TitleSpan> {title} </TitleSpan>
      <NoteText>
        <textarea readOnly value={text} />
      </NoteText>
      <ButtonsDiv>
        <DeleteNoteButton onClick={handleDeleteNote}>Delete</DeleteNoteButton>
        <ArchivedNoteButton noteInfo={noteInfo} typeOfNotes={typeOfNotes} />
        <EditNoteButton noteInfo={noteInfo} noteIndex={noteIndex} />
      </ButtonsDiv>
    </NoteView>
  );
};

export default Note;
