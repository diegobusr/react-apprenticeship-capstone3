import { getStorage } from './localstorage';
import { localStorageKeys } from './reducer';

export const searchNote = (newNote, newNoteIndex) => {
  const listOfNotes = getStorage(localStorageKeys.NOTES) || [];
  return (
    listOfNotes.filter((note, index) => {
      if (index === newNoteIndex) return false;
      return note.title === newNote.title ? true : false;
    }).length > 0
  );
};
