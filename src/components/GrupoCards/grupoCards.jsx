import Card from "../Card/card";
import "./styleGrupo.css"
const GrupoCards = () => {
  let grupos = [
    {
      id: 1,

      descripcion: "GRUPO 1",

      created_at: "2023-03-27T13:43:28.781Z",

      update_at: "2023-03-27T13:43:28.781Z",
    },

    {
      id: 2,

      descripcion: "GRUPO 2",

      created_at: "2023-03-27T13:43:32.569Z",

      update_at: "2023-03-27T13:43:32.569Z",
    },

    {
      id: 3,

      descripcion: "GRUPO 3",

      created_at: "2023-03-27T13:43:35.847Z",

      update_at: "2023-03-27T13:43:35.847Z",
    },

    {
      id: 4,

      descripcion: "GRUPO 4",

      created_at: "2023-03-27T13:43:38.509Z",

      update_at: "2023-03-27T13:43:38.509Z",
    },

    {
      id: 5,

      descripcion: "GRUPO 5",

      created_at: "2023-03-27T13:43:41.747Z",

      update_at: "2023-03-27T13:43:41.747Z",
    },

    {
      id: 6,

      descripcion: "PROFES",

      created_at: "2023-03-27T13:43:46.018Z",

      update_at: "2023-03-27T13:43:46.018Z",
    },
  ];
  return <div id="contenedor"> {grupos.map(({ id, created_at }) => (
              <Card idGrupo={id} ultimaFechaActualizacion={created_at}></Card>
          ))}
          </div>
};

export default GrupoCards;
