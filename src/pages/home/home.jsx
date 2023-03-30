import Card from "../../components/Card/card";
import Layout from "../../components/Layout/layout";
import { useGrupos, useIntegrantes } from "../../hook/useGrupos";

import ModalCustom from "../../components/ModalCustom/modalCustom";
import CardPersona from "./components/cardPersona";
import { useState } from "react";

const Home = () => {
  const { data, isLoading, isError } = useGrupos();
  const [showModal, setShowModal] = useState({
    idGrupo: null,
    open: false,
    title: null,
  });
  const {
    data: integrantes,
    isLoading: isLoadingIntegrantes,
    isError: isErrorIntegrantes,
  } = useIntegrantes(showModal.idGrupo);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (!!isError || !!isErrorIntegrantes) {
    return <div>error</div>;
  }
  console.log(integrantes);
  return (
    <Layout titulo="Home">
      <div
        // poner className con id
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          justifyContent: "center",
          padding: "2em",
        }}
      >
        {data?.map(({ id, createdAt }) => (
          <Card
            idGrupo={id}
            ultimaFechaActualizacion={createdAt}
            onClick={() => {
              setShowModal({ open: true, idGrupo: id, title: `Grupo ${id}` });
            }}
          />
        ))}
      </div>
      <ModalCustom
        open={showModal.open}
        title={showModal.title}
        close={() => {
          setShowModal({
            idGrupo: null,
            open: false,
            title: null,
          });
        }}
      >
        {!isLoadingIntegrantes &&
          integrantes?.map((persona) => (
            <CardPersona
              nombre={`${persona?.nombre} ${persona?.apellido}`}
              img={
                persona?.imagen
                  ? persona?.imagen
                  : "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
              }
              onClick={() => {
                console.log(persona.id);
              }}
            />
          ))}
      </ModalCustom>
    </Layout>
  );
};
export default Home;
