import { useContext } from "react";
import { Link } from "react-router-dom";
import { AutenticacionContext } from "../../context/AutenticacionProvider";
import { Navigation } from "./contants";

const Layout = ({ titulo, children }) => {
  const { cerrarSesion, usuario } = useContext(AutenticacionContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#C7D9B7",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          backgroundColor: "grey",
          color: "whitesmoke",
        }}
      >
        <h1>{titulo}</h1>
      </div>
      {usuario && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "50px",
            backgroundColor: "grey",
          }}
        >
          {Navigation?.map((link) => (
            <div style={{ marginLeft: 8, marginRight: 8 }}>
              <Link to={link?.href} style={{ color: "white" }}>
                {link?.name}
              </Link>
            </div>
          ))}
          <div style={{ marginLeft: 8, marginRight: 8 }}>
            <input
              type="button"
              onClick={() => cerrarSesion()}
              value="Cerrar sesion"
            />
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "32px",
        }}
      >
        {children}
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100px",
          backgroundColor: "grey",
          color: "whitesmoke",
        }}
      >
        <h3>Footer</h3>
      </div> */}
    </div>
  );
};
export default Layout;
