import styled from 'styled-components';

export const This = styled.div`
  min-height: 20rem;
  min-width: 30rem;

  display: grid;
  grid:
    'header ...' auto
    'body   toolkit' 1fr /
    1fr auto;

  background: transparent;
`;

export const Header = styled.header`
  grid-area: header;

  height: 3rem;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 2rem 0.5rem;

  color: #fff;

  background: #656565;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const Body = styled.div`
  grid-area: body;

  padding: 1rem;
  display: grid;
  grid:
    'canvas' 1fr
    'palette' auto /
    1fr;
  row-gap: 0.5rem;

  background: #f1f1f2;
  border-radius: 0 0 0.5rem 0.5rem;
`;
