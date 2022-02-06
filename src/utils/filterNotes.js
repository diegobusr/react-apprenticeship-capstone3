export const filterNotes = (notes, searchText) => {
  return notes.filter((note) => {
    if (searchText === '') return note;
    else if (note.title.toLowerCase().includes(searchText.toLowerCase()))
      return note;
  });
};
