import "./styleCard.css";

const Card = ({ idGrupo, ultimaFechaActualizacion, onClick }) => {
  return (
    <button onClick={() => onClick()} className="card-grupo">
      <div>
        <h3>Grupo {idGrupo}</h3>
        <p>Ultima fecha actualización:{ultimaFechaActualizacion}</p>
      </div>
    </button>
  );
};

export default Card;
