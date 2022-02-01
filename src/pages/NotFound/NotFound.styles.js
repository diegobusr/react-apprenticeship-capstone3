import styled from 'styled-components';

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  img {
    width: 25%;
  }

  .home-link {
    font-size: 1rem;
    text-decoration: none;
    display: block;
    text-align: right;
    padding: 0.2rem 0.3rem;
  }

  .home-link::before {
    content: '←';
    padding-right: 0.2rem;
    display: inline-block;
  }
`;
