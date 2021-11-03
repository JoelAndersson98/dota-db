import React from 'react'
import { Wrapper, Content } from './HeroLore.styles';

const HeroLore = ({lore}) => (
    <Wrapper>
        <Content>
            <h1>Lore</h1>
            <p>{lore}</p>
        </Content>
    </Wrapper>
)

export default HeroLore;