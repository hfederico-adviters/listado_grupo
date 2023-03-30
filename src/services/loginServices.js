import { fetchContent } from "../utils/fetchCustom";
export const postLogin = async (body, setUsuario) => {
  try {
    const response = await fetchContent("/login", { body, method: "POST" });
    setUsuario(`${response?.nombre} ${response?.apellido}`);
    localStorage.setItem(
      "Token",
      response?.accessToken?.stsTokenManager?.accessToken
    );
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ocurrido un error inesperado"
    );
    throw new Error("[getGrupos service error]: " + error);
  }
};
