import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;

`;

export const Content = styled.div`
    text-align: center;

    p {
        color: var(--white);
        margin-top: 0.4rem;
    }
    @media (min-width: 768px) {
        text-align: start;
    }
`;