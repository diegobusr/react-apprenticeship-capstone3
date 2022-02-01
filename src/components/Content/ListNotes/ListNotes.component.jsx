import React from 'react';
import Note from './Note';
import EmptyListNotes from './EmptyListNotes';
import { ListDiv, NoNotesDiv } from './ListNotes.styles';

const ListNotes = ({ notes }) => {
  if (notes.length === 0) {
    return (
      <NoNotesDiv>
        <EmptyListNotes />
      </NoNotesDiv>
    );
  }

  return (
    <ListDiv>
      {notes.map((item, index) => {
        return <Note noteInfo={item} noteIndex={index} key={item.title} />;
      })}
    </ListDiv>
  );
};

export default ListNotes;
