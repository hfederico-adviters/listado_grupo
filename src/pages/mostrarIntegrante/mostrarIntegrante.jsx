import fotoDefault from "./foto-default.jpg";
import "./stylesMostrarIntegrante.css";
import Button from "../../components/Button/button";
import { redirect } from "react-router-dom";

function accederEdicionUsuario (nombre){
  return redirect("/editar"+nombre);
}

const MostrarIntegrante = ({ nombre, apellido, descripcion, foto }) => {
  return (
    <main className="mostrarIntegrante">
      <section>
        <img src={foto || fotoDefault} alt="foto del integrante" />
      </section>
      <section>
        <h3>
          {nombre} {apellido}
        </h3>
        <p>{descripcion || "Todavía no se registró ninguna descripción."}</p>
        <Button instruccion={"CAMBIAR DATOS"} onclick={()=> accederEdicionUsuario({nombre})}></Button>
      </section>
    </main>
  );
};

export default MostrarIntegrante;

//no entiendo porque no se ve
