import { graphqlClient } from "@/client/api";
import { getCurrentUserQuery } from "@/graphql/queries/user";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: () => graphqlClient.request(getCurrentUserQuery),
  });

  return { ...query, user: query.data?.getCurrentUser };
};
