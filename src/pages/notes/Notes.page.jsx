import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../components/App/App';
import Content from '../../components/Content';
import AddNote from '../../components/Content/AddNote';
import ListNotes from '../../components/Content/ListNotes';
import { types } from '../../utils/reducer';
import { NotesDiv } from './Notes.styles';

const NotesPage = () => {
  const { typeOfNotes } = useParams();
  const { listOfNotes, archivedNotes } = useContext(GlobalContext).appContext;
  const { setAppContext } = useContext(GlobalContext);
  const notes = typeOfNotes === 'archived' ? archivedNotes : listOfNotes;

  useEffect(() => {
    setAppContext({
      type: types.TYPE_OF_NOTES,
      payload: typeOfNotes,
    });
  }, [typeOfNotes]);

  return (
    <NotesDiv>
      {typeOfNotes === 'notes' && <AddNote />}
      <Content>
        <ListNotes notes={notes} />
      </Content>
    </NotesDiv>
  );
};

export default NotesPage;
