import React from 'react';
import Vaga from '../Vaga';
import { VagasContainer } from './styles';

// Dados fictícios para simular as vagas
const vagasMock = [
    {
        id: 1,
        titulo: 'Desenvolvedor Front-end React Jr',
        empresa: 'Tech Solutions',
        salario: 4500,
        tipoContrato: 'CLT',
        destaque: false,
    },
    {
        id: 2,
        titulo: 'Desenvolvedor Back-end Pleno (Node.js)',
        empresa: 'Data Systems',
        salario: 8000,
        tipoContrato: 'PJ',
        destaque: true,
    },
    {
        id: 3,
        titulo: 'Designer UX/UI Sênior',
        empresa: 'Creative Minds',
        salario: 11000,
        tipoContrato: 'CLT',
        destaque: false,
    },
];

const ListaVagas = () => (
    <VagasContainer>
        <div className="container">
            {vagasMock.map((vaga) => (
                <Vaga
                    key={vaga.id}
                    titulo={vaga.titulo}
                    empresa={vaga.empresa}
                    salario={vaga.salario}
                    tipoContrato={vaga.tipoContrato}
                    destaque={vaga.destaque}
                />
            ))}
        </div>
    </VagasContainer>
);

export default ListaVagas;