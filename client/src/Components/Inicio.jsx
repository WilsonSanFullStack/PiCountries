import styles from "../styles/Inicio.module.css";
import { Link } from "react-router-dom";

/*//!LANDING PAGE | deberás crear una página de inicio o bienvenida con:
  Alguna imagen de fondo representativa al proyecto.
  Botón para ingresar a la home page.*/

const Inicio = () => {
  return (
    <div className={styles.contenedor}>
      

      <div className={styles.text}>
        <h1>
          <Link to={"/home"}>
            <button>COUNTRIES | Proyecto Individual</button>
          </Link>
        </h1>
        <h4>¡Bienvenido a mi Proyecto Individual!</h4>
        <p>
          En este proyecto, he utilizando tecnologías como React, Redux, Node,
          Express y Sequelize. Mi objetivo principal es crear una aplicación web
          que permita buscar países, visualizar su información, filtrarlos,
          ordenarlos y crear actividades turísticas.
        </p>
        <p>
          Durante el desarrollo de este proyecto, aplicaré recursos básicos de
          estilos y diseño para mejorar la experiencia de usuario. Además,
          implementar buenas prácticas de programación y utilizar el flujo de
          trabajo de Git para mantener un control adecuado de versiones.
        </p>
        <p>
          La API de Countries se ejecutará localmente en mi computadora, una
          sola vez para cargar la base de datos. Utilize una base de datos
          PostgreSQL para almacenar la información de los países y las
          actividades turísticas, y utilize Sequelize para conectar y realizar
          consultas a la base de datos.
        </p>
        <p>
          Aprendi mucho durante este proyecto, reforze los conceptos aprendidos
          en el bootcamp y desarrolle mis habilidades en el desarrollo web.
          Estoy emocionado de embarcarme en esta aventura y crear mucho
          contenido funcional y atractivo.
        </p>
        <h4>
          ¡Gracias por visitar mi página de inicio y seguir mi progreso en este
          proyecto!
        </h4>
      </div>
    </div>
  );
};

export default Inicio;
