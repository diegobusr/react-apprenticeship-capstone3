import React, { useRef, useState } from 'react';
import { NoteText } from './NewNoteText.styles';

const NewNoteText = ({ setNoteInfo, text }) => {
  const textRef = useRef(null);
  const [noteText, setNoteText] = useState(text || '');
  const handleTextChange = (e) => {
    const target = e.target;
    if (target.scrollHeight <= 367) {
      textRef.current.style.height = '50px';
      textRef.current.style.height = `${target.scrollHeight}px`;
    }
    setNoteText(e.target.value);
    setNoteInfo((current) => ({ ...current, text: target.value }));
  };

  return (
    <NoteText>
      <textarea
        value={noteText}
        ref={textRef}
        placeholder="Take a note..."
        onChange={handleTextChange}
      />
    </NoteText>
  );
};

export default NewNoteText;
