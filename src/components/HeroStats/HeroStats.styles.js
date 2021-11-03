import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    padding: 1rem;
    text-align: center;
    background-color: var(--blue);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    p {
        color: var(--white);
    }
    @media (min-width: 768px) {
        text-align: start;
    }

    .col {
        margin: 0 auto;
        width: 200px;
        display: flex;
        justify-content: space-between;

        @media (min-width: 768px) {
            margin: 0;
        }
    }
`;