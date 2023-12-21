import {Proyecto, iconsLottie} from './interface.ts'

const datosProyects:Proyecto[] = [

    {
        id: 0,
        name: "Seguimiento Citas Veterinaria",
        imgPath: ["Veterinaria1.png", "Veterinaria2.png", "Veterinaria1.png"],
        descripcion: "Esta página web es dedicada al seguimiento de citas para su mascota para una veterinaria, esta página ofrece una experiencia simple y efectiva para garantizar el bienestar de tus mascotas.",
        lenguajes: ["React", "Vite", "Visual Studio Code", "JavaScript", "TailwindCss"],
        web: true,
        link: "https://fascinating-crumble-ea4ce7.netlify.app/"
    },
    {
        id: 1,
        name: "Plataforma de video",
        imgPath: ["Reproductor1.png", "Reproductor2.png", "Reproductor3.png","Reproductor4.png", "Reproductor5.png"],
        descripcion: "Es una plataforma de reproduccion de trailer de peliculas, esta plataforma esta inspirada en Netflix. Desarrollada con pasión y habilidades en programación, ofrece una buena experiencia de usuario.",
        lenguajes: ["JavaFX", "NetBeans", "MariaDB", "Figma"],
        web: false,
        
    },
    {
        id: 2,
        name: "Conversor de Divisas",
        imgPath: ["divisa1.png", "divisa2.png", "divisa3.png","divisa4.png"],
        descripcion: "Ofrece una experiencia dinámica al convertir divisas a criptomonedas al instante y en tiempo real, tambien proporciona información adicional detallada sobre las criptomonedas.",
        lenguajes: ["React", "Vite" ,"TypeScipt", "CoinGecko API", "Bootstrap 5"],
        web: true,
        link: "https://app.netlify.com/sites/criptos-converted/overview"
        
    },
    {
        id: 3,
        name: "Reproductor de Musica",
        imgPath: ["Musica1.png", "Musica2.png", "Musica3.png","Musica4.png", "Musica5.png"],
        descripcion: "Este Proyecto es un reproductor de música inspirado en Spotify con categorías por artistas, géneros, álbumes y listas de reproducción para una mejor experiencia de usuario.",
        lenguajes: ["JavaFX", "Php", "MySql", "NetBeans"],
        web: false,
        
    },
    {
        id: 4,
        name: "Control de Gastos",
        imgPath: ["Control1.png", "Control2.png", "Control3.png","Control4.png", "Control5.png", "Control6.png", "Control7.png"],
        descripcion: "Este Proyecto es un reproductor de música inspirado en Spotify con categorías por artistas, géneros, álbumes y listas de reproducción para una mejor experiencia de usuario.",
        lenguajes: ["React", "Vite" ,"LocalStorage", "Visual Studio Code"],
        web: true,
        link: "https://control-de-gastos-said.netlify.app/"
        
    }
]

const datosWorks:Proyecto[] = [

    {
        id: 0,
        name: "App delivery(mobile)",
        imgPath: ["delivery1.png", "delivery2.png", "delivery3.png"],
        descripcion: "Desarrolle una aplicación Android para un acogedor restaurante, complementada con una aplicación de escritorio para administrar productos, al igual optimicé la experiencia de usuario y la gestión eficiente de pedidos.",
        lenguajes: ["Android Studio", "Php", "Java", "MariaDB"],
        web: true,
    },
    {
        id: 1,
        name: "Punto de ventas",
        imgPath: ["venta1.png", "venta2.png", "venta3.png", "venta4.png", "venta5.png", "venta6.png", "venta7.png", "venta8.png", "venta9.png", "venta10.png"  ],
        descripcion: "Este proyecto, es el complemento de la App Delivery, este es un sistema de gestión de pedidos, facilita la administración eficiente al permitir la adición, actualización y eliminación de productos de manera intuitiva y ágil.",
        lenguajes: ["Java", "Php", "NetBeans", "MariaDB"],
        web: true
    },
    {
        id: 2,
        name: "Táller Franco",
        imgPath: ["taller1.png", "taller2.png", "taller3.png", "taller4.png"],
        descripcion: "Diseñé una pagina para una automotriz, incorporando un chatbot integrado vía WhatsApp, cabe mencionar que este fue el primer trabajo que tuve como desarrollador web.",
        lenguajes: ["React", "JavaScript"],
        web: true,
        link: "https://tallerfranco.com"
    }

]

const iconos:iconsLottie[] = [
    {
        nombre: "react",
        lottie: true
    },
    {
        nombre: "java",
        lottie: true
    },
    {
        nombre: "JavaScript",
        lottie: true
    },
    {
        nombre: "MySQL",
        lottie: true
    },
    {
        nombre: "NodeJS",
        lottie: true
    },
    {
        nombre: "Android Studio",
        lottie: true
    },
    {
        nombre: "Php",
        lottie: true
    },
    {
        nombre: "Mongo",
        lottie: false
    },
    {
        nombre: "JavaFX",
        lottie: false
    },
    {
        nombre: "MariaDB",
        lottie: false
    },
    {
        nombre: "TypeScript",
        lottie: false
    },
    {
        nombre: "Express",
        lottie: false
    },
    {
        nombre: "TailwindCss",
        lottie: false
    }
]
   

export {
    datosProyects,
    datosWorks,
    iconos
}