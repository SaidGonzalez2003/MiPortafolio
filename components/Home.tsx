import styled from "styled-components";
import { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../App.css";

const Home = () => {
  const DivHome = styled.div`
    width: 90vw;
    display: flex;
    margin: 0 auto;
  `;

  const SeccionTextos = styled.section`
    width: 100%;

    @media (max-width: 768px) {
    }
  `;

  const H1 = styled.h1`
    width: fit-content;
    font-size: 4.5vw;
    text-align: center;
    color: white;
    font-weight: 300;
    margin: 2vw auto 0 auto;
    transition: width 0.5s ease;

    @media (max-width: 768px) {
      margin-top: 17vh;
      font-size: 4.6vh;
    }
  `;

  const Strong = styled.strong`
    color: #76d7c4;
    font-weight: 600;
  `;

  const P = styled.p`
    color: white;
    font-size: 300;
    text-align: center;
    padding: 0 15vw;
    font-size: 2.5vw;
    margin-bottom: 2vw;

    @media (max-width: 768px) {
      margin-top: 2vh;
      margin-bottom: 10vh ;
      font-size: 2.5vh;
      padding: 2vh;
    }
  `;

  const Foto = styled.div`
    width: 23vw;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: white;
    margin: 2.5vw auto;

    @media (max-width: 768px) {
      margin: 6vh auto;
      width: 22vh;
    }

  `;
  {
    /* <br /> <br />Estoy emocionado de compartir con ustedes mis proyectos, trabajos y mis conocimientos. ["¡Hola! Soy", "¡Hello! I am", "¡Bonjour! Je suis", "¡Hallo! Ich bin!"]*/
  }

  const textosArray = [
    "¡Hola! Soy",
    "¡Hello! I am",
    "¡Bonjour! Je suis",
    "¡Hallo! Ich bin!",
  ];
  const [indiceTexto, setIndiceTexto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceTexto((currentValue) => {
        if (currentValue + 1 == textosArray.length) {
          return 0;
        }
        return currentValue + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DivHome>
      <SeccionTextos>
        <H1>
          <SwitchTransition>
            <CSSTransition
              key={textosArray[indiceTexto]}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              <div>{textosArray[indiceTexto]}</div>
            </CSSTransition>
          </SwitchTransition>
          {/* <span translate="no">{textosArray[indiceTexto]}</span>{" "} */}
          <Strong>Alan Said</Strong>
        </H1>

        <Foto></Foto>

        <P>Estoy encantado de que estés aquí explorando mi portafolio. </P>
      </SeccionTextos>
    </DivHome>
  );
};

export default Home;
