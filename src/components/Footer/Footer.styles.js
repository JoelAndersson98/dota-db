import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 1px solid #E2E8F0;

    @media (min-width: 768px) {
        margin-top: 5rem;
    }
`;

export const LogoWrapper = styled.div`
  display: grid;
  place-content: center;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 40px;
    }
    p {
        font-size: 18px;
        margin-left: 0.6rem;
        color: var(--white);
        font-weight: 600;

        @media (max-width: 768px) {
            margin-right: 0;
        }
    }
`;

export const Content = styled.div`
    text-align: center;
`;

export const Text = styled.div`
    margin-top: 1.4rem;
    font-size: 16px;
    color: var(--white);

`;

export const Social = styled.div`
    margin-top: 1.2rem;
    display: flex;
    justify-content: center;
    
    a {
        margin-right: 0.8rem;
        color: var(--white);
    }

    .hover {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;

        .popup {
            visibility: hidden;
            width: 120px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            opacity: 0;
            transition: opacity 0.4s;

            /* Position the tooltip */
            position: absolute;
            z-index: 1;
            bottom: 100%;
            left: 50%;
            margin-left: -60px;

            ::after {
                content: " ";
                position: absolute;
                top: 100%; /* At the bottom of the tooltip */
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: black transparent transparent transparent;
            }
        }

        :hover .popup {
            visibility: visible;
            opacity: 1;
        }
    }

`;