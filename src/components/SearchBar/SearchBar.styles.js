import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: transparent;
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  height: 45px;
  background: var(--darkBlue);
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid var(--grey);
  color: var(--white);

  i {
    position: absolute;
    left: 10px;
    top: 14px;
    width: 20px;
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 3px 0;
    padding: 0 0 0 40px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }
  }
`;
