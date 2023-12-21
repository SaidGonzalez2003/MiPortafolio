import styled from "styled-components";
import "../App.css";

interface Menu {
  menuActive: boolean;
  isMenuActive:(value: boolean) => void
}

const Header: React.FC<Menu> = ({ menuActive, isMenuActive }) => {
  const Head = styled.header`
    width: 100vw;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    backdrop-filter: blur(0.6rem);
    background-color: #0e0e0fa0;
    box-shadow: 20px 0px 30px rgba(0, 0, 0, 0.4);
    transition: transform 1s ease;

    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      left: 0;
      transform: translateX(100vw);
      height: 100vh;

      &.menuVisible {
        transform: translateX(0vw);
      }
    }
  `;

  const Nav = styled.nav`
    display: flex;
    gap: 1vw;
    width: 100vw;
    overflow: hidden;
    padding: 1.5% 3%;

    @media (max-width: 768px) {
      height: 80%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 7vh;
    }
  `;

  const A = styled.a`
    font-size: 1.2vw;
    font-weight: 400;
    text-decoration: none;
    margin: 0 auto;
    color: white;
    cursor: pointer;
    transition: scale 0.5s ease;
    &:hover {
      scale: 1.15;
    }

    @media (max-width: 768px) {
      font-size: 3.5vh;
    }
  `;

  return (
    <>
      <Head className={menuActive ? "menuVisible" : ""}>
        <Nav>
          <A href="#aboutme" onClick={() => {isMenuActive(false)}}>Acerca de mi</A>

          <A href="#proyectos" onClick={() => {isMenuActive(false)}}>Mis Proyectos</A>

          <A href="#trabajos" onClick={() => {isMenuActive(false)}}>Mis Trabajos</A>

          <A href="#conocimientos" onClick={() => {isMenuActive(false)}}>Conocimientos</A>

          <A href="#contacto" onClick={() => {isMenuActive(false)}}>Contactó</A>
        </Nav>
      </Head>
    </>
  );
};

export default Header;
