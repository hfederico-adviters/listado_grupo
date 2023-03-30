import Card from "../../components/Card/card";
import Layout from "../../components/Layout/layout";
import { useGrupos } from "../../hook/useGrupos";

const Home = () => {
  const { data, isLoading, isError } = useGrupos();

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (!!isError) {
    return <div>error</div>;
  }
  console.log(data);
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
        {data?.map(({ id, createdAt }) => (
          <Card idGrupo={id} ultimaFechaActualizacion={createdAt} />
        ))}
      </div>
    </Layout>
  );
};
export default Home;
