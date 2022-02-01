import React, { useContext } from 'react';
import Note from './Note';
import EmptyListNotes from './EmptyListNotes';
import { GlobalContext } from '../../App/App';
import { ListDiv, NoNotesDiv } from './ListNotes.styles';

const ListNotes = ({ notes }) => {
  const { typeOfNotes } = useContext(GlobalContext).appContext;
  const isArchivedPage = Boolean(typeOfNotes === 'archived');

  if (notes.length === 0 && isArchivedPage) {
    return (
      <NoNotesDiv>
        <EmptyListNotes />
      </NoNotesDiv>
    );
  }

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
