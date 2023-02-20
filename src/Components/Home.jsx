import React, { useState } from "react";
import Styles from "../Styles/Home.module.css";
import Panel from "./Panel";
export default function Home() {
  const [windowStatus, setWindowStatus] = useState("block");
  return (
    <div
      style={{ display: windowStatus }}
      className={`${Styles.home} ${windowStatus}`}
    >
      <Panel
        windowStatus={windowStatus}
        setWindowStatus={setWindowStatus}
        classNeim={Styles.home}
      />
      <section>
        <h3>Bienvenidos !</h3>
        <p>
          Hola! mi nombre es Federico Carusso, soy Desarrollador Web Full-Stack
        </p>
        <p>
          Mi especialidad se basa en la resolucion de problemas implementando la
          resolucion step-by-step para obtener los mejores resultados
          convirtiendo un gran problema en problemas mas pequeños, de rapida
          resolucion y de facil aplicacion.
        </p>
      </section>
    </div>
  );
}
