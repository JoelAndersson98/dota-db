import React from 'react'
import { Wrapper, Banner, Blur, Content } from './HeroBanner.styles';
import { IMAGE_BASE_URL } from "../../config";
// Images
import AgiIcon from '../../images/agi_symbol.png';
import StrIcon from '../../images/str_symbol.png';
import IntIcon from '../../images/int_symbol.png';

const HeroBanner = ({ hero }) =>  (

    <Wrapper className="container">
        <Banner backdrop={hero.img}>
            <Blur length={hero.roles.length}>
                <Content>
                    <div className="avatar">
                        <img src={`${IMAGE_BASE_URL}${hero.img}`} alt='hero-img'/>
                        <p className="hero_name">{hero.localized_name}</p>
                    </div>
                    <div className="hero_info">
                        <p>{hero.attack_type} -&nbsp;</p>
                        {hero.roles.map(r => (
                            <p key={r} className="hero_roles">{r},&nbsp;</p>
                        ))}
                        <div className="stat-wrapper">
                            <div className="hero_stats">
                                <div className="stat-box">
                                    <img src={StrIcon} alt='str-icon'/>
                                    <span className=
                                        {hero.primary_attr === "str"
                                        ? "str"
                                        : ""
                                        }>
                                        {hero.base_str} + {hero.str_gain}
                                    </span>
                                    <img src={AgiIcon} alt='agi-icon'/>
                                    <span className=
                                        {hero.primary_attr === "agi"
                                        ? "agi"
                                        : ""
                                        }>
                                        {hero.base_agi} + {hero.agi_gain}
                                    </span>
                                    <img src={IntIcon} alt='int-icon'/>
                                    <span className=
                                        {hero.primary_attr === "int"
                                        ? "int"
                                        : ""
                                        }>
                                        {hero.base_int} + {hero.int_gain}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Blur>
        </Banner>
    </Wrapper>
);

export default HeroBanner;