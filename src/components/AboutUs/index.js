import React, { useState } from "react";
import {
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


} from './styles';

import Presentation from '../../assets/img/presentation.png';

const AboutUs = () => {
    const [showInfo, setShowInfo] = useState(false);
    
    return (
        <>
            <MainPresentation>
                <TitlePresentation>SOBRE NOSOTROS</TitlePresentation>
                <ArticlePresentation>
                        <ImgPresentation src={Presentation} alt="About Us"/>
                        <TextPresentation>
                            Este bar nace de una idea clara: traer a Aguascalientes 
                            la experiencia auténtica de las tabernas del Este de 
                            Europa.<br/><br/>

                            Un espacio donde la barra es el centro, donde se 
                            pide directo, se paga al momento y se disfruta sin 
                            complicaciones. Aquí creemos en precios justos, 
                            ambiente con carácter y buena música.<br/><br/>

                            No es antro.<br/>
                            No es cantina.<br/>
                            Es una taberna con identidad propia.<br/><br/>

                            Un lugar para platicar, relajarte y disfrutar a tu ritmo.
                        </TextPresentation>
                </ArticlePresentation>
                <DivPresentation>
                    <ButtonPresentation onClick={() => setShowInfo((v) => !v)}>
            {showInfo ? "Leer menos" : "Leer más"}</ButtonPresentation>
                </DivPresentation>
            </MainPresentation>

            <Historia $open={showInfo}>
                <InfoHistoria>
                    <InfoTitle>Nuestra Historia</InfoTitle>
                    <InfoText>Este proyecto nace de algo muy personal: 
                        viajar, conocer y vivir experiencias reales 
                        en distintos países.<br/><br/>
                        
                        En muchas ciudades del Este de Europa descubrí algo que me 
                        marcó: bares pequeños, auténticos, sin exageraciones. 
                        Lugares donde entras, pides en la barra, pagas al momento y 
                        te sientas donde quieras. Sin presión, sin formalidades 
                        innecesarias, sin cuentas infladas al final de la noche.<br/><br/>
                        
                        Me di cuenta de que en México muchas veces “algo diferente” 
                        significa “más caro” o “más complicado”. Y aquí quisimos 
                        romper con esa idea.<br/><br/>
                        
                        Creamos un espacio inspirado en esas tabernas 
                        tradicionales donde el ambiente importa más que el 
                        espectáculo. Donde puedes escuchar buena música, platicar 
                        sin gritar y tomar algo bien servido sin pagar de más. Un lugar 
                        donde el trato es directo, el servicio es honesto y 
                        la experiencia es sencilla pero con carácter.<br/><br/>
                        
                        Aquí vienes con amigos, pides en barra, te acomodas y 
                        haces del lugar tu espacio por un rato. Sin excesos. Sin poses. 
                        Solo buena vibra, identidad y ambiente.<br/><br/>
                        
                        Este bar no busca ser el más grande ni el más ruidoso.<br/>
                        Busca ser el lugar al que quieres volver. <br/><br/>
                        
                        Bienvenido.
                        </InfoText>
                    </InfoHistoria>
            </Historia>
        </>
    );
};

export default AboutUs;