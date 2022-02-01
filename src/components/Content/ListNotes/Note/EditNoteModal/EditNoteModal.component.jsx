import React, { useState, useContext } from 'react';
import ReactDom from 'react-dom';
import { searchNote } from '../../../../../utils/noteComparator';
import { types } from '../../../../../utils/reducer';
import { GlobalContext } from '../../../../App/App';
import NewNoteColor from '../../../NewNote/NewNoteColor';
import NewNoteText from '../../../NewNote/NewNoteText';
import NewNoteTitle from '../../../NewNote/NewNoteTitle';
import { ButtonsDiv } from '../Note.styles';

import {
  ModalOverlay,
  ModalDiv,
  CloseModalButton,
  SaveModalButton,
} from './EditNoteModal.styles';

const EditNoteModal = ({ open, onClose, noteInfo, noteIndex }) => {
  const { setAppContext } = useContext(GlobalContext);
  const [noteEditInfo, setNoteEditInfo] = useState({
    title: noteInfo.title,
    text: noteInfo.text,
    color: noteInfo.color,
  });

  const { title, text, color } = noteEditInfo;

  const handleClickSave = () => {
    setAppContext({
      type: types.EDIT_NOTE,
      payload: { noteEditInfo, noteIndex },
    });
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) onClose();
  };

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <ModalOverlay onKeyDown={handleKeyDown}>
        <ModalDiv color={color}>
          <NewNoteTitle title={title} setNoteInfo={setNoteEditInfo} />
          <NewNoteText text={text} setNoteInfo={setNoteEditInfo} />
          <NewNoteColor color={color} setNoteInfo={setNoteEditInfo} />
          <ButtonsDiv>
            <CloseModalButton onClick={onClose}>close</CloseModalButton>
            <SaveModalButton
              disabled={searchNote(noteEditInfo, noteIndex) || title === ''}
              onClick={handleClickSave}
            >
              save
            </SaveModalButton>
          </ButtonsDiv>
        </ModalDiv>
      </ModalOverlay>
    </>,
    document.getElementById('portal')
  );
};

export default EditNoteModal;
