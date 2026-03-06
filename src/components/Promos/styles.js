import styled from "styled-components";

const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 1rem auto 0;
  position: relative;
  height: 1px;

  background: linear-gradient(
    to right,
    transparent,
    rgba(198, 161, 91, 0.25),
    rgba(198, 161, 91, 0.6),
    rgba(198, 161, 91, 0.25),
    transparent
  );

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

const MainPromos = styled.main`
  margin: 2rem 0;
`;

const TitlePromos = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text_title};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  margin: 1rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: 1.5rem;
  }
`;

/* ✅ Solo desktop */
const DesktopOnly = styled.div`
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

/* ✅ Solo tablet/móvil */
const MobileOnly = styled.div`
  display: none;

  .swiper-pagination-bullet {
    background: rgba(198, 161, 91, 0.35);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: rgba(198, 161, 91, 0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const ArticlePromos = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 3rem;
  gap: 2rem;
  box-sizing: border-box;
`;

const SectionPromos = styled.section`
  background-color: ${({ theme }) => theme.colors.overlay};
  padding: 0rem 1.5rem 2.5rem 1.5rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 420px; /* para que en carousel no “salte” */

  &:hover {
    transform: translateY(-9px);
    background-color: #28282bb8;
  }
`;

const SubTitlePromos = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.4rem;
  margin: 1rem 0;
  font-weight: 500;
`;

const TextTitle = styled.p`
  text-align: center;
  margin: 0;
  margin-bottom: 1.2rem;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.45;
`;

const ImgPromos = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 1px solid rgba(198, 161, 91, 0.22);

  @media (max-width: 520px) {
    width: 170px;
    height: 170px;
  }
`;

const DivPromos = styled.div``;

export {
  MainPromos,
  ArticlePromos,
  SectionPromos,
  TitlePromos,
  Divider,
  SubTitlePromos,
  TextTitle,
  ImgPromos,
  DivPromos,
  DesktopOnly,
  MobileOnly,
};


// Marcarle local -> 4499155404