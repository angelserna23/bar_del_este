import styled from "styled-components";

const MainPresentation = styled.main`
    margin: 0 8rem;
    margin-bottom: 2rem;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        margin: 0 3rem;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin: 0 1rem;
    }
`;

const TitlePresentation = styled.h2`
    font-family: ${({theme}) => theme.fonts.heading};
    color: ${({theme}) => theme.colors.text_title};
    font-weight: 500;
    border-bottom: 1px solid #2a2a2a;
    margin-bottom: 2rem;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        text-align: center;
    }
`;

const TextPresentation = styled.p`
    margin: 0;
    font-family: ${({theme}) => theme.fonts.heading};
    color: ${({theme}) => theme.colors.mutedText};
    font-size: ${({theme}) => theme.fontSizes.lg};
    text-align: justify;
`;

const ArticlePresentation = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
    box-sizing: border-box;
    align-items: center;
    margin: 0 10rem;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        margin: 0 1rem;
        flex-direction: row-reverse;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
    }

`;

const DivPresentation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const ImgPresentation = styled.img`
    width: 30%;
    opacity: .8;
    border-radius: 14px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 35%;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        width: 80%;
    }
`;

const ButtonPresentation = styled.button`
    background-color: transparent;
    border: 1px solid #c0ad82;
    color: ${({theme}) => theme.colors.text_title};
    border-radius: 18px;
    padding: 0 3rem;
    font-family: ${({theme}) => theme.fonts.heading};
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSizes.xl};
    cursor: pointer;
    margin-right: 15rem;
    transition: all 0.3s ease;
    margin-top: 2rem;
    margin-bottom: 1rem;

    &:hover {
        color: ${({theme}) =>  theme.colors.text};
        background-color: ${({theme}) =>  theme.colors.gold};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin-right: 2rem;
    }
`;

const Divider = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto 0;
    position: relative;
    height: 1px;

    /* línea */
    background: linear-gradient(
    to right,
    transparent,
    rgba(198, 161, 91, 0.25),
    rgba(198, 161, 91, 0.6),
    rgba(198, 161, 91, 0.25),
    transparent
    );

    /* rombito al centro */
    &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%) rotate(45deg);
    background: rgba(198, 161, 91, 0.9);
    box-shadow: 0 0 10px rgba(198, 161, 91, 0.35);
    }
`;

/*-----------------Informacion de Nuestra Historia----------------------------*/

const Historia = styled.div`
    margin: 0 8rem;
    margin-bottom: 4rem;

    max-height: ${({ $open }) => ($open ? "2000px" : "0")};
    opacity: ${({ $open }) => ($open ? "1" : "0")};
    overflow: hidden;
    transition: all 0.6s ease;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        margin: 0 2rem;
    }
`;

const InfoHistoria = styled.div`

`;

const InfoTitle = styled.h3`
    color: #dfae53;
    font-family: ${({theme}) => theme.fonts.heading};
    font-size: 2rem;
    margin: 0;
    border-bottom: 1px solid #2a2a2a;
    text-align: left;
`;

const InfoText = styled.p`
    margin: 0;
    margin-top: 1rem;
    font-family: ${({theme}) => theme.fonts.heading};
    color: ${({theme}) => theme.colors.mutedText};
    font-size: ${({theme}) => theme.fontSizes.md};
    text-align: justify;
`;

export {
    MainPresentation,
    TitlePresentation,
    TextPresentation,
    ArticlePresentation,
    ImgPresentation,
    DivPresentation,
    ButtonPresentation,
    Historia,
    InfoHistoria,
    InfoTitle,
    InfoText,
    Divider,
    
}