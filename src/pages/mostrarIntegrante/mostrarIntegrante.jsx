import fotoDefault from "./foto-default.jpg";
import "./stylesMostrarIntegrante.css";
import Button from "../../components/Button/button";
import { redirect, useParams } from "react-router-dom";
import { useIntegrantes } from "../../hook/useGrupos";
import Layout from "../../components/Layout/layout";

function accederEdicionUsuario(nombre) {
  return redirect("/editar" + nombre);
}

const MostrarIntegrante = () => {
  let { idGrupo, idPersona } = useParams();
  const {
    data: integrantes,
    isLoading: isLoadingIntegrantes,
    isError: isErrorIntegrantes,
  } = useIntegrantes(idGrupo);
  if (isLoadingIntegrantes) {
    return <div>Loading</div>;
  }
  if (!!isErrorIntegrantes) {
    return <div>error</div>;
  }
  console.log(idGrupo, idPersona);
  const integrante = integrantes.find(
    (persona) => Number(persona?.id) === Number(idPersona)
  );

  return (
    <Layout titulo={"Integrante"}>
      <main className="mostrarIntegrante">
        <section>
          <img
            src={integrante?.imagen || fotoDefault}
            alt="foto del integrante"
          />
        </section>
        <section>
          <h3>
            {integrante?.nombre} {integrante?.apellido}
          </h3>
          <p>
            {integrante?.descripcion ||
              "Todavía no se registró ninguna descripción."}
          </p>
          <Button
            instruccion={"CAMBIAR DATOS"}
            onclick={() => accederEdicionUsuario(integrante?.nombre)}
          ></Button>
        </section>
      </main>
    </Layout>
  );
};

export default MostrarIntegrante;

//no entiendo porque no se ve
