import styled from "styled-components";

export const Card = styled.div`
`;

export const Content = styled.div`

    .header {
        padding-bottom: 0.6rem;
        align-items: center;
        text-align: center;
        img {
            width: 50px;
            border: 1px solid black;
        }

        h3 {
            color: var(--white);
        }
    }

    .ability-type {
        margin-top: 0.6rem;
        color: var(--white);
        padding-bottom: 0.6rem;
        align-items: center;

        .trg-type {
            color: var(--gold);
        }        
        .dmg-type {
            color: var(--skyBlue);
        }
        .spell-immunity {
            color: ${({ pierce }) => 
            pierce ? 'color: green' : 'color: red'};
        }
    }

    .ability-text, .ability-stats {
        margin-top: 0.6rem;
        color: var(--white);
        padding-bottom: 0.6rem;
    }

    .ability-stats {
        p {
            margin-bottom: 0.2rem;
        }
    }

    .ability-cost {
        display: flex;
        vertical-align: center;

        .cd-box {
            :last-child {
                margin-left: 1.2rem;
            }
            display: flex;
            img {
                width: 20px;
            }

            p {
                color: var(--white);
                margin-left: 0.4rem;
            }
        }
    }
`;