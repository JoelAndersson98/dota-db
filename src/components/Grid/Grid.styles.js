import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: var(--maxWidth);

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  grid-gap: 2rem;
  @media(min-width:768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;
