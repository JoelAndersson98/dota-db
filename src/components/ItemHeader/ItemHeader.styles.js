import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    padding: 2rem 0;
`;

export const Content = styled.div`
    background: var(--darkBlue);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 1rem 0;
    border-radius: 5px;
    max-width: 500px;
    margin: 0 auto;
    img {
        width: 70px;
        border: 1px solid black;
    }

    h2, h3, p {
        color: var(--white);
    }

    .cost {
        margin-top: 0.4rem;
        display: flex;
        justify-content: center;
        img {
            border: none;
            width: 20px;
        }
        p {
            margin-left: 0.4rem;
        }
    }
`;

export const Components = styled.div`

    h3 {
        margin: 0.4rem 0;
    }

    img {
        width: 50px;
        margin-right: 0.4rem;

        :last-child {
            margin-right: 0;
        }
    }
    .wrap {
        display: flex;
        justify-content: center;
    }
`;