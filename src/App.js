import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AutenticacionContext } from "./context/AutenticacionProvider";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

function App() {
  const { cerrarSesion, iniciarSesion, usuario } =
    useContext(AutenticacionContext);
  return (
    <>
      <BrowserRouter>
        {usuario ? (
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route index element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
