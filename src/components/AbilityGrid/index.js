import React from 'react'
import { Wrapper, Content } from './AbilityGrid.styles'

const AbilityGrid = ({ children }) => (
  <Wrapper>
    {children.map(ab => (
      <Content key={ab.dname}>
        {ab}
      </Content>
    ))}
  </Wrapper>
);
  
export default AbilityGrid;