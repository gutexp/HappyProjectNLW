import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
//sempre que estamos usando react vamos focar em importar nossos css pra dentro dos tsx ao invés de importá-los para dentro do HTML como faziamos anteriormente
import './styles/global.css';
import 'leaflet/dist/leaflet.css';


import './styles/pages/landing.css';

import logoImg from './images/logo.svg';

import Routes from './routes';


//Estamos utilizando JSX aqui, que significa JavaScrips XML
//Componente dentro do react basicamente é uma função que retorna HTML

// interface TitleProps{ //A interface nos diz que tipos de propriedades o Title pode estar recebendo no nosso caso aqui ela está recebendo uma string
//   text: String;
// }

// function Title(props: TitleProps){ //agora toda vez que fomos chamar title dentro do HTML deveremos passar uma variável text como parâmento
//   return <h1>{props.text}</h1>;
// }

function App() {  
  return (
    <Routes />
  );
}

export default App;
