import "./styleCard.css";

const Card = ({ idGrupo, ultimaFechaActualizacion }) => {
  return (
    <div className="card-grupo">
      <h3>Grupo {idGrupo}</h3>
      <p>Ultima fecha actualización:{ultimaFechaActualizacion}</p>
    </div>
  );
};

export default Card;
