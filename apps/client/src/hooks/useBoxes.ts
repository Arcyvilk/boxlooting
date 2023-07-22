import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://localhost:1717/api/v1";

export const useBoxes = () => {
  const {
    data: boxes = [],
    isLoading,
    isFetched,
    isError,
  } = useQuery(["boxes"], async () => {
    const res = await fetch(`${BASE_URL}/boxes`);
    const data = await res.json();
    return data;
  });

  return { boxes, isLoading, isFetched, isError };
};
