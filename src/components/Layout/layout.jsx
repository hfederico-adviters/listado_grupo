import { useContext } from "react";
import { Link } from "react-router-dom";
import { AutenticacionContext } from "../../context/AutenticacionProvider";
import { Navigation } from "./contants";

const Layout = ({ titulo, children }) => {
  const { cerrarSesion,  usuario } =
    useContext(AutenticacionContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100px",
          backgroundColor: "salmon",
          color: "whitesmoke",
        }}
      >
        <h2>{titulo}</h2>
      </div>
      {usuario && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "40px",
          backgroundColor: "graxy",
        }}
      >
        {Navigation?.map((link) => (
          <div style={{ marginLeft: 8, marginRight: 8 }}>
            <Link to={link?.href} style={{color:"white"}}>{link?.name}</Link>
          </div>
        ))}
        <div style={{ marginLeft: 8, marginRight: 8 }}>
          <input type="button" onClick={() => cerrarSesion()} value="Cerrar sesion"/>
        </div>
      </div>
      )}
      <div style={{ height: "100%" }}>{children}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100px",
          backgroundColor: "grey",
          color: "whitesmoke",
        }}
      >
        <h3>Footer</h3>
      </div>
    </div>
  );
};
export default Layout;
