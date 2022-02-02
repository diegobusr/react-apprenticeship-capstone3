import React, { useReducer } from 'react';
import NotesPage from '../../pages/Notes';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import { localStorageKeys, reducer } from '../../utils/reducer';
import { getStorage } from '../../utils/localstorage';
import { GlobalStyle } from '../../global.styles.js';

export const GlobalContext = React.createContext();

const App = () => {
  const [appContext, setAppContext] = useReducer(reducer, {
    listOfNotes: getStorage(localStorageKeys.NOTES) || [],
    archivedNotes: getStorage(localStorageKeys.ARCHIVED_NOTES) || [],
    globalNoteColor: '#42255E',
    typeOfNotes: '',
    searchText: '',
  });

  return (
    <>
      <GlobalContext.Provider value={{ appContext, setAppContext }}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/:typeOfNotes">
              <NotesPage />
            </Route>
            <Redirect to={'/notes'} />
          </Switch>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
