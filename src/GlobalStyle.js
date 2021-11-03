import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --gold: #FFD780;
        --grey: #97979C;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --skyBlue: #4A85B7;
        --lightBlue: #36384A;
        --blue: #272836;
        --darkBlue: #1f212b;
        --abyssBlue: #1c1c24;
        --fontBig: 1.5rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    h1 {
        color: var(--white);
    }

    a {
        text-decoration: none;
    }

    p {
        font-size: 18px;
    }

    body {
        background: var(--abyssBlue);
    }

    .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .d-flex {
        display: flex;
    }

    .text-center {
        text-align: center;
    }
    .padding-sm {
        padding: 1rem 0;
    }
    .padding-med {
        padding: 2rem 0;
    }
    .margin {
        margin-top: 1rem;
    }
    @media (min-width: 768px) {
        .text-center {
            text-align: start;
        }
    }

    

    @media (min-width: 576px) { .container {max-width: 540px; } }
    @media (min-width: 768px) { .container {max-width: 720px; } }
    @media (min-width: 992px) { .container {max-width: 960px; } }
    @media (min-width: 1200px) { .container {max-width: 1140px; } }
    @media (min-width: 1400px) { .container {max-width: 1320px; } }
`;

export default GlobalStyle;