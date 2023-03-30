import Button from "../../components/Button/button";
import "./edicionIntegranteEstilos.css"

const EdicionIntegrante = () => {
  return (
    <main className="edicionIntegrante">
      <section>
        <label htmlFor="descripcion">Ingresá tu descripción</label>
        <textarea
          name=""
          id="descripcion"
          cols="30"
          rows="10"
          placeholder="Ingresa tu descripción! (no puede contener más de 300 carácteres). "
        ></textarea>
        <label htmlFor="foto">Ingresá una foto</label>
        <input type="foto" id="foto" />
      </section>
      <section>
        <Button id="boton-actualizar" instruccion={"ACTUALIZAR"}></Button>
      </section>
    </main>
  );
};

export default EdicionIntegrante;
