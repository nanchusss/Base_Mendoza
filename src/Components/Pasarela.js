// src/components/Pasarela.js
import React from "react";
import styled from "styled-components";

import imgEcommerce from "../Images/ecommerce.png";
import imgTransporte from "../Images/transporte.png";
import imgMudanzas from "../Images/mudanzas.png";
import imgLogistica from "../Images/logistica.png";          // NUEVO
import imgMedicamentos from "../Images/medicamentos.png";    // NUEVO
import imgAlmacenaje from "../Images/almacenaje.png";        // NUEVO (o reemplazalo)

const Section = styled.section`
  width: 100%;
  background: ${(p) => p.theme.colors.neutral};
  margin: 40px;
  margin-bottom: 80px;
  padding-block: 120px;   /* 👈 aire vertical */
`;

const Strip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;     /* 👈 mobile: uno debajo del otro */
  }
`;

const Card = styled.article`
  position: relative;
  height: 320px;
  overflow: hidden;

  @media (max-width: 680px) {
    height: 260px;
  }

  &:hover img { transform: scale(1.05); }
`;

const Bg = styled.img`
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform .35s ease;
  will-change: transform;
`;

const Gradient = styled.div`
  position: absolute; inset: 0;
  /* degrade + tinte suave con el primary del theme */
  background:
    linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 60%),
    radial-gradient(60% 60% at 50% 80%, ${(p) => p.theme.colors.primary}22, transparent 70%);
  mix-blend-mode: normal;
`;

const Content = styled.div`
  position: absolute; bottom: 20px; left: 20px; right: 20px;
  color: #fff;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: .2px;
`;

const Desc = styled.p`
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 1.35;
  opacity: .95;
`;

const Btn = styled.a`
  display: inline-block;
  padding: 8px 14px;
  border-radius: 10px;
  font-weight: 700;
  background: ${(p) => p.theme.colors.secondary};
  color: #fff;
  text-decoration: none;
  transition: filter .2s ease, transform .2s ease;
  &:hover { filter: brightness(.95); transform: translateY(-1px); }
`;

export default function Pasarela() {
  const items = [
    { img: imgEcommerce,    title: "E-commerce",                 desc: "Almacenaje, preparación y envíos para tu tienda online.", href: "#ecommerce" },
    { img: imgTransporte,   title: "Transporte",                 desc: "Cobertura nacional e internacional. Rápido y eficiente.",  href: "#transporte" },
    { img: imgMudanzas,     title: "Mudanzas",                   desc: "Mudanzas seguras y con tranquilidad garantizada.",        href: "#mudanzas" },
    { img: imgLogistica,    title: "Logística Integral",         desc: "Picking, packing, cross-docking y gestión de stock.",     href: "#logistica" },
    { img: imgMedicamentos, title: "Transporte de medicamentos", desc: "Trazabilidad y normas vigentes.",         href: "#medicamentos" },
    { img: imgAlmacenaje,   title: "Almacenaje",                 desc: "Logística avanzada",        href: "#almacenaje" },
  ];

  return (
    <Section>
      <Strip>
        {items.map((it) => (
          <Card key={it.title}>
            <Bg src={it.img} alt={it.title} loading="lazy" />
            <Gradient />
            <Content>
              <Title>{it.title}</Title>
              <Desc>{it.desc}</Desc>
             
            </Content>
          </Card>
        ))}
      </Strip>
    </Section>
  );
}
