import React from 'react';

import {useFonts} from 'expo-font';
import {Nunito_600SemiBold, Nunito_700Bold,Nunito_800ExtraBold} from '@expo-google-fonts/nunito';
import Routes from './src/routes';


export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <Routes />
  );
}

// Aqui vai algumas diferenças do react pro nosso padrão HTML/CSS
// primeiramente, as antigas tags html não funcionam no react, logo teremos que usar as tags diretamente disponíveis do react, como você pode ver logo acima...
// Há algumas diferenças também na nossa estilização, não há mais itens com vários parâmetros como padding, margin etc (a não ser que você queira que o padding seja igual pra todos os lados)
// para ajeitar apenas em um lado você deve especificar o padding como paddingBottom etc... 
// Todos os estilos já vem com display flex também


