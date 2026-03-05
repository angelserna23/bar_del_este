import React from "react";
import {
    MainLocation,
    Divider,
    TitleLocation,
    MapWrap,
    Maps,


} from './styles';

const Location = () => {
    return(
        <MainLocation id="location">
            <Divider/>
            <TitleLocation>UBICACION</TitleLocation>

            <MapWrap>
                <Maps
                    title="Mapa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.9119768760479!2d-102.3375346185841!3d21.863126306225887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ed00674eeb61%3A0x84db7f5130e295e1!2sAlitas%20Emir&#39;s%20Canteras!5e0!3m2!1sfr!2smx!4v1772643841782!5m2!1sfr!2smx"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </MapWrap>
        </MainLocation>
    )
}

export default Location;