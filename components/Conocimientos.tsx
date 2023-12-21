import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react";
import { iconos } from "../ts/datosProyectos";
import react from "../assets/lottie/react.json";
import java from "../assets/lottie/java.json";
import js from "../assets/lottie/js.json";
import mysql from "../assets/lottie/mysql.json";
import node from "../assets/lottie/node.json";
import android from "../assets/lottie/android.json";
import php from "../assets/lottie/php.json";

interface conocer{
  transicion: boolean
}

const Conocimientos: React.FC<conocer> = ({transicion}) => {
  const Container = styled.div`
    width: 90vw;
    margin: 4vw auto 1vw auto;
    padding-bottom: 1vw;
    background-color: #fcfcfc;
    border-radius: 20px;

    @media (max-width: 768px) {
      border-radius: 15px;
    }
  `;

  const H2 = styled.h2`
    font-size: 6vw;
    padding-top: 5vw;
    margin-bottom: 4vw;
    text-align: center;
    font-weight: 600;
    color: #e74c3c;

    @media (max-width: 768px) {
      font-size: 3.5vh;
      margin-top: 3vh;
    }
  `;

  const CardConatiner = styled.section`
    width: 95%;
    margin: 1vw auto 4vw auto;
    display: flex;
    flex-wrap: wrap;
    gap: 3vw;
    justify-content: space-evenly;
    border-radius: 10px;
  `;

  const Card = styled.article`
    width: 14%;
    height: 13vw;
    background-color: white;
    box-shadow: 12px 12px 30px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    transition: scale 0.4s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      scale: 1.08;
    }

    @media (max-width: 768px) {
      width: 45%;
      height: 17vh;
      border-radius: 15px;
      margin-bottom: 1.5vh;

      &:hover {
        scale: 1.05;
      }
    }
  `;

  const Animacion1 = styled.section`
    width: 70%;
    margin: 1vw auto 0 auto;
  `;

  const P = styled.p`
    font-size: 1.2vw;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1vw;

    @media (max-width: 768px) {
      font-size: 1.6vh;
    }
  `;

  const growShrinkAnimation = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
    `;

  const ImgIcons = styled.img`
    width: 75%;
    display: block;
    object-fit: contain;
    margin: 1vw auto;
    animation: ${growShrinkAnimation} 2s infinite;

    @media (max-width: 768px) {
      margin-top: 2vh;
    }
  `;

  const cargarIcon = (id: number) => {

    switch (id) {
      case 0:
        return react;
        break;
      case 1:
        return java;
        break;
      case 2:
        return js;
        break;
      case 3:
        return mysql;
        break;
      case 4:
        return node;
        break;
      case 5:
        return android;
        break;
      case 6:
        return php;
        break;
      default:
        break;
    }
  };

  return (
    <Container id="conocimientos">
      <H2 className={"animacion " + (transicion ? "visible" : "")}>Mis Conocimientos</H2>

      <CardConatiner className={"animacion " + (transicion ? "visible" : "")}>
        {iconos.map((element, index) => (
          <Card key={index}>
            <Animacion1 className={"animacion " + (transicion ? "visible" : "")}>
              {element.lottie ? (
                <Lottie
                  animationData={cargarIcon(index)}
                  loop={true}
                  autoplay={true}
                ></Lottie>
              ) : (
                <ImgIcons
                  src={`./icons/${element.nombre.toLowerCase()}.png`}
                />
              )}
            </Animacion1>

            <P className={"animacion " + (transicion ? "visible" : "")}>{element.nombre}</P>
          </Card>
        ))}
      </CardConatiner>
    </Container>
  );
};

export default Conocimientos;
