import styled from "styled-components";
import Lottie from "lottie-react";
import student from "../assets/lottie/student.json";
import programing from "../assets/lottie/programing.json";
import work from "../assets/lottie/work.json";
import backend from "../assets/lottie/backend.json";

interface About {
  transicion:boolean;
}

const Aboutme: React.FC<About> = ({transicion}) => {
  const DivAbout = styled.header`
    width: 90vw;
    margin: 6vw auto 0 auto;
    padding-top: 1vw;
    background-color: #f5f5fa;
    border-radius: 20px;

    @media (max-width: 768px) {
      padding-bottom: 2vh;
      margin: 6vw auto 4vh auto;
    }

  `;

  const H2 = styled.h2`
    font-size: 6vw;
    font-weight: 600;
    color: #3498db;
    text-align: center;
    margin: 6vw 0 4vw 0;

    @media (max-width: 768px) {
      font-size: 4vh;
      margin-top: 5vh;
    }
  `;

  const Seccion1 = styled.section`
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column-reverse;
      margin: 5vh 0;
    }
  `;

  const Seccion2 = styled.section`
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      margin: 5vh 0;
    }
  `;

  const Animacion1 = styled.section`
    width: 80%;

    @media (max-width: 768px) {
      margin-top: 4vh;
    }
  `;

  const Textos = styled.div`
    width: 85%;
    padding: 0 6vw 0 4vw;

    @media (max-width: 768px) {
      padding: 0 1vh;
    }
  `;

  const Divider = styled.div`
    width: 90%;
    margin: 4vw auto;
    border-top: 0.35rem solid #220909;

    @media (max-width: 768px) {
      border-top: 0.16rem solid #220909;
    }

  `;

  const Textos2 = styled.div`
    width: 85%;
    padding: 0 4vw 0 6vw;
    @media (max-width: 768px) {
      padding: 0 1vh;
    }
    
  `;

  const P = styled.p`
    color: #000;
    font-size: 1.6vw;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 2vh;
      text-align: center;
    }
  `;

  return (
    <DivAbout id="aboutme">
      <H2 className={"animacion " + (transicion ? "visible" : "")}>Acerca de Mí</H2>

      <Seccion1 >
        <Animacion1 className={"animacion " + (transicion ? "visible" : "")} >
          <Lottie animationData={student} loop={true} autoplay={true}></Lottie>
        </Animacion1>

        <Textos className={"animacion " + (transicion ? "visible" : "")}>
          <P>
            Soy,un apasionado estudiante de Ingeniería en Tecnologías
            Computacionales, actualmente tengo 20 años. <br />
            <br /> Mi fascinación por la programación se encendió durante la
            secundaria, cuando me aventuré en el mundo del desarrollo web con
            HTML.
          </P>
        </Textos>
      </Seccion1>

      <Divider className={"animacion " + (transicion ? "visible" : "")} />

      <Seccion2>
        <Textos2 className={"animacion " + (transicion ? "visible" : "")}>
          <P >
            Durante mi último año de secundaria, di mis primeros pasos en la
            programación, explorando cursos de Java durante la preparatoria.{" "}
            <br />
            <br /> Me sumergí en la programación orientada a objetos y
            posteriormente dirigí mi atención hacia el emocionante mundo de la
            programación de dispositivos móviles utilizando Android Studio y
            Firebase para la gestión de bases de datos.
          </P>
        </Textos2>

        <Animacion1 className={"animacion " + (transicion ? "visible" : "")}>
          <Lottie
            animationData={programing}
            loop={true}
            autoplay={true}
          ></Lottie>
        </Animacion1>
      </Seccion2>

      <Divider className={"animacion " + (transicion ? "visible" : "")} />

      <Seccion1>
        <Animacion1 className={"animacion " + (transicion ? "visible" : "")}>
          <Lottie animationData={work} loop={true} autoplay={true}></Lottie>
        </Animacion1>

        <Textos className={"animacion " + (transicion ? "visible" : "")}>
          <P>
            Mi curiosidad me llevó a explorar el versátil lenguaje de
            programación Python, expandiendo así mis habilidades y
            conocimientos. <br /> <br /> Al ingresar a la universidad en 2021,
            mi interés por la programación web se consolidó, durante esta etapa,
            adquirí valiosos conocimientos en documentación de proyectos,
            ingeniería de software y bases de datos relacionales.
          </P>
        </Textos>
      </Seccion1>

      <Divider className={"animacion " + (transicion ? "visible" : "")}/>

      <Seccion2>
        <Textos2 className={"animacion " + (transicion ? "visible" : "")}>
          <P>
            Exploré a fondo la biblioteca React, dedicándole tiempo y esfuerzo,
            convirtiéndose en una herramienta fundamental en mis proyectos
            actuales, además, amplié mis habilidades aprendiendo sobre
            servidores y la creación del backend con Node.js y Express. <br />
            <br />
            Este viaje académico y profesional me ha proporcionado una sólida
            base en diversas áreas de la tecnología, y estoy emocionado por
            seguir explorando y creciendo en este emocionante campo. 🚀✨
          </P>
        </Textos2>

        <Animacion1 className={"animacion " + (transicion ? "visible" : "")}>
          <Lottie animationData={backend} loop={true} autoplay={true}></Lottie>
        </Animacion1>
      </Seccion2>
    </DivAbout>
  );
};

export default Aboutme;
