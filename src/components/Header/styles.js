import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderInit = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  margin: 3rem 2rem;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    flex-direction: column;
    align-items: stretch;
    padding: 0 1rem;
  }
`;

const LogoWrapper = styled.a`
  width: 20%;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 30%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 22%;
  }
`;

const ImgLogo = styled.img`
  border-radius: 50%;
  width: 100%;
  display: block;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text_title};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.heading};
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    width: 100%;
    padding: 0.5rem 0;
  }
`;

const NavContent = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    position: static;
    width: 100%;
    margin-top: 1rem;
    padding: 1.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.bg2};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    gap: 1.25rem;
    z-index: 20;
  }
`;

const Reservar = styled.a`
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.bg};
  font-weight: 700;
  border-radius: 35px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.wine};
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.5rem 1.25rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: 100%;
    text-align: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuImg = styled.img`
  width: 32px;
  height: 32px;
  display: block;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
    width: auto;
  }
`;

export {
  HeaderInit,
  LogoWrapper,
  StyledLink,
  NavContent,
  ImgLogo,
  Reservar,
  MenuButton,
  MenuImg,
  TopBar,
};