import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Creado por Wilson Arvey Sanchez Remolina</h1>
      <div className={styles.text}>
        <p>
          Soy un apasionado desarrollador Full Stack con experiencia adquirida
          en el programa de formación intensiva de Henry. Durante mi tiempo en
          Henry, he adquirido conocimientos y habilidades en una amplia gama de
          tecnologías y herramientas web. Mi enfoque se centra en crear
          aplicaciones web sólidas y escalables utilizando un conjunto de
          tecnologías modernas.
        </p>
        <p>
          Experiencia: Como parte de mi formación en Henry, he trabajado en
          proyectos desafiantes donde he desempeñado un papel integral en todas
          las etapas del ciclo de vida del desarrollo. He colaborado con equipos
          multidisciplinarios, aplicando metodologías ágiles, para construir
          aplicaciones web de alta calidad. En el lado del frontend, he
          utilizado React y Redux para desarrollar interfaces de usuario
          interactivas y dinámicas. He trabajado con HTML, CSS y JavaScript para
          crear componentes reutilizables y diseños atractivos. También he
          utilizado la biblioteca Axios para realizar solicitudes HTTP y
          comunicarme con APIs.
        </p>
        <p>
          En cuanto al backend, he trabajado con Express.js y Node.js para
          construir APIs robustas y escalables. He utilizado Sequelize como ORM
          para interactuar con bases de datos relacionales, como PostgreSQL.
          Además, he trabajado con herramientas de administración de bases de
          datos como pgAdmin.
        </p>
        <p>
          Habilidades técnicas destacadas: - Desarrollo front-end: React, Redux,
          HTML, CSS, JavaScript. - Desarrollo back-end: Node.js, Express.js,
          Sequelize. - Base de datos: PostgreSQL, pgAdmin. - Gestión de
          solicitudes HTTP: Axios.
        </p>
        <p>
          Educación: He completado con éxito el programa de formación intensiva
          de Henry, donde adquirí habilidades prácticas y conocimientos sólidos
          en desarrollo web Full Stack. Durante el programa, también trabajé en
          proyectos colaborativos, lo que me permitió desarrollar habilidades de
          trabajo en equipo y comunicación efectiva. Soy una persona motivada,
          siempre dispuesta a aprender nuevas tecnologías y seguir mejorando mis
          habilidades como desarrollador Full Stack. Mi objetivo es utilizar mis
          conocimientos y experiencia para crear soluciones innovadoras y
          eficientes que impulsen el éxito de los proyectos en los que
          participe.
        </p>
      </div>
      <p>
        Estudios iniciados el <b> 10 De Abril Del 2023</b>. A la fecha
        <b>20 De Junio Del 2023</b> me encuentro cursando el <b>PI</b> habiendo
        terminado todo lo referente a a la carrera.
      </p>

      <h4>Les dejo donde contactarme:</h4>
      <div className={styles.containerFotos}>
        <div className={styles.fotos}>
          <a href="https://github.com/ryuksan">
            <img src="../imagen/github.png" alt="GitHub" width={250} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://www.linkedin.com/in/wilson-san-280893265/overlay/contact-info/">
            <img src="../imagen/linkendin.png" alt="Linkendin" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://mail.google.com/mail/u/4/#inbox?compose=GTvVlcSHxwPqnbChMGcVwjlXWmSFXqFrbNfxkjPmkJGcFfZlPTVVRtGSzRfvRxjsqgRMsPVrnhWJG">
            <img src="../imagen/gmail.png" alt="gmail.com" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://t.me/+573213041636">
            <img src="../imagen/telegram.png" alt="Telegram" width={200} />
          </a>
        </div>

        <div className={styles.fotos}>
          <a href="https://wa.me/qr/4V5CDNDQ4SRGG1">
            <img src="../imagen/whatsapp.png" alt="WhatsApp" width={200} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
