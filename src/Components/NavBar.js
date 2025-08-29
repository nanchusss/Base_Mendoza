import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";  // 👈 para navegar entre componentes
import logo from "../Images/logo.png";

const TRACKING_URL = "https://tu-pagina-de-tracking.com";

/* ------- Top bar ------- */
const TopStrip = styled.div`
  background: ${(p) => p.theme.colors.text};
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  padding: 6px 0;
  font-size: 14px;
`;
const TopInner = styled.div`
  max-width: ${(p) => p.theme.maxw};
  margin: 0 auto;
  padding: 6px 20px;
  display: flex; align-items: center; justify-content: flex-end;
`;
const Social = styled.div`
  display: flex; align-items: center; gap: 16px;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px; height: 32px;
    border-radius: 50%;
    color: ${(p) => p.theme.colors.white};
    background: ${(p) => p.theme.colors.primary};
    transition: background .2s ease, transform .2s ease;
  }
  a:hover {
    background: ${(p) => p.theme.colors.secondary};
    transform: scale(1.1);
  }
`;
const TrackBtn = styled.a`
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 14px; border-radius: 999px;
  margin-right: 20px;
  background: ${(p) => p.theme.colors.secondary};
  color: #fff; font-weight: 700;
  &:hover { filter: brightness(.95); }
`;

/* ------- Navbar principal ------- */
const Bar = styled.header`
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: blur(8px);
  background: rgba(255,255,255,.92);
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const Inner = styled.nav`
  max-width: ${(p) => p.theme.maxw};
  margin: 0 auto;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 6px;
`;

const Logo = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
`;

const Actions = styled.div`
  display: flex; gap: 16px; align-items: center;
  a { color: ${(p) => p.theme.colors.text}; }
`;

const LinkItem = styled(Link)`
  padding: 10px 8px; border-radius: 10px; font-weight: 500;
  transition: background .2s ease;
  font-size: 20px;
  &:hover { background: ${(p) => p.theme.colors.neutral}; }
  @media (max-width: 720px){ display: none; }
`;

const ExternalLink = styled.a`
  padding: 10px 8px; border-radius: 10px; font-weight: 500;
  transition: background .2s ease;
  font-size: 20px;
  color: ${(p) => p.theme.colors.text};
  &:hover { background: ${(p) => p.theme.colors.neutral}; }
`;

const Btn = styled(Link)`
  padding: 10px 14px; border-radius: 12px; font-weight: 700; cursor: pointer;
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.white};
  transition: transform .12s, box-shadow .12s, background .2s;
  &:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,.08);
            background: ${(p) => p.theme.colors.neutral}; }
  &.primary{
    background: ${(p) => p.theme.colors.primary}; color: #fff; border-color: transparent;
    &:hover { filter: brightness(.95); }
  }
`;

export default function Navbar(){
  return (
    <>
      <TopStrip>
        <TopInner>
          {/* <TrackBtn href={TRACKING_URL} target="_blank" rel="noreferrer">Rastrear envío</TrackBtn> */}
          <Social>
            <a href="https://instagram.com/tu_cuenta" target="_blank" rel="noreferrer"><FaInstagram size={16} /></a>
            <a href="https://facebook.com/tu_pagina"  target="_blank" rel="noreferrer"><FaFacebook size={16} /></a>
            <a href="https://tiktok.com/@tu_cuenta"   target="_blank" rel="noreferrer"><FaTiktok size={16} /></a>
            <a href="https://wa.me/542616490621"     target="_blank" rel="noreferrer"><FaWhatsapp size={16} /></a>
          </Social>
        </TopInner>
      </TopStrip>

      <Bar>
        <Inner>
          <Brand to="/" aria-label="Inicio">
            <Logo src={logo} alt="Logo" />
          </Brand>

          <Actions>
            {/* Navega a otro componente */}
            <LinkItem to="/servicios">Servicios</LinkItem>

            {/* Link externo a Google Maps */}
            <ExternalLink
              href="https://www.google.com/maps?q=Los+Cedros+618+Godoy+Cruz+Mendoza"
              target="_blank"
              rel="noreferrer"
            >
              Dirección
            </ExternalLink>

            {/* Navega a otro componente */}
            <LinkItem to="/sobrenosotros">Sobre Nosotros</LinkItem>
<LinkItem to="/contacto">Contacto</LinkItem>
            
          </Actions>
        </Inner>
      </Bar>
    </>
  );
}
