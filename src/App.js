import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {theme} from "./Components/styles/theme.js";
import Home from "./Components/pages/Home.js";
import SobreNosotros from "./Components/SobreNosotros.js";
import Servicios from "./Components/Servicios.js";
import Layout from "./Components/Layout.js";
import ContactForm from "./Components/Contact-Form.js";



const Global = createGlobalStyle`
  *{ box-sizing: border-box; }
  body{
    margin:0; font-family: Inter, Arial, sans-serif;
    color: ${p => p.theme.colors?.text || "#1F2937"};
    background: ${p => p.theme.colors?.bg || "#fff"};
  }
  img{ max-width:100%; display:block; }
  a { color: inherit; text-decoration: none; }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/sobrenosotros" element={<SobreNosotros />} />
             <Route path="/servicios" element={<Servicios />} />
             <Route path="/contacto" element={<ContactForm />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

