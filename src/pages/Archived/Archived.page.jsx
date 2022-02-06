import React, { useContext } from 'react';
import { GlobalContext } from '../../components/App/App';
import Content from '../../components/Content';
import ListNotes from '../../components/Content/ListNotes';
import EmptyListNotes from '../../components/Content/ListNotes/EmptyListNotes';
import { NotesDiv } from './Archived.styles';

const ArchivedPage = () => {
  const { archivedNotes: notes } = useContext(GlobalContext).appContext;

  const isThereNotes = Boolean(notes.length);
  if (!isThereNotes) {
    return <EmptyListNotes>There are no archived notes</EmptyListNotes>;
  }

  return (
    <NotesDiv>
      <Content>
        <ListNotes notes={notes} />
      </Content>
    </NotesDiv>
  );
};

export default ArchivedPage;
