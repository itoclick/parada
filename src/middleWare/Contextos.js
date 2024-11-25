import  { createContext } from 'react';

const ListaOfertas= [
    {
     id: 1,   
     nomeOferta:  "Hamburguer",  
     sobre: "Experimente o delicioso hamburguer de Siri"
    },
    {
        id: 2,   
       nomeOferta:  "misto",  
        sobre: "Experimente o delicioso misto de quijo e presunto"
    },
    {
        id: 3,
        nomeOferta:  "xsalada",  
        sobre: "Experimente o delicioso hamburguer de salada"
    },
    {
        id: 4,
        nomeOferta:  "mistão",  
        sobre: "Experimente o delicioso Mistão de salada"
    }
  ];

export const ofertas = createContext(ListaOfertas)