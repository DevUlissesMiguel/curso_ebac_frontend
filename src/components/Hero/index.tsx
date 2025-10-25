import React from 'react';
import FormVagas from '../FormVagas'; // O formulário será incluído aqui
import { HeroSection } from './styles';

const Hero = () => (
    <HeroSection>
        <div className="container">
            <h2>A vaga dos seus sonhos está aqui</h2>
            <FormVagas />
        </div>
    </HeroSection>
);

export default Hero;