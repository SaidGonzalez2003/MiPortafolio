import styled from "styled-components";
import { Proyecto } from "../ts/interface";

interface ProyectInterface {
  setPopupOpen: (value: boolean) => void;
  titulo: string;
  datos: Proyecto[];
  data: Proyecto;
  setData: (value: Proyecto) => void;
  idS: string;
  transicion: boolean 
}

const Proyects: React.FC<ProyectInterface> = ({
  setPopupOpen,
  titulo,
  datos,
  setData,
  idS,
  transicion
}) => {
  const DivProyect = styled.div`
    background-color: #f0f0f5;
    width: 90vw;
    margin: 3vw auto 2vw auto;
    border-radius: 10px;
    padding-bottom: 3vw;
  `;

  const H2 = styled.h2`
    padding-top: 5vw;
    font-size: 6vw;
    text-align: center;
    font-weight: 600;
    color: #34495e;
    margin-bottom: 3vw;

    @media (max-width: 768px) {
      font-size: 4vh;
      padding-top: 5vh;
      margin-top: 2vh;
      margin-bottom: 4vh;
    }
  `;

  const CardConatiner = styled.section`
    width: 100%;
    margin: 1vw 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border-radius: 10px;
  `;

  const Card = styled.article`
    width: 28%;
    height: 22vw;
    background-color: white;
    margin-bottom: 3vw;
    box-shadow: 12px 12px 30px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: scale 0.4s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      scale: 1.05;
    }

    @media (max-width: 768px) {
      width: 85%;
      height: 31vh;
      margin-bottom: 3vh;
    }
  `;

  const ImgCard = styled.img`
    width: 100%;
    height: 68%;
    object-fit: cover;
  `;

  const TituloCard = styled.h3`
    margin: 1% 0;
    color: #48c9b0;
    font-size: 1.4vw;
    padding-left: 1vw;

    @media (max-width: 768px) {
      font-size: 1.7vh;
      text-align: center;
      padding: 0 2vw;
    }
  `;

  const DescripcionCard = styled.p`
    color: #0f0f0f;
    font-size: 0.7vw;
    padding: 0 1vw;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 1vh;
      text-align: center;
      padding: 0 1.8vh;
    }
  `;

  const VerMas = styled.p`
    color: #3e3e3e;
    font-size: 1.2vw;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.3s ease;
    margin: 0 auto 0.5vw auto;
    width: fit-content;
    display: block;

    &:hover {
      color: #6bcf60;
    }

    @media (max-width: 768px) {
      font-size: 1.7vh;
      margin-bottom: 0.5vh;
    }
  `;

  const CardBody = styled.div`
    width: 100%;
    height: 80%;
  `;

  //PopUp

  return (
    <DivProyect id={idS}>
      <H2>{titulo}</H2>

      <CardConatiner>
        {datos.map((proyecto, index) => (
          <Card key={index}>
            <CardBody >
              <ImgCard
                className={"animacion " + (transicion ? "visible" : "")}
                draggable="false"
                src={`./img/${proyecto.imgPath[0]}`}
              />

              <TituloCard className={"animacion " + (transicion ? "visible" : "")}>{proyecto.name}</TituloCard>

              <DescripcionCard className={"animacion " + (transicion ? "visible" : "")} > {proyecto.descripcion}</DescripcionCard>
            </CardBody>

            <VerMas
              onClick={() => {
                setPopupOpen(true);
                setData(proyecto);
              }}
              className={"animacion " + (transicion ? "visible" : "")}
            >
              ver mas
            </VerMas>
          </Card>
        ))}
      </CardConatiner>
    </DivProyect>
  );
};

export default Proyects;
