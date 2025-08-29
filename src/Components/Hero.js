import styled from "styled-components";
import Imagen from "../Images/hero.png";
import { Link } from "react-router-dom";

const Section = styled.section`
  max-width:${p=>p.theme.maxw}; margin:0 auto; padding:64px 20px;
  display:grid; grid-template-columns:1fr 1fr; gap:32px; align-items:center;
  @media(max-width:900px){ grid-template-columns:1fr; text-align:center; }
`;
const Title = styled.h1`
  font-size: clamp(32px,5vw,54px); font-weight:800; line-height:1.1;
`;
const Sub = styled.p` color:${p=>p.theme.colors.muted}; font-size:18px; margin:16px 0 28px; `;
const Row = styled.div` display:flex; gap:12px; flex-wrap:wrap; @media(max-width:900px){ justify-content:center; }`;
const Btn = styled.a`
  padding:14px 18px; border-radius:12px; font-weight:700; cursor:pointer;
  &.primary{ background:${p=>p.theme.colors.primary}; color:#fff; }
  &.ghost{ border:1px solid ${p=>p.theme.colors.border}; }
`;

export default function Hero(){
  return (
    <Section>
      <div>
        <Title>Transporte rápido y eficiente</Title>
        <Sub>Almacenamos, preparamos y enviamos tus pedidos sin complicaciones.</Sub>
        <Row>
          
          <Btn className="primary" as={Link} to="/contacto" >
Contacto
</Btn>

         
        </Row>
      </div>
      <img src= {Imagen} alt="Centro de fulfillment" style={{borderRadius:16}}/>
    </Section>
  );
}
