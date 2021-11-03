import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    color: var(--white);
    a {
        text-decoration: none;
        color: white;
    }  
`;

export const Image = styled.img`
    height: ${({ type }) =>
        type = "hero"
        ? "70px"
        : "50px"};
    width: 100%;
    border-radius: 10px;
    transition: all 0.3s;
    object-fit: cover;
    animation: animateThumb 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;