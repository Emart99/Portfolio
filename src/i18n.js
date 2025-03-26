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
         "paragraph2Spring":" Spring ecosistem",
         "paragraph2End":", although I also really enjoy programming with",
         "paragraph2Typescript":" Typescript",
         "paragraph3":"I am passionate about music, especially jazz. In my free time, I like to play my old Yamaha Pacifica 921.",
         "paragraph4":"I am a coffee enthusiast, and it always accompanies me during my programming sessions and creative moments.",
         "paragraph5":"If you're looking for a passionate programmer eager to tackle any challenge, don't hesitate to contact me.",
        },
      "projects": {
        "title": "Projects",
        "rampApp": "A mobile parking application that allows users to create, edit, and delete ramps. It also allows users to view ramps created by other users.",
        "difficult": "A responsive floor/paint web e-commerce type application that has 6 views made for theoretical and practical purposes.",
        "inf-dsBot": "A discord bot that uses multiple api's, such as the youtube api to reproduce music, openAi to generate text and images.",
        "portfolio":"This portfolio.",
        "challenge":"A mobile view dashboard made for an online challenge, completed in one week.",
        "metronome":"A metronome that can be used for multiple such as gaming, music, and more. Coming Soon!",
        "codeButton": "Source Code",
        
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
        "text":'Copyright © 2024 - Made by Ezequiel Martino.'
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
        "rampApp": "Una aplicación móvil de estacionamiento que permite a los usuarios crear, editar y eliminar rampas. También permite a los usuarios ver las rampas creadas por otros usuarios.",
        "difficult": "Una aplicación web de comercio electrónico de pisos/pinturas, responsiva, que tiene 6 vistas, creada con fines teóricos y prácticos.",
        "inf-dsBot": "Un bot de Discord que utiliza múltiples API's, como la API de YouTube para reproducir música, OpenAI para generar texto e imágenes.",
        "portfolio":"Este portafolio.",
        "challenge":"Una vista mobile de un dashboard hecho para un challenge, completado en una semana.",
        "metronome":"Un metrónomo que se puede utilizar para múltiples fines, como juegos, música y más. Pronto disponible!",
        "codeButton": "Código Fuente",
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
        "text":'Copyright © 2024 - Hecho por Ezequiel Martino.'
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