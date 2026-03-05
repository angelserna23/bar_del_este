import React from "react";

import { 
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


} from './styles';

import Zulek from '../../assets/img/zurek.png';
import Gulasz from '../../assets/img/gulasz.png';
import Ensalada from '../../assets/img/ensalada.png';
import Botana from '../../assets/img/botana.png';


const Menu = () => {
    return(
        <MainMenu id="menu">
            <Divider/>
            <TitleMenu>MENU</TitleMenu>
            <ArticleMenu>
                <SectionMenu>
                    <Card>
                        <CardContent>
                            <ImgPlatillo src={Zulek}/>
                            <TitlePlatillo>ŻUREK</TitlePlatillo>
                            <TextPlatillo>Sopa tradicional con ensalada y pan</TextPlatillo>
                            <PrecioPlatillo>$120.00</PrecioPlatillo>
                        </CardContent>
                    </Card>
                </SectionMenu>
                <SectionMenu>
                    <Card>
                        <CardContent>
                            <ImgPlatillo src={Gulasz}/>
                            <TitlePlatillo>GULASZ DOMOWY</TitlePlatillo>
                            <TextPlatillo>Estofado europeo de res con ensalada y pan</TextPlatillo>
                            <PrecioPlatillo>$120.00</PrecioPlatillo>
                        </CardContent>
                    </Card>
                </SectionMenu>
                <SectionMenu>
                    <Card>
                        <CardContent>
                            <ImgPlatillo src={Ensalada}/>
                            <TitlePlatillo>DUŻA SALATKA</TitlePlatillo>
                            <TextPlatillo>Ensalada grande sola</TextPlatillo>
                            <PrecioPlatillo>$75.00</PrecioPlatillo>
                        </CardContent>
                    </Card>
                </SectionMenu>
                <SectionMenu>
                    <Card>
                        <CardContent>
                            <ImgPlatillo src={Botana}/>
                            <TitlePlatillo>PREKĄSKI</TitlePlatillo>
                            <TextPlatillo>Plato Botana del Este</TextPlatillo>
                            <PrecioPlatillo>$70.00</PrecioPlatillo>
                        </CardContent>
                    </Card>
                </SectionMenu>
            </ArticleMenu>
        </MainMenu>
    )
}

export default Menu;