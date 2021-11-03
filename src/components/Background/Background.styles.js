import styled from "styled-components";

export const Content = styled.div`
    background: var(--darkBlue);
    max-width: 100%;
    margin-top: 2rem;
    border-radius: 5px;

    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;

    @media (min-width: 576px) { max-width: 540px; } 
    @media (min-width: 768px) { max-width: 720px; } 
    @media (min-width: 992px) { max-width: 960px; } 
    @media (min-width: 1200px) { max-width: 1140px; } 
    @media (min-width: 1400px) { max-width: 1320px; } 
`;