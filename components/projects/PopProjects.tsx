import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { Gallery, Proyecto} from "../../ts/interface";
import "react-image-gallery/styles/css/image-gallery.css";

interface PopUpProjectProps {
  setPopupOpen: (value: boolean) => void;
  data: Proyecto; // Asegúrate de importar o definir correctamente el tipo PopUpProject
}

const PopProjects: React.FC<PopUpProjectProps> = ({ setPopupOpen, data }) => {
  
  const DivProjects = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.7);
    transition: transform 0.5s ease;
    gap: 1vw;
  `;

  const SectionPrincipal = styled.section`
    width: 85%;
    height: 70%;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    display: flex;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

  `;
  const SectionImg = styled.article`
    width: 63%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1b1b1b;

    @media (max-width: 768px) {
      width: 100%;
      height: 46%;
    }
  `;

  const SectionInfo = styled.article`
    width: 37%;
    height: 100%;
    padding: 0 2.2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  const H2 = styled.h2`
    color: #58d68d;
    font-size: 2.2vw;
    font-weight: 800;
    margin-top: 3vw;
    margin-bottom: 1vw;

    @media (max-width: 768px) {
      font-size: 1.95vh;
      padding: 0 3vw;
      text-align: center;
    }
  `;

  const Descripcion = styled.p`
    color: #242424;
    font-size: 1vw;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 1.2vh;
      padding: 0 4vh;
      margin-top: 1vh;
      text-align: center;
    }
  `;

  const Pdesarrollo = styled.p`
    margin: 1vw 0 0.5vw 0;
    color: #242424;
    font-size: 1.5vw;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.4vh;
      padding: 0 4vh;
      margin-top: 1vh;
      text-align: center;
    }
  `;

  const Ul = styled.ul`
    padding-left: 3vw;

    @media (max-width: 768px) {
      padding-left: 1vw;
      text-align: center;
    }
  `;

  const Li = styled.li`
    color: #242424;
    font-size: 1vw;

    @media (max-width: 768px) {
      font-size: 1vh;
      list-style: none;
      padding: 0 4vh;
      margin-top: 0.5vh;
    }
  `;

  const Button = styled.button`
    width: 70%;
    padding: 0.3vw 3vw;
    border-radius: 10px;
    border: 1px solid transparent;
    font-size: 1vw;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border: 3px solid black;
    background-color: #131313;
    margin: 0 auto 1vw auto;
    color: #fff;
    font-weight: 600;
    transition: scale 0.4s ease-in;
    cursor: pointer;

    &:hover {
      scale: 1.05;
    }

    @media (max-width: 768px) {
      font-size: 1.2vh;
      text-decoration: none;
      padding: 0.4vh 4vh;
      margin-bottom: 1.2vh;
    }
    
  `;

  const DivInfo = styled.div`
    width: 100%;
  `;

  const DivPagina = styled.div`
    margin-top: 2vw;
    display: flex;
    margin-top: 2vh;
  `;

  const LinkPagina = styled.a`
    color: #5dade2;
    text-decoration: none;
    font-size: 1.3vw;
    font-weight: 600;
    transition: color 0.5s ease;

    &:hover {
      color: #21618c;
    }

    @media (max-width: 768px) {
      font-size: 1.4vh;
      margin: 0 auto;
      display: inline;
      
    }
  `;  

  const imagenes:Gallery[] = [];

  data.imgPath.map((item:string) =>{

    const datosProyects:Gallery = {

      original: `./img/${item}`,
      thumbnail: `./img/${item}`

    }

    imagenes.push(datosProyects)
    
  })

  return (
    <DivProjects>
      <SectionPrincipal>
        <SectionImg>

          <ImageGallery
          items={imagenes}
          showPlayButton={false}
          showBullets={true}
          autoPlay={true}
          slideInterval={4000}
          slideDuration={800}
          showNav={false}
          lazyLoad={true}></ImageGallery>

        </SectionImg>

        <SectionInfo>
          <DivInfo>
            <H2>{data.name}</H2>

            <Descripcion>{data.descripcion}</Descripcion>

            <Pdesarrollo>Herramientas de desarollo</Pdesarrollo>

            <Ul>
              {data.lenguajes.map((Element:string, id:number) => (
                <Li key={id}>{Element}</Li>
              ))}
            </Ul>

            {data.link ? (
              <DivPagina>
                <LinkPagina href={data.link} target="_blank">
                  Visitar Pagina
                </LinkPagina>
              </DivPagina>
            ) : (
              ""
            )}
          </DivInfo>

          <Button onClick={() => setPopupOpen(false)}>Cerrar</Button>
        </SectionInfo>
      </SectionPrincipal>
    </DivProjects>
  );
};

export default PopProjects;
