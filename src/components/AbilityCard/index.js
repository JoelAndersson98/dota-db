import React from 'react'
import { Card, Content } from './AbilityCard.styles'
// Images
import Manacost from '../../images/manacost_icon.png';
import Cooldown from '../../images/cd_icon.png'
import { IMAGE_BASE_URL } from '../../config';
import { addFallback } from '../../helpers';

const AbilityCard = ({ability}) => {

    return (
    <Card >
        <Content>
            <div className="header">
                <img 
                    src={`${IMAGE_BASE_URL}${ability.img}`} 
                    onError={(e) => {addFallback(e.currentTarget)}}
                    alt='header-img'
                />
                {ability.dname
                ? <h3>{ability.dname.toUpperCase()}</h3>
                : ""
                }
            </div>
            <div className="ability-type">
                {ability.behavior.length < 3
                    ?   <p>Target: {ability.behavior.map(ab => (
                            <span key={ab} className="trg-type">{ab}&nbsp;</span>
                    ))}</p>
                    : <p>Target: <span className="trg-type">{ability.behavior}</span></p>}
                {ability.dmg_type
                    ? <p>Damage Type: <span className="dmg-type">{ability.dmg_type}</span></p>
                    : ''}
                {ability.bkbpierce
                    ? <p>Pierces Spell Immunity: <span className="spell-immunity">{ability.bkbpierce}</span></p>
                    : ''}
            </div>
            <div className="ability-text">
                <p>{ability.desc}</p>
            </div>
            <div className="ability-stats">
                {ability.attrib.map(attrib => (
                    <p key={attrib.key}>{attrib.header}&nbsp;
                    {Array.isArray(attrib.value)
                    ? attrib.value.map(ab => (
                        <span key={ab}>{ab} /&nbsp;</span>
                    ))
                    : <span>{attrib.value}</span>
                    }
                    </p>
                ))}
            </div>
            {ability.mc && ability.cd
            ?   <div className="ability-cost">
                    <div className="cd-box">
                        <img src={Manacost} alt='mana-cost'/>
                        {Array.isArray(ability.mc)
                        ? <p>{ability.mc.map(ab =>(
                            ab+"/"
                        ))}</p>
                        : <p>{ability.mc}</p>}
                    </div>
                    <div className="cd-box">
                        <img src={Cooldown} alt='skill-cooldown'/>
                            {Array.isArray(ability.cd)
                            ? <p>{ability.cd.map(cd =>(
                                cd+"/"
                            ))}</p>
                            : <p>{ability.cd}</p>}
                    </div>
                </div>
            : ''}
        </Content>
    </Card>
    )
};

export default AbilityCard;