import { Field, Form } from "react-final-form";
import Layout from "../../components/Layout/layout";

const Login = () => {
  return (
    <Layout titulo="Login">
      <Form
        onSubmit={(values) => console.log(values)}
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
                name="contrasenia"
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
