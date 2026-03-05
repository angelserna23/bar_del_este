import React from "react";

import {
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
} from "./styles";

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

const Experience = () => {
  return (
    <>
    <Header/>
        <MainExperience>
            <Divider />
            <TitleExperience>EXPERIENCIA</TitleExperience>

            <ArticleExperience>
                {/* LEFT */}
                <LeftExperience>
                <CardExperience>
                    <SubTitleExperience>Así se vive aquí</SubTitleExperience>

                    <ListExperience>
                    <ItemExperience>
                        <Bullet>•</Bullet>
                        Pides en barra y pagas al momento (sin cuentas largas).
                    </ItemExperience>

                    <ItemExperience>
                        <Bullet>•</Bullet>
                        Bebidas simples y bien servidas, sin complicaciones.
                    </ItemExperience>

                    <ItemExperience>
                        <Bullet>•</Bullet>
                        Cocina limitada del día: si se acaba, se acaba.
                    </ItemExperience>

                    <ItemExperience>
                        <Bullet>•</Bullet>
                        Ambiente con carácter: madera, luz cálida y taberna tradicional.
                    </ItemExperience>

                    <ItemExperience>
                        <Bullet>•</Bullet>
                        Música con vibra y volumen para platicar a gusto.
                    </ItemExperience>

                    <ItemExperience>
                        <Bullet>•</Bullet>
                        Precios justos: buena experiencia sin inflar costos.
                    </ItemExperience>
                    </ListExperience>

                    <CTAExperience>
                    <MenuLink smooth to="/#menu">
                        Menú
                    </MenuLink>
                    <ButtonSecondary smooth to="/#location" 
                    >
                        Ubicación
                    </ButtonSecondary>
                    </CTAExperience>
                </CardExperience>
                </LeftExperience>

                {/* RIGHT */}
                <RightExperience>
                {/* Aquí luego metes tu imagen real */}
                <ImagePlaceholder>
                    Colocar la imagen del bar
                </ImagePlaceholder>
                </RightExperience>
            </ArticleExperience>
        </MainExperience>
    <Footer/>
    </>
  );
};

export default Experience;