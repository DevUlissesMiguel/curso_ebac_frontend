import React from 'react';
import { VagaCard, TituloVaga, InfoVaga, BotaoCandidatar } from './styles';

// Definindo a interface das Props que o componente Vaga espera
type Props = {
    titulo: string;
    empresa: string;
    salario: number;
    tipoContrato: string;
    destaque?: boolean; // Prop opcional
};

const Vaga = ({
    titulo,
    empresa,
    salario,
    tipoContrato,
    destaque = false, // Valor padrão
}: Props) => (
    // Passamos a prop 'destaque' para o VagaCard estilizado
    <VagaCard destaque={destaque}>
        <TituloVaga>{titulo}</TituloVaga>
        <InfoVaga>
            {empresa} | {tipoContrato} | Salário: R$ {salario}
        </InfoVaga>
        <BotaoCandidatar href="#">Candidatar-se</BotaoCandidatar>
    </VagaCard>
);

export default Vaga;