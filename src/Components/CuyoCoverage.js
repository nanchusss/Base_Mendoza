import styled from "styled-components";
import mapCuyo from "../Images/map-cuyo.png"; // pon tu imagen del mapa aquí (1200x800 aprox)

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  margin: 40px 0 24px;
  background: linear-gradient(135deg, #0b2b4a 0%, #0d3b63 60%, #0b2b4a 100%);
  color: #fff;
`;

const Inner = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  padding: 48px 20px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;

  @media (max-width: 960px){
    grid-template-columns: 1fr;
    gap: 22px;
  }
`;

/* Bloque de copy */
const Copy = styled.div`
  position: relative;
  z-index: 2;
`;

const Eyebrow = styled.div`
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .06em;
  opacity: .9;
`;

const H2 = styled.h2`
  font-size: clamp(28px, 4.2vw, 42px);
  line-height: 1.1;
  margin: 10px 0 14px;
  font-weight: 900;
`;

const P = styled.p`
  color: rgba(255,255,255,.9);
  margin: 0 0 18px;
`;

const Ctas = styled.div`
  display: flex; gap: 12px; flex-wrap: wrap;
`;

const Btn = styled.a`
  display: inline-block;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 800;
  background: ${p => p.variant === "ghost" ? "transparent" : p.theme.colors.secondary};
  border: 1px solid ${p => p.variant === "ghost" ? "rgba(255,255,255,.3)" : "transparent"};
  color: #fff;
  backdrop-filter: blur(4px);
  transition: transform .12s ease, filter .2s ease, background .2s ease;
  &:hover { transform: translateY(-1px); filter: brightness(.95); }
`;

/* Tarjeta del mapa */
const MapCard = styled.div`
  position: relative;
  background: #0a0a0a;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: ${p => p.theme.shadow};
  aspect-ratio: 4 / 3;

  @media (max-width: 960px){
    aspect-ratio: 16 / 10;
  }
`;

const MapImg = styled.img`
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  filter: saturate(1.05) contrast(1.05);
`;

/* Marcadores estilo “pin” */
const Pin = styled.div`
  position: absolute;
  left: ${p => p.x}%;
  top: ${p => p.y}%;
  transform: translate(-50%, -100%);
  width: 14px; height: 14px;
  border-radius: 50%;
  background: ${p => p.theme.colors.primary};
  box-shadow: 0 0 0 3px rgba(255,255,255,.9), 0 6px 14px rgba(0,0,0,.25);

  /* tallito */
  &::after{
    content:"";
    position:absolute;
    left:50%; top:100%;
    transform: translateX(-50%);
    width: 2px; height: 10px;
    background: ${p => p.theme.colors.primary};
    border-radius: 2px;
  }
`;

/* Insignia decorativa naranja */
const Badge = styled.div`
  position: absolute;
  left: -80px;
  bottom: -120px;
  width: 360px; height: 240px;
  background: ${p => p.theme.colors.secondary};
  border-radius: 48px;
  transform: rotate(-12deg);
  opacity: .95;

  @media (max-width: 960px){
    display: none;
  }
`;

export default function CuyoCoverage(){
  // Coordenadas aprox. (sobre la imagen) para Mendoza / San Juan / San Luis
  const pins = [
    { x: 46, y: 58, label: "Mendoza" },
    { x: 48, y: 40, label: "San Juan" },
    { x: 59, y: 66, label: "San Luis" },
  ];

  return (
    <Wrap id="cobertura">
      <Inner>
        <Copy>
          <Eyebrow>Delegaciones</Eyebrow>
          <H2>Siempre cerca tuyo</H2>
          <P>
            Mendoza, San Juan y San Luis. Red propia para transporte y logística:
            rápido, confiable y con visibilidad total.
          </P>
          <Ctas>
            <Btn href="https://wa.me/542616490621">Hablar con Ventas</Btn>
            
          </Ctas>
          

        </Copy>

        <MapCard aria-label="Mapa de Cuyo con delegaciones">
          <MapImg src={mapCuyo} alt="Mapa de Cuyo (Mendoza, San Juan, San Luis)" />
          {pins.map((p) => (
            <Pin key={p.label} x={p.x} y={p.y} title={p.label}/>
          ))}
        </MapCard>
      </Inner>

      <Badge aria-hidden />
    </Wrap>
  );
}
