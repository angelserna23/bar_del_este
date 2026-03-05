import styled from "styled-components";

const FooterInit = styled.footer`
    margin-top: 5rem;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        margin-top: 3rem;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin-top: 2rem;
    }
`;

const TitleFooter = styled.h2`
    border-top: 1px solid #2a2a2a;
    border-bottom: 1px solid #2a2a2a;
    margin: 0;
    padding: 0.2rem 0;
    color: ${({theme}) => theme.colors.text_title};
    font-family: ${({theme}) => theme.fonts.heading};
    margin-bottom: 0.5rem;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        text-align: center;
    }
`;

const TextFooter = styled.p`
    font-family: ${({theme}) => theme.fonts.body};
    color: #c5c5c5;
    display: flex;
    gap: 1rem;
    font-weight: 450;
    font-size: ${({theme}) => theme.fontSizes.lg};

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: ${({theme}) => theme.fontSizes.md};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const LinkTel = styled.a`
    font-family: ${({theme}) => theme.fonts.body};
    color: #c5c5c5;
    display: flex;
    gap: 1rem;
    font-weight: 450;
    font-size: ${({theme}) => theme.fontSizes.lg};
    margin-bottom: 1rem;
    font-weight: 600;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: ${({theme}) => theme.fontSizes.md};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ImgContact = styled.img`

`;

const ImgSocialMedia = styled.img`
    width: 60%;
    opacity: 0.7;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 70%;
    }
`;

const StyledLink = styled.a`
    display: flex;
    justify-content: center;
`;

const NavFooter = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
`;

const SectionFooter = styled.section`
    width: 100%;
    
    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 100%;
    }
`;

const ArticleFooter = styled.article`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: flex-start;
    border-bottom: 1px solid #2a2a2a;
    margin: 0 5rem;
    padding-bottom: 5rem;
    gap: 3rem;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        padding-bottom: 2rem;
        margin: 0 3rem;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 2rem;
        margin-top: 2rem;
    }
`;

const TextPrivacy = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #c5c5c5;
    font-size: ${({theme}) => theme.fontSizes.lg};
    font-weight: 500;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-weight: 300;
    }
`;

export {
    FooterInit,
    TitleFooter,
    TextFooter,
    ImgSocialMedia,
    StyledLink,
    NavFooter,
    ImgContact,
    SectionFooter,
    ArticleFooter,
    TextPrivacy,
    LinkTel,

}