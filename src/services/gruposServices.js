import { fetchContent } from "../utils/fetchCustom";

export const getGrupos = async () => {
  try {
    return await fetchContent("/grupos");
  } catch (error) {
    throw new Error("[getGrupos service error]: " + error);
  }
};
export const getIntegrantes = async (id) => {
  try {
    return await fetchContent(`/grupos/${id}`);
  } catch (error) {
    throw new Error("[getGrupos service error]: " + error);
  }
};
