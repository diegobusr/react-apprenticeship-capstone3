import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const Private = ({ component: Component, isAuthenticated, rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
