import styled from "styled-components";
import mail from "../assets/icons/mail.png";
import face from "../assets/icons/facebook.svg";

interface contac{
  transicion: boolean
}

const Contacto: React.FC<contac> = ({transicion}) => {
  const Footer = styled.footer`
    width: 100%;
  `;

  const H2 = styled.h2`
    margin: 4vw 0 7vw 0;
    font-size: 6vw;
    text-align: center;
    font-weight: 600;
    color: #4a6885;

    @media (max-width: 768px) {
      font-size: 4vh;
      margin-top: 7vh;
    }
  `;

  const DivRedes = styled.div`
    width: 80%;
    margin: 0 auto 9vw auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        margin-bottom: 7vh;
    }
  `;

  const A = styled.a`
    width: 11vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5vw;
    backdrop-filter: blur(0.6rem);
    background-color: #18184a36;
    border-radius: 15px;
    text-decoration: none;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 20px rgba(255, 255, 255, 0),
      0 0 30px rgba(255, 255, 255, 0);
    cursor: pointer;
    transition: all 0.4s ease-in;

    &:nth-child(1) {
      background-color: #61bfd63a;

      &:hover {
        box-shadow: 0 0 25px rgba(36, 56, 184, 1),
          0 0 50px rgba(36, 56, 184, 0.7), 0 0 60px rgba(36, 56, 184, 0.5);
      }
    }

    &:nth-child(2) {
      background-color: #ededed52;
      &:hover {
        box-shadow: 0 0 25px rgba(245, 250, 255, 1),
          0 0 40px rgba(245, 250, 255, 0.7), 0 0 60px rgba(245, 250, 255, 0.5);
      }
    }

    &:nth-child(3) {
      background-color: #359a5f39;
      &:hover {
        box-shadow: 0 0 25px rgba(47, 216, 89, 1),
          0 0 40px rgba(47, 216, 89, 0.7), 0 0 60px rgba(47, 216, 89, 0.5);
      }
    }

    &:nth-child(4) {
      background-color: #8a52ad39;
      &:hover {
        box-shadow: 0 0 25px rgba(129, 18, 219, 1),
          0 0 40px rgba(129, 18, 219, 0.7), 0 0 60px rgba(129, 18, 219, 0.5);
      }
    }

    &:hover {
      scale: 1.05;
    }

    @media (max-width: 768px) {

      width: 12vw;
      border-radius: 10px;
      margin-top: 3vh;

    }
  `;

  const Img = styled.img`
    object-fit: contain;
    width: 100%;
  `;

  return (
    <Footer id="contacto">
      <H2 className={"animacion " + (transicion ? "visible" : "")}>Contacto</H2>

      <DivRedes className={"animacion " + (transicion ? "visible" : "")}>
        <A
          href="https://www.facebook.com/profile.php?id=100074900824062"
          target="_blank"
        >
          <Img src={face} />
        </A>

        <A href="mailto:alan.saidtg@gmail.com" target="_blank">
          <Img src={mail} />
        </A>

        <A href="https://wa.me/7822170491" target="_blank">
          <Img src={`./icons/whatsapp.png`} />
        </A>

        <A href="https://github.com/SaidGonzalez2003" target="_blank">
          <Img src={`./icons/github.png`} />
        </A>
      </DivRedes>
    </Footer>
  );
};

export default Contacto;
