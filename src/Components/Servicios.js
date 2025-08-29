import styled from "styled-components";
import imgLogistica  from "../Images/logistica.png";
import imgMudanzas   from "../Images/mudanzas.png";
import imgTransporte from "../Images/transporte.png";
import imgEcommerce  from "../Images/ecommerce.png";

const Page = styled.main`
  width: 100%;
`;

/* Banner full-width (tipo hero apilado) */
const Banner = styled.section`
  position: relative;
  width: 100%;
  height: 62vh;              /* alto grande para impacto */
  min-height: 420px;
  max-height: 760px;
  overflow: hidden;
  @media (max-width: 820px){ height: 54vh; min-height: 360px; }
`;

const Bg = styled.img`
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  filter: saturate(1.05) contrast(1.03);
`;

const Shade = styled.div`
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 60%, rgba(0,0,0,0) 80%);
`;

const BannerTitle = styled.h2`
  position: absolute; left: 24px; bottom: 24px;
  margin: 0;
  color: #fff;
  font-weight: 900;
  font-size: clamp(28px, 5vw, 48px);
  letter-spacing: .2px;
`;

/* Bloque de descripción bajo cada banner */
const Details = styled.section`
  max-width: ${p=>p.theme.maxw};
  margin: 0 auto 48px;
  padding: 24px 20px 0;
`;

const Lead = styled.p`
  margin: 0 0 14px;
  color: ${p=>p.theme.colors.text};
  font-size: clamp(16px, 1.6vw, 18px);
  line-height: 1.6;
`;

const Bullets = styled.ul`
  margin: 8px 0 18px 18px;
  color: ${p=>p.theme.colors.muted};
  li { margin: 6px 0; }
`;

const CTA = styled.a`
  display: inline-block;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 800;
  background: ${p=>p.theme.colors.primary};
  color: #fff;
  &:hover{ filter: brightness(.95); }
`;

/* Separador suave entre servicios */
const Divider = styled.div`
  height: 28px;
  background: ${p=>p.theme.colors.neutral};
`;

/* --- Componente auxiliar para reusar patrón --- */
function ServiceBlock({ id, title, image, lead, bullets=[] }) {
  return (
    <section id={id}>
      <Banner>
        <Bg src={image} alt={title} />
        <Shade />
        <BannerTitle>{title}</BannerTitle>
      </Banner>
      <Details>
        <Lead>{lead}</Lead>
        {bullets.length > 0 && (
          <Bullets>
            {bullets.map((b)=>(<li key={b}>{b}</li>))}
          </Bullets>
        )}
       
      </Details>
      <Divider />
    </section>
  );
}

export default function Servicios(){
  return (
    <Page>
      <ServiceBlock
        id="logistica"
        title="Logística"
        image={imgLogistica}
        lead="Operamos soluciones de logística integral: almacenaje, preparación de pedidos y distribución, con visibilidad y control en cada etapa."
        bullets={[
          "Almacenaje seguro y flexible",
          "Recogida y distribución de alta precisión",
          "Trazabilidad en tiempo real",
        ]}
      />

      <ServiceBlock
        id="mudanzas"
        title="Mudanzas"
        image={imgMudanzas}
        lead="Mudanzas rápidas, seguras y sin complicaciones. Cuidamos cada pieza como si fuera nuestra para que solo te ocupes de disfrutar tu nuevo destino."
        bullets={[
          "Embalaje profesional",
          "Protección de muebles y electrodomésticos",
          "Cobertura en todo Cuyo",
          "Opciones puerta a puerta",
        ]}
      />

      <ServiceBlock
        id="transporte"
        title="Transporte"
        image={imgTransporte}
        lead="Red propia en Cuyo. Entregas puntuales con estándares de seguridad y un equipo que responde."
        bullets={[
          "Flota moderna y monitoreada",
          "Transporte de Medicamentos",
          "Rutas optimizadas Mendoza–San Juan–San Luis",
          "Carga fraccionada y dedicada",
          "Soporte y seguimiento proactivo",
        ]}
      />

      <ServiceBlock
        id="ecommerce"
        title="E-commerce"
        image={imgEcommerce}
        lead="Soluciones a medida para tu tienda online: almacenaje y entrega que fideliza."
        bullets={[
          
          "Preparación en 24h",
          "Gestión de devoluciones",
          "Reportes y analítica de operaciones",
        ]}
      />
    </Page>
  );
}
