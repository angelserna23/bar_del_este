import styled from "styled-components";

const MainComments = styled.main`
    margin: 2rem 0;
    padding: 0 1rem;
    margin-bottom: 3rem;
`;

const TitleComments = styled.h2`
    color: ${({theme}) => theme.colors.text_title};
    font-family: ${({theme}) => theme.fonts.heading};
    font-size: 1.6rem;
    text-align: center;
    margin: 0;
    margin-top: 1rem;
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

const ArticleComments = styled.article`
    width: 100%;
    max-width: 1200px;
    margin: 1.25rem auto 0;

    /* modo “carousel” */
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(280px, 360px);
    gap: 1rem;

    overflow-x: auto;
    padding: 0.5rem 0.25rem 0.75rem;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 0.25rem;

    /* Scrollbar más discreto */
    scrollbar-width: thin;
    scrollbar-color: rgba(198, 161, 91, 0.45) transparent;

    &::-webkit-scrollbar {
    height: 10px;
    }
    &::-webkit-scrollbar-track {
    background: transparent;
    }
    &::-webkit-scrollbar-thumb {
    background: rgba(198, 161, 91, 0.35);
    border-radius: 999px;
    }
    &::-webkit-scrollbar-thumb:hover {
    background: rgba(198, 161, 91, 0.55);
    }
`;

const SectionComments = styled.section`
    scroll-snap-align: start;
    position: relative;

    background: rgba(18, 18, 18, 0.55);
    border: 1px solid rgba(198, 161, 91, 0.22);
    border-radius: 18px;
    padding: 1.1rem 1.1rem 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

    /* detalle arriba tipo “placa” */
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 18px;
        pointer-events: none;
        background: radial-gradient(
        600px 120px at 20% 0%,
        rgba(198, 161, 91, 0.14),
        transparent 55%
        );
    }

    /* hover suave */
    transition: transform 200ms ease, border-color 200ms ease;
    &:hover {
        transform: translateY(-2px);
        border-color: rgba(198, 161, 91, 0.35);
    }
`;

const SubTitleComments = styled.h2`
    margin: 0 0 0.65rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.05rem;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.text_title};

    /* línea sutil abajo */
    padding-bottom: 0.55rem;
    border-bottom: 1px solid rgba(198, 161, 91, 0.18);
`;

const TextComments = styled.p`
    margin: 0.8rem 0 0.9rem;
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.55;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};

    /* para que se sienta “quote” */
    position: relative;
    padding-left: 0.8rem;

    &::before {
    content: "“";
    position: absolute;
    left: 0;
    top: -0.25rem;
    font-size: 1.6rem;
    line-height: 1;
    color: rgba(198, 161, 91, 0.65);
    font-family: ${({ theme }) => theme.fonts.heading};
    }
`;

const NameComments = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.92rem;
    color: rgba(255, 255, 255, 0.78);

    /* chip */
    padding: 0.35rem 0.6rem;
    border-radius: 999px;
    border: 1px solid rgba(198, 161, 91, 0.22);
    background: rgba(0, 0, 0, 0.18);

    /* mini punto */
    &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: rgba(198, 161, 91, 0.85);
    box-shadow: 0 0 10px rgba(198, 161, 91, 0.25);
    }
`;

const CommentsNav = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0.75rem auto 0;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;

const NavButton = styled.button`
  border: 1px solid rgba(198, 161, 91, 0.25);
  background: rgba(18, 18, 18, 0.55);
  color: ${({ theme }) => theme.colors.text_title};
  border-radius: 12px;
  padding: 0.55rem 0.85rem;
  cursor: pointer;
  transition: transform 150ms ease, border-color 150ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(198, 161, 91, 0.45);
  }
`;

export {
    MainComments,
    Divider,
    TitleComments,
    ArticleComments,
    SectionComments,
    SubTitleComments,
    TextComments,
    NameComments,
    CommentsNav,
    NavButton,

}