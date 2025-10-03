import React from "react";
import CardJogador from "./components/CardJogador";
import Titulo from "./components/Titulo";
import Dalvana from "../src/assets/images/Dalvana.png";
import Daniel from "../src/assets/images/Daniel.png";
import Leo from "../src/assets/images/Leo.png";
import Lucas from "../src/assets/images/Lucas.png"


// Função proincipal do App 
export default function App() {
  // Array de objetos respresentando os jogadores
  // Cada objeto tem id e as props nome, posicao, time, avaliacao e imagem
  const jogadores = [
    {
      id: 1,
      nome: "Dalvana",
      posicao: "Mestre",
      time: "Comandante",
      avaliacao: "♾️",
      imagem: Dalvana
    },
    {
      id: 2,
      nome: "Daniel",
      posicao: "Ataque supremo",
      time: "Chutadores",
      avaliacao: 1000,
      imagem: Daniel
    },
    {
      id: 3,
      nome: "Leo",
      posicao: "Soco eficiente",
      time: "Amante de JAVA",
      avaliacao: 1000,
      imagem: Leo
    },
    {
      id: 4,
      nome: "Lucas",
      posicao: "Curandeiro",
      time: "Salvadores",
      avaliacao: 10000,
      imagem: Lucas
    }
  ]
  return (
    <main
      style={{
        display: "flex",
        gap: "20px", // espaço entre os cards
        justifyContent: "center", // centraliza os cards na horizontal
        marginTop: "50px", // espaço superior
        flexWrap: "wrap" // permite a quebra de linha se a tela for pequena

      }}
    >
      {/** Componente de Titulo             
             */}
      <div style={{ width: "100%" }}>
        <Titulo texto="Lista de Jogadores" />
      </div>
      {/** Percorre o array de jogadores com .map */}
      {/** Para cada jogador cria um CardJogador  */}
      {
        jogadores.map((j) => (
          // key é necessário para o React identificar cada item da lista
          // {...j} espalhar todas as props (nome, posicao, time, avaliacao, imagem)
          <CardJogador key={j.id}{...j} />
        ))
      }


    </main>
  )
}