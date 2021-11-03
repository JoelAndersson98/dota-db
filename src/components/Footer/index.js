import React from 'react'
import { Wrapper, Content, Logo, LogoWrapper, Text, Social } from './Footer.styles';
// Logo
import DotaLogo from '../../images/dotalogo.png';

const Footer = () => (
    <Wrapper>
        <Content className="container">
            <LogoWrapper>
                <Logo>
                    <img src={DotaLogo} alt='dota-logo'/>
                    <p>DOTA DB</p>
                </Logo>
            </LogoWrapper>
            <Text>
                <p>Dota DB is a database of heroes and items from <strong>Dota 2</strong>, powered by the <a href="https://www.opendota.com/" target="_blank" rel="noreferrer">OpenDota</a> API.
                    The main purpose of this site was to learn ReactJS.</p>
                <Social>
                    <a href="https://github.com/JoelAndersson98" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a>
                    <div className="hover">
                        <i className="fab fa-discord fa-2x"></i>
                        <div className="popup">Kloudish#0001</div>
                    </div>
                </Social>
            </Text>
        </Content>
    </Wrapper>
);

export default Footer;