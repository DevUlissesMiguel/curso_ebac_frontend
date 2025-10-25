import styled from 'styled-components';

// Tipagem para a prop 'destaque' que o styled-component receberá
type VagaCardProps = {
    destaque: boolean;
};

export const VagaCard = styled.div<VagaCardProps>`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Estilização condicional!
    Acessamos as props do componente para aplicar estilos.
  */
  ${(props) =>
        props.destaque &&
        `
    background-color: #fffaf0;
    border-left: 6px solid #f0ad4e;
  `}
`;

export const TituloVaga = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 8px;
`;

export const InfoVaga = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 16px;
  line-height: 1.5;
`;

export const BotaoCandidatar = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;