import React, { useState } from "react";

// Importar estilos de styled-components
import {
  HeaderInit,
  LogoWrapper,
  StyledLink,
  NavContent,
  ImgLogo,
  Reservar,
  MenuButton,
  MenuImg,
  TopBar,

} from "./styles";

// Importar imágenes/videos/logos
import Logo from "../../assets/img/logo.png";
import Menu from "../../assets/icons/menu.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<HeaderInit>
  <TopBar>
    <LogoWrapper href="/">
      <ImgLogo src={Logo} alt="Logo" />
    </LogoWrapper>

    <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
      <MenuImg src={Menu} alt="Menú" />
    </MenuButton>
  </TopBar>

  <NavContent $open={menuOpen}>
    <StyledLink to="/" onClick={() => setMenuOpen(false)}>HOME</StyledLink>
    <StyledLink to="/experience" onClick={() => setMenuOpen(false)}>EXPERIENCIA</StyledLink>
    <StyledLink to="/gallery" onClick={() => setMenuOpen(false)}>GALERÍA</StyledLink>
    <Reservar
      href="https://wa.me/524491425727?text=Hola%20me%20gustaria%20realizar%20una%20reservacion"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setMenuOpen(false)}
    >
      Reservar WhatsApp
    </Reservar>
  </NavContent>
</HeaderInit>
  );
};

export default Header;