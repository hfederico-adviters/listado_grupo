import { useQuery } from "react-query";
import { getGrupos } from "../services/gruposServices";

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
