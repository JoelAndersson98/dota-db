import styled from "styled-components";

export const Header = styled.div`
    border-bottom: 1px solid #E2E8F0;
`;

export const Nav = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  @media (max-width: 768px) {
    justify-content: space-between;
  }

  .nav-link {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--white);

        :hover {
            opacity: 0.9;
        }
    }
  nav {
    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
    }
    li {
      margin-left: 2rem;
      justify-content: space-between;
      font-size: 1em;
    }

    .nav-item {
        margin-left: 2rem;
    }
  }


  @media only screen and (max-width: 768px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 0px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 30px;
        width: 30px;
    }
    p {
        font-size: 18px;
        margin-left: 0.6rem;
        color: var(--white);
        font-weight: 600;
        margin-right: 5rem;

        @media (max-width: 768px) {
            margin-right: 0;
        }
    }
`;

export const BurgerButton = styled.div`
    display: none;
    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: var(--white);

        &.active:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        &.active:nth-child(2) {
            opacity: 0;
        }
        &.active:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
    
    @media only screen and (max-width: 768px) {
        display: inline-block;
        position: absolute;
        top: 17px;
        right: 16px;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;

    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }

    @media only screen and (max-width: 768px) {

    .collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;