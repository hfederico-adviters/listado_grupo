import { useQuery } from "react-query";
import { getGrupos, getIntegrantes } from "../services/gruposServices";

export const useGrupos = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["useGrupos"],
    async () => {
      return getGrupos();
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
export const useIntegrantes = (id) => {
  console.log(id);
  const { data, isLoading, isError, error } = useQuery(
    ["useIntegrantes" + id],
    async () => {
      if (id) {
        return getIntegrantes(id);
      }
      return [];
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
