
export const bloquerPantalla = (valor:boolean) =>{

    if (valor) {
        document.body.classList.add("popup-open");
        return;
    }

    document.body.classList.remove("popup-open");
}


export const handleScroll = () => {
    // Verifica si el usuario ha llegado a cualquiera de las secciones deseadas
    const sections = document.querySelectorAll(".animacion");
    sections.forEach((section) => {
      const sectionPosition = section.getBoundingClientRect();
      const isSectionVisible =
        sectionPosition.top < window.innerHeight * 0.75; // Cambia el valor según tu necesidad
      if (isSectionVisible) {
        section.classList.add("visible");
      }
    });
  };

  // Agrega el evento de scroll para activar la animación cuando se muestra la sección
  