import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Foot = styled.footer`
  background: ${(p) => p.theme.colors.text};
  color: ${(p) => p.theme.colors.white};
  padding: 30px 20px 15px;
`;

const Inner = styled.div`
  max-width: ${(p) => p.theme.maxw};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Address = styled.address`
  font-style: normal;
  font-size: 14px;
  line-height: 1.4;
  opacity: 0.9;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.primary};
    color: #fff;
    transition: background 0.2s, transform 0.2s;
  }
  a:hover {
    background: ${(p) => p.theme.colors.secondary};
    transform: scale(1.1);
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.15);
  margin: 20px auto;
  max-width: ${(p) => p.theme.maxw};
`;

const Copy = styled.div`
  font-size: 13px;
  text-align: center;
  opacity: 0.7;
`;

export default function Footer() {
  return (
    <Foot>
      <Inner>
        <Address>
          <strong>Base Mendoza</strong><br />
          Av. San Martín 1234<br />
          Ciudad de Mendoza, Argentina
        </Address>

        <Social>
          <a href="https://instagram.com/tu_cuenta" target="_blank" rel="noreferrer"><FaInstagram size={18} /></a>
          <a href="https://facebook.com/tu_pagina" target="_blank" rel="noreferrer"><FaFacebook size={18} /></a>
          <a href="https://tiktok.com/@tu_cuenta" target="_blank" rel="noreferrer"><FaTiktok size={18} /></a>
          <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer"><FaWhatsapp size={18} /></a>
        </Social>
      </Inner>

      <Divider />

      <Copy>
        © {new Date().getFullYear()} Base Mendoza – Todos los derechos reservados.
      </Copy>
    </Foot>
  );
}

