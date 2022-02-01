import React from 'react';
import ArchivedNoteButton from './ArchivedNoteButton';
import EditNoteButton from './EditNoteButton';
import { NoteView, TitleSpan, NoteText, ButtonsDiv } from './Note.styles';

const Note = ({ noteInfo, noteIndex }) => {
  const { title, text, color } = noteInfo;

  return (
    <NoteView color={color}>
      <TitleSpan> {title} </TitleSpan>
      <NoteText>
        <textarea readOnly value={text} />
      </NoteText>
      <ButtonsDiv>
        <ArchivedNoteButton noteInfo={noteInfo} noteIndex={noteIndex} />
        <EditNoteButton noteInfo={noteInfo} noteIndex={noteIndex} />
      </ButtonsDiv>
    </NoteView>
  );
};

export default Note;
