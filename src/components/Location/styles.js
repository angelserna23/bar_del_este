import styled from "styled-components";

const MainLocation = styled.main`

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

const TitleLocation = styled.h2`
    color: ${({theme}) => theme.colors.text_title};
    text-align: center;
    font-size: 1.6rem;
    font-family: ${({theme}) => theme.fonts.heading};

    /*Breakpoints*/
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: 1.6rem;
    }
`;

const MapWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`;

const Maps = styled.iframe`
    border: none;
    border-radius: 15px;
    opacity: .8;
    width: 58rem;
    height: 26rem;

    /*Breakpoints*/
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 42rem;
        height: 27rem;
    }
    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        width: 21rem;
        height: 24rem;
    }
`;

export {
    Divider,
    MainLocation,
    TitleLocation,
    MapWrap,
    Maps,

}