import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "menu": {
        "home": "Home",
        "about": "About Me",
        "projects": "Projects",
        "contact": "Contact",
        "languaje": "En",
        "inverseLenguaje": "Es"

      },
      "hero": {
        "resume": "Download Resume"
      },
      "aboutMe": {
         "title": "About Me",
         "paragraph1Start":"My name is Ezequiel Martino, but my friends call me Ezeakel. I started programming in college, and I am currently a",
         "paragraph1Accent": "computer science and programming teacher ",
         "paragraph1End": "at public schools",
         "paragraph2Start": "My preferred programming language is ",
         "paragraph2Java":"Java ",
         "paragraph2Middle":"along with the",
         "paragraph2Spring":" Spring ecosystem",
         "paragraph2End":", although I also really enjoy programming with",
         "paragraph2Typescript":" Typescript",
         "paragraph3":"I am passionate about music, especially jazz. In my free time, I like to play my old Yamaha Pacifica 921.",
         "paragraph4":"I am a coffee enthusiast, and it always accompanies me during my programming sessions and creative moments.",
         "paragraph5":"If you're looking for a passionate programmer eager to tackle any challenge, don't hesitate to contact me.",
        },
      "projects": {
        "title": "Projects",
        "rampApp": "A mobile application developed with React Native that allows users to rent out their home parking spaces. The app connects parking spot owners with drivers looking for short-term or long-term parking solutions.",
        "difficult": "A responsive e-commerce web application for selling flooring and paint products. It features six distinct views and was originally developed in Kotlin before being fully rewritten in Java.",
        "inf-dsBot": "A versatile bot developed using Java and the Discord4j library. It offers a range of features including music playback, open ai api commands, and custom commands to enhance server management.",
        "portfolio":"My portfolio, fully responsive built with React and styled using TailwindCSS. It features english and spanish support through i18n and smooth animations powered by Framer Motion.",
        "challenge":"A mobile-only web app built with React and styled using TailwindCSS. It utilizes data sourced from spreadsheets and offers a smooth user experience optimized for mobile devices.",
        "metronome":"A customizable metronome web app built with React and styled using TailwindCSS. It offers advanced features such as BPM search for songs powered by getsongbpm api, the ability to import settings via JSON files or raw JSON text, and several quality-of-life tools.",
        "codeButton": "Source Code",
        "spring-microservice":"A web app built with React and styled using TailwindCSS that leverages Xyflow to manage nodes and connections. It allows users to design their microservice architecture visually and export the configuration to generate the skeleton files for the entire project, streamlining the initial setup process. Work in progress",
        "iNFAMY-Clash": "A dedicated team website for the iNFAMY Clash of Clans team, built to showcase team members, track clan statistics, and recruit new players. The site features team rosters, member profiles, clan war records. It uses ClashKingApi."
        
      },
      "contactMe":{
         "title":"Let's get in touch",
         "mobile":"Mobile",
         "location":"Location",
         "name":"Name",
         "phone":"Phone",
         "email":"Email",
         "message":"Message",
         "enterMessage":"Enter message",
         "buttonContact":"Contact Me",
         "buttonSendMessage":"Send Message",
         "nameError":"Please enter your name",
         "phoneError":"Please enter your phone",
         "emailError":"Please enter your email",
         "messageError":"Please enter your message",
      },
      "footer":{
        "text":'Copyright © 2025 - Made by Ezequiel Martino.'
      },
      "toast":{
        "success":"Message sent successfully!",
        "error":"Error sending message, please fill in all fields.",
      }

    }
  },
  es: {
    translation: {
      "menu": {
        "home": "Inicio",
        "about": "Sobre Mi",
        "projects": "Proyectos",
        "contact": "Contacto",
        "languaje": "Es",
        "inverseLenguaje": "En"
      },
      "hero": {
        "resume": "Descargar Curriculum"
      },
      "aboutMe": {
         "title": "Sobre Mi",
         "paragraph1Start":"Me llamo Ezequiel Martino, pero mis amigos me llaman Ezeakel. Comencé a programar en la universidad y actualmente soy ",
         "paragraph1Accent": "profesor de informática y programación ",
         "paragraph1End": "en escuelas públicas",
         "paragraph2Start": "Mi lenguaje de programación preferido es ",
         "paragraph2Java":"Java ",
         "paragraph2Middle":"junto al ecosistema",
         "paragraph2Spring":" Spring, ",
         "paragraph2End":"aunque también disfruto mucho programar con",
         "paragraph2Typescript":" Typescript ",
         "paragraph3":"Me apasiona la música, especialmente el jazz. En mis tiempos libres suelo tocar mi vieja Yamaha Pacifica 921.",
         "paragraph4":"Soy un entusiasta del café, que me acompaña siempre en mis sesiones de programación y en mis momentos de creatividad.",
         "paragraph5":"Si estas buscando un programador apasionado con ganas de enfrentar cualquier tipo de desafio no dudes en contactarme. ",
        },
        "projects": {
        "title": "Proyectos",
        "rampApp": "Una aplicación móvil desarrollada con React Native que permite a los usuarios alquilar los espacios de estacionamiento de sus hogares. La app conecta a propietarios de cocheras con conductores que buscan soluciones de estacionamiento a corto o largo plazo.",
        "difficult": "Una aplicación web de e-comerse responsive para la venta de productos de pisos y pinturas. Cuenta con seis vistas diferentes y fue desarrollada originalmente en Kotlin, luego reescrita completamente en Java.",
        "inf-dsBot": "Un bot versátil desarrollado en Java utilizando la librería Discord4j. Ofrece una variedad de funciones, incluyendo reproducción de música, comandos con la API de OpenAI y comandos personalizados para mejorar la gestión del servidor.",
        "portfolio":"Mi portafolio completamente responsive, desarrollado con React y TailwindCSS. Incluye traducciones al español y al ingles con i18n y animaciones fluidas gracias a Framer Motion.",
        "challenge":"Una aplicación web exclusiva para móviles, desarrollada con React y estilizada con TailwindCSS. Utiliza datos provenientes de hojas de cálculo y ofrece una experiencia de usuario fluida, optimizada para dispositivos móviles.",
        "metronome":"Un metrónomo web personalizable desarrollada con React y estilizada con TailwindCSS. Ofrece funciones como la búsqueda de BPM de canciones mediante la API de GetSongBPM, la posibilidad de importar configuraciones mediante archivos JSON o texto JSON, y varias herramientas de calidad de vida.",
        "codeButton": "Código Fuente",
        "spring-microservice":"Una aplicación web desarrollada con React y estilizada con TailwindCSS que utiliza Xyflow para gestionar nodos y conexiones. Permite a los usuarios diseñar visualmente su arquitectura de microservicios y exportar la configuración para generar los archivos base de todo el proyecto, facilitando el proceso inicial de configuración.",
        "iNFAMY-Clash": "Un sitio web dedicado al equipo iNFAMY de Clash of Clans, creado para mostrar a los miembros del equipo, rastrear estadísticas del clan y reclutar nuevos jugadores. El sitio incluye listas de equipos, perfiles de miembros y registros de guerras de clanes. Utiliza ClashKingApi."
      },
      "contactMe":{
         "title":"Contactemos",
         "mobile":"Teléfono",
         "location":"Ubicación",
         "name":"Nombre",
         "phone":"Teléfono",
         "email":"Email",
         "message":"Mensaje",
         "enterMessage":"Ingrese el mensaje",
         "buttonContact":"Contactame",
         "buttonSendMessage":"Enviar Mensaje",
         "nameError":"Por favor ingrese su nombre",
         "phoneError":"Por favor ingrese su teléfono",
         "emailError":"Por favor ingrese su email",
         "messageError":"Por favor ingrese su mensaje",
      },
      "footer":{
        "text":'Copyright © 2025 - Hecho por Ezequiel Martino.'
      },
      "toast":{
        "success":"Mensaje enviado correctamente!",
        "error":"Error mandando el mensaje, por favor llene todo los campos.",
      }

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
     // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;