import React, { useContext } from 'react';
import { GlobalContext } from '../../components/App/App';
import Content from '../../components/Content';
import ListNotes from '../../components/Content/ListNotes';
import EmptyListNotes from '../../components/Content/ListNotes/EmptyListNotes';
import { NotesDiv } from './Notes.styles';

const NotesPage = () => {
  const { listOfNotes: notes } = useContext(GlobalContext).appContext;

  const isThereNotes = Boolean(notes.length);
  if (!isThereNotes) {
    return (
      <EmptyListNotes>
        There are no notes; please create a new one using the creation note
        input
      </EmptyListNotes>
    );
  }

  return (
    <NotesDiv>
      <Content>
        <ListNotes notes={notes} />
      </Content>
    </NotesDiv>
  );
};

export default NotesPage;
