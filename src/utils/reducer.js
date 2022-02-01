/* eslint-disable no-case-declarations */
import { setStorage } from './localstorage';

export const localStorageKeys = {
  NOTES: 'notes',
  ARCHIVED_NOTES: 'archivedNotes',
};

export const types = {
  ADD_NEW_NOTE: 'ADD_NEW_NOTE',
  CHANGE_NOTE_COLOR: 'CHANGE_NOTE_COLOR',
  EDIT_NOTE: 'EDIT_NOTE',
  ARCHIVE_NOTE: 'ARCHIVE_NOTE',
};
export const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_NEW_NOTE:
      if (
        state.listOfNotes.filter((note) => {
          return note.title === action.payload.title;
        }).length > 0
      ) {
        return {
          ...state,
        };
      }
      const newState = {
        ...state,
        listOfNotes: [action.payload, ...state.listOfNotes],
      };

      setStorage(localStorageKeys.NOTES, newState.listOfNotes);
      return newState;

    case types.CHANGE_NOTE_COLOR:
      return {
        ...state,
        globalNoteColor: action.payload,
      };
    case types.EDIT_NOTE:
      const { noteEditInfo, noteIndex } = action.payload;
      const editedArray = state.listOfNotes.map((note, index) =>
        index === noteIndex ? noteEditInfo : note
      );
      const editedState = {
        ...state,
        listOfNotes: editedArray,
      };
      setStorage(localStorageKeys.NOTES, editedState.listOfNotes);
      return editedState;
    case types.ARCHIVE_NOTE:
      const { archivedNoteInfo, archivedNoteIndex } = action.payload;
      const modifiedArray = state.listOfNotes.filter((note, index) => {
        return index !== archivedNoteIndex;
      });

      state.archivedNotes.push(archivedNoteInfo);

      const modifiedState = {
        ...state,
        listOfNotes: modifiedArray,
        archivedNotes: state.archivedNotes,
      };
      setStorage(localStorageKeys.NOTES, modifiedState.listOfNotes);
      setStorage(localStorageKeys.ARCHIVED_NOTES, modifiedState.archivedNotes);
      return modifiedState;

    default:
      return state;
  }
};
