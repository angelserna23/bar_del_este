import styled from "styled-components";
import { HashLink as RouterHashLink } from "react-router-hash-link";
import WoodBg from "../../assets/img/wood-bg.png";


const MainExperience = styled.section`
  padding: 2.5rem 1rem 3rem;
  background:
    linear-gradient(180deg, rgba(0,0,0,.70), rgba(0,0,0,.55)),
    url(${WoodBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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

const TitleExperience = styled.h2`
  color: ${({ theme }) => theme.colors.text_title};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem 0 0;
`;

const ArticleExperience = styled.article`
  width: 100%;
  max-width: 1200px;
  margin: 1.5rem auto 0;

  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 1.25rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const LeftExperience = styled.div``;

const RightExperience = styled.div``;

const CardExperience = styled.div`
  background: rgba(18, 18, 18, 0.65);
  border: 1px solid rgba(198, 161, 91, 0.22);
  border-radius: 18px;
  padding: 1.25rem 1.25rem 1.1rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.28);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    pointer-events: none;
    background: radial-gradient(
      700px 180px at 15% 0%,
      rgba(198, 161, 91, 0.12),
      transparent 60%
    );
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const SubTitleExperience = styled.h3`
  margin: 0 0 0.85rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.12rem;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.text_title};

  padding-bottom: 0.65rem;
  border-bottom: 1px solid rgba(198, 161, 91, 0.18);
`;

const ListExperience = styled.ul`
  list-style: none;
  margin: 0.95rem 0 0.9rem;
  padding: 0;
  display: grid;
  gap: 0.7rem;
`;

const ItemExperience = styled.li`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 0.55rem;
  align-items: start;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.97rem;
  line-height: 1.5;
`;

const Bullet = styled.span`
  color: rgba(198, 161, 91, 0.95);
  line-height: 1.2;
  font-size: 1.1rem;
  transform: translateY(2px);
`;

const CTAExperience = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const MenuLink = styled(RouterHashLink)`
  border: 1px solid rgba(198, 161, 91, 0.45);
  background: rgba(198, 161, 91, 0.18);
  color: ${({ theme }) => theme.colors.text_title};
  border-radius: 12px;
  padding: 0.7rem 0.95rem;
  cursor: pointer;
  transition: transform 150ms ease, border-color 150ms ease;
  text-decoration: none; /* importante para que no se vea subrayado */

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(198, 161, 91, 0.7);
  }
`;

const ButtonSecondary = styled(RouterHashLink)`
  border: 1px solid rgba(198, 161, 91, 0.25);
  background: rgba(0, 0, 0, 0.18);
  color: ${({ theme }) => theme.colors.text_title};
  border-radius: 12px;
  padding: 0.7rem 0.95rem;
  cursor: pointer;
  transition: transform 150ms ease, border-color 150ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(198, 161, 91, 0.45);
  }
`;

const ImagePlaceholder = styled.div`
  height: 100%;
  min-height: 320px;
  border-radius: 18px;
  border: 1px solid rgba(198, 161, 91, 0.18);
  background: rgba(18, 18, 18, 0.45);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.22);

  display: grid;
  place-items: center;
  text-align: center;
  padding: 1rem;

  color: rgba(255, 255, 255, 0.65);
  font-family: ${({ theme }) => theme.fonts.body};
`;

export {
  MainExperience,
  Divider,
  TitleExperience,
  ArticleExperience,
  LeftExperience,
  RightExperience,
  CardExperience,
  SubTitleExperience,
  ListExperience,
  ItemExperience,
  Bullet,
  CTAExperience,
  MenuLink,
  ButtonSecondary,
  ImagePlaceholder,
};