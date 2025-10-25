import React from 'react';
import { FormContainer, CampoPesquisa, BotaoPesquisa } from './styles';

const FormVagas = () => (
    <FormContainer>
        <CampoPesquisa type="text" placeholder="Cargo, empresa ou palavra-chave" />
        <BotaoPesquisa type="submit">Buscar</BotaoPesquisa>
    </FormContainer>
);

export default FormVagas;