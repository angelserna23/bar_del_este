import React from "react";

// Importar estilos de styled-components
import {
    HeaderInit,
    LogoWrapper,
    StyledLink,
    NavContent,
    ImgLogo,
    Reservar,



} from './styles'

// Importar las imagens/videos/logos
import Logo from '../../assets/img/logo.png';

const Header = () => {
    return(
        <HeaderInit>
                <LogoWrapper href="/">
                    <ImgLogo src={Logo} alt="Logo"/>
                </LogoWrapper>

                <NavContent>
                    <StyledLink to="/">HOME</StyledLink>
                    <StyledLink to="/experience">EXPERIENCIA</StyledLink>
                    <StyledLink to="/gallery">GALERIÁ</StyledLink>
                    <Reservar
                        href="https://wa.me/524491425727?text=Hola%20me%20gustaria%20realizar%20una%20reservacion"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Rerservar WhatsApp
                    </Reservar>
                </NavContent>
        </HeaderInit>
    )
}

export default Header;