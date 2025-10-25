import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ListaVagas from './components/ListaVagas';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Hero />
            <ListaVagas />
        </>
    );
}

export default App;