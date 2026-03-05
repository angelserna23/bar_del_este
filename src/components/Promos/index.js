import React from "react";

import {
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
} from "./styles";

import Cerveza from "../../assets/img/cerveza.png";
import Jager from "../../assets/img/jager.png";
import Vodka from "../../assets/img/vodka.png";
import Worker from "../../assets/img/worker.png";
import Campana from "../../assets/img/campana.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const promos = [
  {
    title: "Happy Hour",
    lines: ["18:00 - 21:00", "2x1 Cervezas"],
    img: Cerveza,
    alt: "Cerveza",
  },
  {
    title: "Jägerbomb",
    lines: ["2x1 $120"],
    img: Jager,
    alt: "Jager",
  },
  {
    title: "Combo Reich",
    lines: ["Shot + Cerveza $90"],
    img: Vodka,
    alt: "Reich",
  },
  {
    title: "Worker Beer",
    lines: ["Presenta tu Identificacion del Trabajo", "Primera cerveza $30 antes de las 19:00"],
    img: Worker,
    alt: "Worker",
  },
  {
    title: "Überraschung",
    lines: ["Pon atencion a la campana!", "Shots de Wodka / Tequila a $20 por 5 min"],
    img: Campana,
    alt: "Überraschung",
  },
];

const PromoCard = ({ title, lines, img, alt }) => (
  <SectionPromos>
    <DivPromos>
      <SubTitlePromos>{title}</SubTitlePromos>
      {lines.map((t, idx) => (
        <TextTitle key={idx}>{t}</TextTitle>
      ))}
    </DivPromos>
    <ImgPromos src={img} alt={alt} />
  </SectionPromos>
);

const Promos = () => {
  return (
    <MainPromos>
      <Divider />
      <TitlePromos>PROMOCIONES Y SORPRESAS</TitlePromos>

      {/*Desktop grid */}
      <DesktopOnly>
        <ArticlePromos>
          {promos.map((p) => (
            <PromoCard key={p.title} {...p} />
          ))}
        </ArticlePromos>
      </DesktopOnly>

      {/*Tablet + Mobile carousel */}
      <MobileOnly>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={18}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1.12 },
            520: { slidesPerView: 1.35 },
            768: { slidesPerView: 2.05 },
            900: { slidesPerView: 2.35 },
          }}
          style={{ padding: "0 1rem 2.2rem" }}
        >
          {promos.map((p) => (
            <SwiperSlide key={p.title}>
              <PromoCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </MobileOnly>
    </MainPromos>
  );
};

export default Promos;