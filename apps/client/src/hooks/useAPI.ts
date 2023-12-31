import { useQuery } from "@tanstack/react-query";

const BASE_URL = process.env.HOST
  ? `https://${process.env.HOST}/api/v1`
  : `http://localhost:1717/api/v1`;

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

export const useRewards = (id: string) => {
  const {
    data: rewards = [],
    isLoading,
    isFetched,
    isError,
  } = useQuery(["reward", id], async () => {
    const res = await fetch(`${BASE_URL}/lootbox/${id}`);
    const data = await res.json();
    return data;
  });

  return { rewards, isLoading, isFetched, isError };
};
