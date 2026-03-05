import styled from "styled-components";

const MainMenu = styled.main`
  padding: 1rem 0;
`;

const ArticleMenu = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  box-sizing: border-box;
  gap: 2rem;

  /*Breakpoints*/
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0rem;
  }

`;

const SectionMenu = styled.section`
    display: grid;
    justify-items: center;
    box-sizing: border-box;
`;

const Card = styled.div`
  position: relative;
  width: 320px;          
  height: 520px;
  
  /*Breakpoints*/
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    height: 450px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
    height: 394px;
  }
`;

const CardContent = styled.div`
  position: absolute;
  inset: 0;
  padding: 44px 28px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  /*Breakpoints*/
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding: 22px 14px;
  }

  /*Breakpoints*/
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    border-bottom: 1px solid #2a2a2a;
  }
`;

const ImgPlatillo = styled.img`
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 10px;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    /*Breakpoints*/
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
      width: 100%;
      height: auto;
    }
`;

const TitlePlatillo = styled.h3`
  color: ${({theme}) => theme.colors.text_title};
  font-family: ${({theme}) => theme.fonts.heading};
  font-size: 1.6rem;
  text-align: center;
  margin: 0;
`;

const TextPlatillo = styled.p`
  color: ${({theme}) => theme.colors.text};
  opacity: 0.85;
  text-align: center;
  line-height: 1.4;
  margin: 0;
`;

const PrecioPlatillo = styled.span`
  margin-top: auto;
  color: ${({theme}) => theme.colors.text_title};
  font-weight: 600;
  letter-spacing: 0.5px;

  /*Breakpoints*/
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
    margin-top: 10%;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
    margin-top: 0;
  }
`;

const TitleMenu = styled.h2`
    text-align: center;
    color: ${({theme}) => theme.colors.text_title};
    font-family: ${({theme}) => theme.fonts.heading};
    font-size: 2rem;
    margin: 1rem 0;
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

export {
    MainMenu,
    ArticleMenu,
    SectionMenu,
    TitleMenu,
    Card,
    CardContent,
    ImgPlatillo,
    TitlePlatillo,
    TextPlatillo,
    PrecioPlatillo,
    Divider,

}