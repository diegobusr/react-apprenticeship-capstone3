import React, { useContext } from 'react';
import { GlobalContext } from '../../../App/App';
import { EmptyNotesDiv } from './EmptyListNotes.styles';

const EmptyListNotes = () => {
  const { typeOfNotes } = useContext(GlobalContext).appContext;
  return (
    <EmptyNotesDiv>
      {typeOfNotes === 'notes' && (
        <h3>
          There are no notes; please create a new one using the creation note
          input.
        </h3>
      )}
      {typeOfNotes === 'archived' && <h3>There are no archived notes</h3>}
    </EmptyNotesDiv>
  );
};

export default EmptyListNotes;
