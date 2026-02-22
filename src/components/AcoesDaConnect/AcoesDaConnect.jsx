import { useState } from 'react'


import Mutirao from '../../assets/mutirao.png'
import Aulas from '../../assets/aulas.png'
import Esporte from '../../assets/esporte.png'
import Familia from '../../assets/familia.png'
import Futuro from '../../assets/futuro.png'
import Conecta from '../../assets/conecta.png'

import styles from './AcoesDaConnect.module.scss'

function AcoesDaConnect(){

  const [cards] = useState([

    {
      id: 1
      imagem: Mutirao
      titulo: Mutirão de Reciclagem
      informacao: Coletar materiais recicláveis e orientar sobre descarte consciente.
      botao: Quero participar
    },
    {
      id: 2
      imagem: Aulas 
      titulo: Aulas de Tecnologia
      informacao: Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.
      botao: Quero participar
    },

    {
      id: 3
      imagem: Esporte
      titulo: Esporte e Inclusão
      informacao: Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.
      botao: Quero participar
    },

    {
      id: 4
      imagem: Familia
      titulo: Instituto Grande Familia
      informacao: Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.
      botao: Quero doar
    },

    {
      id: 5
      imagem: Futuro
      titulo: Projeto Futuro na Escola
      informacao: Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.
      botao: Quero doar
    },

    {
      id: 6
      imagem: Conecta
      titulo: Instituto Conecta Jovem
      informacao: Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.
      botao: Quero doar 
    },
  ])
  return(
    <>
    <h2>Ações da Connect</h2>
    <p>Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
    </>
  )
}

export default AcoesDaConnect