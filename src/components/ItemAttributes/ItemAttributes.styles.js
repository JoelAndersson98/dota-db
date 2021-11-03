import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const Content = styled.div`
    text-align: start;

    p {
        color: var(--white);
    }
    h3 {
        color: white;
        font-size: 24px;
        margin-bottom: 0.4rem;
    }
    @media (min-width: 768px) {
        text-align: start;
    }
`;

export const Lore = styled.div`
    margin: 0.4rem 0;
`;

export const Stats = styled.div`

    .stat-box {
        width: 250px;
        display: flex;
        justify-content: space-between;

        @media (min-width: 768px) {
            margin: 0;
        }
    }
`;