import styled from "styled-components";

const Sec = styled.section` background:${p=>p.theme.colors.section}; `;
const Grid = styled.div`
  max-width:${p=>p.theme.maxw}; margin:0 auto; padding:28px 20px;
  display:grid; gap:16px; grid-template-columns:repeat(4,1fr);
  @media(max-width:900px){ grid-template-columns:repeat(2,1fr); }
  @media(max-width:520px){ grid-template-columns:1fr; }
`;
const Card = styled.div`
  background:#fff; border:1px solid ${p=>p.theme.colors.border};
  border-radius:${p=>p.theme.radius}; padding:22px; text-align:center;
  box-shadow:${p=>p.theme.shadow};
`;
const Big = styled.div` font-size:28px; font-weight:900; `;
const Small = styled.div` margin-top:6px; color:${p=>p.theme.colors.muted}; `;

export default function Stats(){
  const items = [
    {big:"24h", small:"Preparación de órdenes"},
    {big:"Garantia", small:"Precisión operativa"},
    {big:"10 años", small:"De experiencia comprobada"},
    {big:"Mendoza y Cuyo", small:"Red cuyana de distribución"},
  ];
  return (
    <Sec>
      <Grid>
        {items.map(i=>(
          <Card key={i.big}><Big>{i.big}</Big><Small>{i.small}</Small></Card>
        ))}
      </Grid>
    </Sec>
  );
}
