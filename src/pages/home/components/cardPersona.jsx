const CardPersona = ({ img, nombre, href }) => {
  return (
    <a
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "16px",
        cursor: "pointer",
        textDecoration: "none",
      }}
      href={href}
    >
      <img src={img} style={{ width: "50px" }}></img>
      <p>{nombre}</p>
    </a>
  );
};
export default CardPersona;
