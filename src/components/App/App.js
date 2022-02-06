import React, { useReducer } from 'react';
import LoginPage from '../../pages/Login';
import PrivateRouter from '../PrivateRouter';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Private } from '../Private/Private.component';
import { Public } from '../Public/Public.component';
import { localStorageKeys, reducer } from '../../utils/reducer';
import { getStorage } from '../../utils/localstorage';
import { GlobalStyle } from '../../global.styles.js';

export const GlobalContext = React.createContext();

const App = () => {
  const [appContext, setAppContext] = useReducer(reducer, {
    listOfNotes: getStorage(localStorageKeys.NOTES) || [],
    archivedNotes: getStorage(localStorageKeys.ARCHIVED_NOTES) || [],
    globalNoteColor: '#42255E',
    searchText: '',
    isAuthenticated: false,
  });

  const { isAuthenticated } = appContext;

  return (
    <>
      <GlobalContext.Provider value={{ appContext, setAppContext }}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Public
              exact
              path="/login"
              isAuthenticated={isAuthenticated}
              component={LoginPage}
            />
            <Private
              path="/"
              isAuthenticated={isAuthenticated}
              component={PrivateRouter}
            />
          </Switch>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
