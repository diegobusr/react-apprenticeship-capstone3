import React, { useContext } from 'react';
import Note from './Note';
import EmptyListNotes from './EmptyListNotes';
import { ListDiv, NoNotesDiv } from './ListNotes.styles';
import { GlobalContext } from '../../App/App';

const ListNotes = ({ notes }) => {
  const { searchText } = useContext(GlobalContext).appContext;
  if (notes.length === 0) {
    return (
      <NoNotesDiv>
        <EmptyListNotes />
      </NoNotesDiv>
    );
  }

  return (
    <ListDiv>
      {notes
        .filter((note) => {
          if (searchText === '') return note;
          else if (note.title.toLowerCase().includes(searchText.toLowerCase()))
            return note;
        })
        .map((note, index) => {
          return <Note noteInfo={note} noteIndex={index} key={note.title} />;
        })}
    </ListDiv>
  );
};

export default ListNotes;
