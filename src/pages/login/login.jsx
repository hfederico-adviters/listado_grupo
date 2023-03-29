import { useContext } from "react";
import { Field, Form } from "react-final-form";
import Layout from "../../components/Layout/layout";
import { AutenticacionContext } from "../../context/AutenticacionProvider";
import { fetchCustom } from "../../utils/fetchCustom";

const Login = () => {
  const { cerrarSesion, iniciarSesion, usuario , setUsuario} =
  useContext(AutenticacionContext);
  return (
    <Layout titulo="Login">
      <Form
        onSubmit={({ email, password }) => {
          const options = {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
          };
          fetchCustom(
            "/login",
            (response) => {
              console.log(response)
              if (response?.message){
               alert(response?.message)
              }
              setUsuario(`${response?.nombre} ${response?.apellido}`)
              localStorage.setItem(
                "Token",
                response?.accessToken?.stsTokenManager?.accessToken
              );
            },
            options
          );
        }}
        render={({ handleSubmit }) => (
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "8px",
              }}
            >
              <Field
                name="email"
                component="input"
                placeholder="Correo"
                style={{ width: "300px", height: "30px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "8px",
              }}
            >
              <Field
                name="password"
                component="input"
                placeholder="contraseña"
                style={{ width: "300px", height: "30px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button onClick={handleSubmit}>enviar</button>
            </div>
          </div>
        )}
      />
    </Layout>
  );
};
export default Login;
