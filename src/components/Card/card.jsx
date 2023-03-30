import "./styleCard.css";

const Card = ({ idGrupo, onClick }) => {
  return (
    <button onClick={() => onClick()} className="card-grupo">
      <div>
        <h3>Grupo {idGrupo}</h3>
      </div>
    </button>
  );
};

export default Card;
