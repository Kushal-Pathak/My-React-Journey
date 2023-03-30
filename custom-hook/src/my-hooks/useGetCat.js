import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const useGetCat = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
    error,
  } = useQuery(["cat"], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  const refetchData = () => {
    refetch();
    alert("Data Refetched!");
  };
  if(error){

  }
  return { data, refetchData, isCatLoading };
};
