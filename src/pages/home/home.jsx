import { useEffect, useState } from "react";
import Card from "../../components/Card/card";
import Layout from "../../components/Layout/layout";
import { fetchCustom } from "../../utils/fetchCustom";

const Home = () => {
  const [grupos, setGrupos] = useState([]);
  const token = localStorage.getItem("Token");
  const options = {
    headers: { Authorization: `bearer ${token}` },
  };
  useEffect(() => {
    fetchCustom(
      "/grupos",
      (datos) => {
        setGrupos(datos);
      },
      options
    );
  });
  return (
    <Layout titulo="Home">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          justifyContent: "center",
          padding: "2em",
        }}
      >
        
        {grupos?.map(({ id, created_at }) => (
          <Card idGrupo={id} ultimaFechaActualizacion={created_at} />
        ))}
      </div>
    </Layout>
  );
};
export default Home;
