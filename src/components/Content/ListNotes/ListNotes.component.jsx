import React, { useContext } from 'react';
import Note from './Note';
import { filterNotes } from '../../../utils/filterNotes';
import { GlobalContext } from '../../App/App';
import EmptyListNotes from './EmptyListNotes';
import { ListDiv } from './ListNotes.styles';

const ListNotes = ({ notes }) => {
  const { searchText } = useContext(GlobalContext).appContext;
  const filteredNotes = filterNotes(notes, searchText);

  if (filteredNotes.length === 0) {
    return (
      <EmptyListNotes>
        There are no notes with that title. Try another search
      </EmptyListNotes>
    );
  }

  return (
    <ListDiv>
      {filteredNotes.map((note, index) => {
        return <Note noteInfo={note} noteIndex={index} key={note.title} />;
      })}
    </ListDiv>
  );
};

export default ListNotes;
