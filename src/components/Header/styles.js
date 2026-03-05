import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderInit = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    margin-top: 2rem;
    margin-bottom: 2rem;

    /*Breakpoints*/
    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        display: flex;
        flex-direction: column;
    }

`;

const LogoWrapper = styled.a`
    width: 8%;
    cursor: pointer;

    /*Breakpoints*/
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 13%;
    }
    
    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        width: 30%;
    }
`;

const ImgLogo = styled.img`
    border-radius: 50%;
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.text_title};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.heading};
    cursor: pointer;
    text-align: center;
    transition: all 0.3 ease;

    &:hover {
        color: ${({ theme }) => theme.colors.gold};
    }

    /*Breakpoints*/
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
`;

const NavContent = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 8rem;
    margin-left: 3rem;
    box-sizing: border-box;
    align-items: center;

    /*Breakpoints*/
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        gap: 1.5rem;
        margin-left: 1.5rem;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        display: flex;
        flex-direction: column;
        margin-left: 0;
    }`;
    

const Reservar = styled.a`
    padding: 1rem 4rem;
    background-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.bg};
    font-weight: 700;
    border-radius: 35px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadows.soft};

    &:hover {
        background-color: ${({ theme }) => theme.colors.wine};
        color: ${({ theme }) => theme.colors.text};
        transform: translateY(-2px);
    }

    /*Breakpoints*/
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        padding: .5rem 1.25rem;
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
`;


export {
    HeaderInit,
    LogoWrapper,
    StyledLink,
    NavContent,
    ImgLogo,
    Reservar,


}