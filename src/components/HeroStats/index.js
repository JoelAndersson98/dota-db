import React from 'react'
import { Wrapper, Content } from './HeroStats.styles';
// Config
import { calculateStats } from '../../helpers';
const HeroStats = ({stats}) => {
    const calculatedStats = calculateStats(stats);

    //console.log(calculatedStats);

    return (
        <Wrapper>
            <Content>
                <div className="list">
                    <div className="col">
                        <p>Base Attack: </p>
                        <p>{calculatedStats.attack_min} - {calculatedStats.attack_max}</p>
                    </div>
                    <div className="col">
                        <p>Attack Speed: </p>
                        <p>{stats.attack_rate}</p>
                    </div>
                </div>
                <div className="list">
                    <div className="col">
                        <p>Health: </p>
                        <p>{calculatedStats.health}</p>
                    </div>
                    <div className="col">
                        <p>Health Regen: </p>
                        <p>{calculatedStats.health_regen}</p>
                    </div>
                    <div className="col">
                        <p>Mana: </p>
                        <p>{calculatedStats.mana}</p>
                    </div>
                    <div className="col">
                        <p>Mana Regen: </p>
                        <p>{calculatedStats.mana_regen}</p>
                    </div>
                </div>
                <div className="list">
                    <div className="col">
                        <p>Armor: </p>
                        <p>{calculatedStats.armor}</p>
                    </div>
                    <div className="col">
                        <p>Movement Speed: </p>
                        <p>{stats.move_speed}</p>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default HeroStats;