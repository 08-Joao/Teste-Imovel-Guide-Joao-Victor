import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './assets/Global.scss';
import Home from './screens/Home/Home';

// Função para redirecionar as rotas
function routes() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Especificação da Rota Home(Página Inicial) */}
          <Route path="/Batata" element={<Home />} /> {/* Especificação da Rota Home(Página Inicial) */}
        </Routes>
    </HashRouter>
  )
}

export default routes