import React from 'react';
import {FiArrowRight} from 'react-icons/fi'
import { Link } from 'react-router-dom';
//sempre que estamos usando react vamos focar em importar nossos css pra dentro dos tsx ao invés de importá-los para dentro do HTML como faziamos anteriormente
import '../styles/global.css';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';




function Landing(){
    return(
        <div id = "page-landing">
      {/* <Title text="Titulo 1" /> 
      <Title text="Titulo 2" />
      <Title text="Titulo 3" /> */}
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>João Pessoa</strong>
          <span>Paraíba</span>
        </div>
        {/* ao invés de usarmos o "a" padrão do HTML podemos importar esse link do react-router-dom  */}
        <Link to="/app" className = "enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>


    </div>
    );
}

export default Landing;