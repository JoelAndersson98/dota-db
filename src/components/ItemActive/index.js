import React from 'react'
import { Wrapper, Content } from './ItemActive.styles'
// Icons
import Manacost from '../../images/manacost_icon.png';
import Cooldown from '../../images/cd_icon.png'

const ItemActive = ({active, notes, mc, cd}) => (
    <Wrapper>
        <Content>
            {active.map(act => (
                <p>{act}</p>
            ))}
            <p className="note">{notes}</p>
            <div className="mp-cd">
                {mc
                ?   <div className="box">
                        <img src={Manacost} alt='mana-cost'/>
                        <p>{mc}</p>
                    </div>
                : ''}
                {cd
                ?   <div className="box">
                        <img src={Cooldown} alt='cooldown'/>
                        <p>{cd}</p>
                    </div>
                : ''
                }
            </div>
        </Content>
    </Wrapper>
);

export default ItemActive;