import { getStorage } from './localstorage';
import { localStorageKeys } from './reducer';

export const searchNote = (newNote) => {
  const listOfNotes = getStorage(localStorageKeys.NOTES) || [];
  const listOfArchivedNotes = getStorage(localStorageKeys.ARCHIVED_NOTES) || [];
  let globalNotes = listOfNotes.concat(listOfArchivedNotes);
  return (
    globalNotes.filter((note) => {
      return note.title === newNote.title ? true : false;
    }).length > 0
  );
};
