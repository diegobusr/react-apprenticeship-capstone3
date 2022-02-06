import React from 'react';
import NotesPage from '../../pages/Notes/Notes.page';
import ArchivedPage from '../../pages/Archived/Archived.page';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddNote from '../Content/AddNote';
import Header from '../Header';

const PrivateRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/notes">
          <AddNote />
          <NotesPage />
        </Route>
        <Route path="/archived" component={ArchivedPage} />
        <Redirect to="/notes" />
      </Switch>
    </>
  );
};

export default PrivateRouter;
