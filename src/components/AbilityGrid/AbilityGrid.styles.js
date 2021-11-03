import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    padding: 1rem 0;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const Content = styled.div`
  padding: 1rem;
  background-color: var(--blue);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  animation: animateThumb 0.7s;
    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;