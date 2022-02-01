import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundDiv } from './NotFound.styles';

function NotFoundPage() {
  return (
    <NotFoundDiv>
      <Link to="/notes" className="home-link">
        notes page
      </Link>
      <img src="404.gif" alt="page not found" />
    </NotFoundDiv>
  );
}

export default NotFoundPage;
