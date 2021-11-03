import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Content } from './SearchBar.styles'

const SearchBar = ({setSearchTerm, placeholderText}) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

    useEffect(() => {
      if (initial.current) {
        initial.current = false;
        return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);


    return (
      <Wrapper className="container">
        <Content>
          <i className="fas fa-search"></i>
          <input
            type='text'
            placeholder={placeholderText}
            onChange={event => setState(event.currentTarget.value)}
            value={state}
          />
        </Content>
      </Wrapper>
    )
};

export default SearchBar;