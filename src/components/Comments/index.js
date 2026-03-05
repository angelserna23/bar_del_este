import React from "react";

import {
    MainComments,
    Divider,
    TitleComments,
    ArticleComments,
    SectionComments,
    SubTitleComments,
    TextComments,
    NameComments,


} from './styles';


const reviews = [
  {
    title: "Un lugar diferente en la ciudad",
    text:
      "Por fin un bar donde puedes platicar sin estar gritando. El ambiente es único y la atención en barra es directa y muy buena. Se siente auténtico.",
    name: "Daniel M.",
  },
  {
    title: "La experiencia que hacía falta",
    text: "Me encantó el concepto de pedir en barra y pagar al momento. Todo es sencillo, claro y sin complicaciones. Además, los precios están muy bien.",
    name: "Andrea R.",
  },
  {
    title: "Ambiente europeo real",
    text: "He visitado bares en Europa y este realmente logra esa vibra: íntimo, con carácter y buena música. Sin exageraciones.",
    name: "Carlos G.",
  },
  {
    title: "Perfecto para ir con amigos",
    text: "Fuimos en grupo y la pasamos increíble. Buena música, buena iluminación y un lugar donde realmente disfrutas el rato.",
    name: "Mariana L.",
  },
  {
    title: "Tranquilo pero con personalidad",
    text: "No es antro, no es cantina. Es algo distinto. Ideal para relajarte después de la semana y tomar algo bien servido.",
    name: "José A.",
  },
  {
    title: "Excelente atención en barra",
    text: "Se nota cuando el dueño está presente. El servicio es directo y muy amable. Te sientes bienvenido desde que entras.",
    name: "Fernanda T.",
  },
  {
    title: "Precios justos, ambiente top",
    text: "Me sorprendió que un lugar tan bien ambientado mantenga precios accesibles. Totalmente recomendado.",
    name: "Ricardo V.",
  },
  {
    title: "Pequeño pero con gran ambiente",
    text: "El espacio es íntimo y eso lo hace mejor. Siempre se siente lleno de energía pero sin perder lo cómodo.",
    name: "Paulina C.",
  }
];

const Comments = () => {
  return (
    <MainComments>
      <Divider />
      <TitleComments>RESEÑAS Y COMENTARIOS</TitleComments>

      <ArticleComments>
        {reviews.map((r, idx) => (
          <SectionComments key={idx}>
            <SubTitleComments>{r.title}</SubTitleComments>
            <TextComments>{r.text}</TextComments>
            <NameComments>— {r.name}</NameComments>
          </SectionComments>
        ))}
      </ArticleComments>
    </MainComments>
  );
};


export default Comments;