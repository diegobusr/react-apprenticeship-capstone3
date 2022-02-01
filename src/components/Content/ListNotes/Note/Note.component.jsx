import React, { useContext } from 'react';
import { GlobalContext } from '../../../App/App';
import ArchivedNoteButton from './ArchivedNoteButton';
import EditNoteButton from './EditNoteButton';
import { NoteView, TitleSpan, NoteText, ButtonsDiv } from './Note.styles';

const Note = ({ noteInfo, noteIndex }) => {
  const { title, text, color } = noteInfo;
  const { typeOfNotes } = useContext(GlobalContext).appContext;
  const isNotArchivedPage = Boolean(typeOfNotes !== 'archived');

  return (
    <NoteView color={color}>
      <TitleSpan> {title} </TitleSpan>
      <NoteText>
        <textarea readOnly value={text} />
      </NoteText>
      <ButtonsDiv>
        {isNotArchivedPage && (
          <ArchivedNoteButton noteInfo={noteInfo} noteIndex={noteIndex} />
        )}
        {isNotArchivedPage && (
          <EditNoteButton noteInfo={noteInfo} noteIndex={noteIndex} />
        )}
      </ButtonsDiv>
    </NoteView>
  );
};

export default Note;
