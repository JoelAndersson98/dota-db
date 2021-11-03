import styled from "styled-components";
import { IMAGE_BASE_URL } from "../../config";
export const Wrapper = styled.div`
    position: relative;

    animation: animateThumb 0.7s;
    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Banner = styled.div`
    background: ${({ backdrop }) =>
        backdrop ? `url(${IMAGE_BASE_URL}${backdrop})` : '#ccc'};
    background-size: cover;
    background-position: center;
    max-height: 400px;
    border-radius: 10px;
    max-width: 900px;
    margin: 0 auto;
`;

export const Blur = styled.div`
    backdrop-filter: blur(30px);
    height: 100vh;
    width: 100%;
    border-radius: 10px;
    max-height: ${({length}) =>
        length == 4 ? '340px' 
        : length == 5 ? '360px'
        : length == 6 ? '380px'
        : '320px'
        };
    max-width: 900px;
    @media (min-width: 768px) {
        max-height: 200px;
    }
`;

export const Content = styled.div`
    color: white;

    .avatar {
        display: grid;
        place-content: center;
        padding-top: 1rem;
        @media (min-width: 768px) {
            place-content: start;
            padding-left: 1rem;
        }
    }

    img {
        width: 90px;
        height: 90px;
        border-radius: 10px;
        border: 1px solid black;
    }

    .hero_name {
        font-size: 22px;
        font-weight: 600;
        text-align: center;

        @media (min-width: 768px) {
            text-align: start;
        }
    }

    .hero_info {
        align-items: center;
        text-align: center;

        @media(min-width:768px) {
            display:flex;
            padding-left: 1rem;
        }

        p {
            font-size: 18px;
        }

        p:first-child {
            font-size: 20px;
        }
    }

    .stat-wrapper {
        padding: 1rem 0;

        @media (min-width: 768px) {
            padding: 0;

        }
    }

    .hero_stats {
        
        background-color:rgba(0,0,0,0.3);
        border-radius: 10px;
        max-width: 280px;
        margin: 0 auto;

        @media (min-width: 768px) {
            justify-content: flex-end;
        }

        .stat-box {
            padding: 1rem 0.6rem;
            display: flex;
            
            img {
                width: 20px;
                height: 20px;
            }
            span {
                margin: 0 0.4rem;
            }
        }

        .str {
            color: red;
        }
        .agi {
            color: green;
        }
        .int {
            color: blue;
        }
    }
`;