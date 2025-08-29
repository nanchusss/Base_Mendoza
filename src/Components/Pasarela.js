import React from "react";
import styled from "styled-components";

import imgEcommerce from "../Images/ecommerce.png";
import imgTransporte from "../Images/transporte.png";
import imgMudanzas from "../Images/mudanzas.png";


const Section = styled.section`
  width: 100%;
  background: ${(p) => p.theme.colors.neutral}; /* opcional fondo suave */
`;

const Strip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0; /* 👈 eliminamos espacios para que las cards se peguen */
  width: 100%;

  @media (max-width: 900px) {
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar { display: none; }
  }
`;

const Card = styled.article`
  position: relative;
  height: 300px;
  overflow: hidden;
  scroll-snap-align: start;
`;

const Bg = styled.img`
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform .35s ease;
  &:hover { transform: scale(1.05); }
`;

const Gradient = styled.div`
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 60%);
`;

const Content = styled.div`
  position: absolute; bottom: 20px; left: 20px; right: 20px;
  color: #fff;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 800;
`;

const Desc = styled.p`
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 1.35;
`;

const Btn = styled.a`
  display: inline-block;
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 700;
  background: ${(p) => p.theme.colors.primary};
  color: #fff;
  &:hover { filter: brightness(.9); }
`;

export default function Pasarela() {
  const items = [
    { img: imgEcommerce, title: "E-commerce", desc: "Almacenaje, preparación y envíos para tu tienda online.", href: "#ecommerce" },
    { img: imgTransporte, title: "Transporte", desc: "Cobertura nacional e internacional. Rápido y eficiente.", href: "#transporte" },
    { img: imgMudanzas, title: "Mudanzas", desc: "Mudanzas seguras y con tranquilidad garantizada.", href: "#mudanzas" },
   
  ];

  return (
    <Section>
      <Strip>
        {items.map((it) => (
          <Card key={it.title}>
            <Bg src={it.img} alt={it.title} />
            <Gradient />
            <Content>
              <Title>{it.title}</Title>
              <Desc>{it.desc}</Desc>
              <Btn href={it.href}>Ver más</Btn>
            </Content>
          </Card>
        ))}
      </Strip>
    </Section>
  );
}
