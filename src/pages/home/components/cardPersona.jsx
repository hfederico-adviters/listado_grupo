const CardPersona = ({ img, nombre, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "16px",
        cursor: "pointer",
      }}
      onClick={() => onClick()}
    >
      <img src={img} style={{ width: "50px" }}></img>
      <div>{nombre}</div>
    </div>
  );
};
export default CardPersona;
