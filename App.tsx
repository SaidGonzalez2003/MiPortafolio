import "./App.css";
import { useEffect, useState } from "react";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Home from "./components/Home";
import Proyects from "./components/Proyects";
import Conocimientos from "./components/Conocimientos";
import { datosProyects, datosWorks } from "./ts/datosProyectos";
import { Proyecto } from "./ts/interface";
import PopProjects from "./components/projects/PopProjects";
import styled from "styled-components";
import Contacto from "./components/Contacto";
import { bloquerPantalla, handleScroll } from "./ts/pantalla";

function App() {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

  const [data, setData] = useState<Proyecto>();

  useEffect(() => {}, [isPopupOpen]);

  const DivApp = styled.div`
    width: 90%;
    margin: 0 auto;
  `;

  const DivPrincipal = styled.div`
    width: 100vw;

    @media (max-width: 768px) {
      overflow-x: hidden;
    }
  `;

  const Menu = styled.div`
    display: none;

    @media (max-width: 768px) {
      width: 13vw;
      height: 6vh;
      position: fixed;
      top: 2vh;
      right: 2vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 100;
    }
  `;

  const [menuActive, isMenuActive] = useState(false);
  const [transicion, isTransicion] = useState<boolean>();

  useEffect(() => {
    isTransicion(false)
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    // Elimina el evento al desmontar el componente para evitar memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    bloquerPantalla(menuActive);
  }, [menuActive]);

  const handdleMenu = () => {
    isMenuActive(!menuActive);
  };

  return (
    <DivPrincipal>
      <Menu onClick={() => handdleMenu()}>
        <div className={`barra ${menuActive ? "izq" : ""}`}></div>
        <div className={`barra ${menuActive ? "der" : ""}`}></div>
      </Menu>

      <Header menuActive={menuActive} isMenuActive={isMenuActive} />

      <DivApp>
        <Home />

        <Aboutme
        transicion={transicion!} />

        <Proyects
          setPopupOpen={setPopupOpen}
          titulo="Mis Proyectos"
          datos={datosProyects!}
          data={data!}
          setData={setData}
          idS={"proyectos"}
          transicion={transicion!}
        />

        <Proyects
          setPopupOpen={setPopupOpen}
          titulo="Mis Trabajos"
          datos={datosWorks!}
          data={data!}
          setData={setData}
          idS={"trabajos"}
          transicion={transicion!}
        />

        <Conocimientos
          transicion={transicion!} />

        <Contacto
        transicion={transicion!} />
      </DivApp>

      {isPopupOpen && <PopProjects setPopupOpen={setPopupOpen} data={data!} />}
    </DivPrincipal>
  );
}

export default App;
