import React, { useState, useContext } from 'react';
import { NoteColorDiv } from './NewNoteColor.styles';
import { presetColors } from '../../../../utils/presetColors';
import { GlobalContext } from '../../../App/App';
import { types } from '../../../../utils/reducer';

const NewNoteColor = ({ setNoteInfo, color }) => {
  const [noteColor, setNoteColor] = useState(color || '#42255E');
  const { setAppContext } = useContext(GlobalContext);

  const handleColorChange = (e) => {
    setNoteColor(e.target.value);
    setAppContext({
      type: types.CHANGE_NOTE_COLOR,
      payload: e.target.value,
    });
    setNoteInfo((current) => ({ ...current, color: e.target.value }));
  };

  return (
    <NoteColorDiv>
      <span>color: </span>
      <input
        type="color"
        value={noteColor}
        onChange={handleColorChange}
        list="presetColors"
      />
      <datalist id="presetColors">
        {presetColors.map((color) => (
          <option key={color}>{color}</option>
        ))}
      </datalist>
    </NoteColorDiv>
  );
};

export default NewNoteColor;
