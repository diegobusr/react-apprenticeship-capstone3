import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../components/App/App';
import Content from '../../components/Content';
import AddNote from '../../components/Content/AddNote';
import ListNotes from '../../components/Content/ListNotes';
import { NotesDiv } from './Notes.styles';

const NotesPage = () => {
  const { typeOfNotes } = useParams();
  const { listOfNotes, archivedNotes } = useContext(GlobalContext).appContext;
  const notes = typeOfNotes === 'archived' ? archivedNotes : listOfNotes;
  return (
    <NotesDiv>
      <AddNote />
      <Content>
        <ListNotes notes={notes} />
      </Content>
    </NotesDiv>
  );
};

export default NotesPage;
