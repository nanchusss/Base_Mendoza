// src/components/VanShowCase.js

import { theme } from "../Components/styles/theme";
// src/components/VanShowCase.js
import React from "react";
import styled, { keyframes } from "styled-components";
import van from "../Images/transporte.png"; // Asegurate de tener esta imagen o poné la tuya


const float = keyframes`
  0%   { transform: translateY(0) scale(1); }
  50%  { transform: translateY(-8px) scale(1.02); }
  100% { transform: translateY(0) scale(1); }
`;

const drift = keyframes`
  0%   { transform: translate(0,0) rotate(0deg); }
  50%  { transform: translate(8px,-6px) rotate(2deg); }
  100% { transform: translate(0,0) rotate(0deg); }
`;

const ShowCaseSection = styled.section`
  position: relative;
  overflow: hidden;
  isolation: isolate; /* evita que los blends afecten fuera */
  background: ${theme.colors.neutral};
  border-radius: ${theme.radius};
  box-shadow: ${theme.shadow};
  max-width: ${theme.maxw};
  margin: 0 auto;
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 6rem 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 1.5rem;
  }
`;

/* ===== Blobs de fondo ===== */
const Blob = styled.div`
  position: absolute;
  z-index: -1;
  filter: blur(30px);
  opacity: 0.35;
  animation: ${drift} 14s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const BlobPrimary = styled(Blob)`
  width: 520px; height: 520px;
  top: -120px; left: -120px;
  background: radial-gradient(
    45% 45% at 50% 50%,
    ${theme.colors.primary} 0%,
    ${theme.colors.primary}22 60%,
    transparent 100%
  );
  border-radius: 42% 58% 63% 37% / 40% 39% 61% 60%;
`;

const BlobSecondary = styled(Blob)`
  width: 460px; height: 460px;
  right: -140px; bottom: -120px;
  background: radial-gradient(
    45% 45% at 50% 50%,
    ${theme.colors.secondary} 0%,
    ${theme.colors.secondary}22 60%,
    transparent 100%
  );
  border-radius: 58% 42% 37% 63% / 60% 61% 39% 40%;
  animation-duration: 18s;
`;

const AccentRing = styled.div`
  position: absolute;
  z-index: -1;
  width: 720px; height: 720px;
  top: -220px; right: -260px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.border};
  opacity: 0.5;
`;

/* ===== Contenido ===== */
const ShowCaseText = styled.div`
  flex: 1 1 50%;
  h2 {
    font-size: clamp(2rem, 3.2vw, 2.75rem);
    line-height: 1.1;
    color: ${theme.colors.text};
    margin: 0 0 1rem;
  }
  p {
    color: ${theme.colors.muted};
    font-size: 1.125rem;
    margin: 0 0 2rem;
    max-width: 52ch;
  }
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin-bottom: 1.5rem;

  span {
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    padding: .4rem .7rem;
    border-radius: 999px;
    font-size: .85rem;
    color: ${theme.colors.muted};
  }
`;

const Actions = styled.div`
  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.a`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: .85rem 1.1rem;
  border-radius: ${theme.radius};
  font-weight: 700;
  text-decoration: none;
  transition: transform .2s ease, opacity .2s ease;
  &:hover { transform: translateY(-2px); opacity: .95; }
`;

const GhostBtn = styled.a`
  background: ${theme.colors.white};
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.border};
  padding: .85rem 1.1rem;
  border-radius: ${theme.radius};
  font-weight: 600;
  text-decoration: none;
  transition: transform .2s ease, background .2s ease;
  &:hover { transform: translateY(-2px); background: #fff; }
`;

const ShowCaseVisual = styled.div`
  flex: 1 1 50%;
  display: grid;
  place-items: center;

  .card {
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.radius};
    box-shadow: ${theme.shadow};
    padding: 1rem;
    animation: ${float} 6s ease-in-out infinite;
  }

  img {
    width: min(560px, 100%);
    height: auto;
    display: block;
    border-radius: calc(${theme.radius} - 6px);
  }

  @media (prefers-reduced-motion: reduce) {
    .card { animation: none; }
  }
`;

export default function VanShowCase() {
  return (
    <ShowCaseSection>
      {/* Shapes de fondo */}
      <BlobPrimary />
      <BlobSecondary />
      <AccentRing />

      <Inner>
        <ShowCaseText>
          <Badges>
            <span>Rutas 24/7</span>
            <span>Ecommerce Rápido</span>
            <span>Flota de Calidad</span>
          </Badges>

          <h2>Flota urbana con <span style={{color: theme.colors.primary}}>precisión</span> y <span style={{color: theme.colors.secondary}}>velocidad</span></h2>
          <p>
            Integrá nuestra flora en tu operativa diaria y media distancia.
            Tecnología, seguridad y eficiencia en un mismo servicio.
          </p>

          <Actions>
            <PrimaryBtn
  href="https://wa.me/542616490621"
  target="_blank"
  rel="noopener noreferrer"
>
  Solicitar presupuesto
</PrimaryBtn>
            <GhostBtn href="#video">Ver cómo funciona</GhostBtn>
          </Actions>
        </ShowCaseText>

        <ShowCaseVisual>
          <div className="card">
            {/* Poné tu imagen aquí. Si ya tenés /public/van.png, va directo */}
            <img src={van} alt="Camioneta de logística" />
          </div>
        </ShowCaseVisual>
      </Inner>
    </ShowCaseSection>
  );
}
