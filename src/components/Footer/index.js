import React from "react";
import {
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


} from './styles'

import Location from '../../assets/icons/map-pin.svg';
import Phone from '../../assets/icons//phone.svg';
import Whatsapp from '../../assets/icons/whatsapp_footer.png';
import Facebook from '../../assets/icons/facebook_footer.png';
import Instagram from '../../assets/icons/instagram_footer.png';
import TikTok from '../../assets/icons/tiktok_footer.png';
import Mail from '../../assets/icons/mail.svg'
import Calendar from '../../assets/icons/calendar.svg';

const Footer = () => {
    return(
        <FooterInit>
            <ArticleFooter>
                <SectionFooter> {/*Contacto*/}
                    <TitleFooter>CONTACTO</TitleFooter>
                    <LinkTel href="mailto:bardeleste8@gmail.com?subject=Information"><ImgContact src={Mail}/>bardeleste8@gmail.com</LinkTel>
                    <LinkTel href="https://www.google.com/maps/search/?api=1&query=Plaza%20la%20Cantera%2C%20Blvrd%20Juan%20Pablo%20II%201098%2C%20Canteras%20de%20San%20Agust%C3%ADn%2C%2020218%20Aguascalientes%2C%20Ags." target="_blank" rel="noreferrer"><ImgContact src={Location}/> CLICK ME!</LinkTel>
                    <LinkTel href="tel:+524491425727"><ImgContact src={Phone}/> +52 449 142 57 27</LinkTel>
                </SectionFooter>
                <SectionFooter> {/*Horario*/}
                    <TitleFooter>HORARIO</TitleFooter>
                    <TextFooter><ImgContact src={Calendar}/>Viernes - Sabadó 17:00 - 01:00</TextFooter>
                    <TextFooter><ImgContact src={Calendar}/>Domingos 16:00 - 12:00</TextFooter>
                </SectionFooter>
                <SectionFooter> {/*Siguenos*/}
                    <TitleFooter>SÍGUENOS</TitleFooter>
                    <NavFooter> {/*Redes Sociales*/}
                        <StyledLink 
                            href="https://wa.me/524491425727?text=Hola%20me%20gustaria%20realizar%20una%20reservacion"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImgSocialMedia src={Whatsapp} alt="Whatsapp"/>
                        </StyledLink>
                        <StyledLink 
                            href="https://www.facebook.com/profile.php?id=61586239828309"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImgSocialMedia src={Facebook} alt="Facebook"/>
                        </StyledLink>
                        <StyledLink 
                            href="https://www.instagram.com/bardeleste8/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImgSocialMedia src={Instagram} alt="Instagram"/>
                        </StyledLink>
                        <StyledLink 
                            href="https://www.tiktok.com/@bardeleste8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ImgSocialMedia src={TikTok} alt="Tik Tok"/>
                        </StyledLink>
                    </NavFooter>
                </SectionFooter>
            </ArticleFooter>
            <TextPrivacy>© {new Date().getFullYear()} Bar del Este - Aviso de privacidad</TextPrivacy>
        </FooterInit>
    )
}

export default Footer;
