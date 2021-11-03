import styled from "styled-components";

export const Wrapper = styled.div`
    padding-bottom: 1rem
`;

export const Content = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    text-align: start;
    background-color: var(--blue);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    p {
        color: var(--white);
    }

    .note {
        margin-top: 0.6rem;
    }

    .mp-cd {
        display: flex;
        margin-top: 0.6rem;

        img {
            width: 20px;
        }

        .box {
            display: flex;
            margin-right: 1rem;

            :last-child {
                margin: 0;
            }

            p {
                margin-left: 0.4rem;
            }
        }
    }
`;