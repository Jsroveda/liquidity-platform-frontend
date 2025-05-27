
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApolloClient } from '@apollo/client';
import { GET_LIQUIDITY_POOLS, GET_LIQUIDITY_METRICS } from '@/graphql/queries/liquidity';
import { CREATE_LIQUIDITY_POOL } from '@/graphql/mutations/liquidity';

export const useLiquidityPools = (limit = 50, offset = 0) => {
  const client = useApolloClient();

  return useQuery({
    queryKey: ['liquidityPools', limit, offset],
    queryFn: async () => {
      const { data } = await client.query({
        query: GET_LIQUIDITY_POOLS,
        variables: { limit, offset },
      });
      return data.liquidityPools;
    },
  });
};

export const useLiquidityMetrics = (timeframe = '24h') => {
  const client = useApolloClient();

  return useQuery({
    queryKey: ['liquidityMetrics', timeframe],
    queryFn: async () => {
      const { data } = await client.query({
        query: GET_LIQUIDITY_METRICS,
        variables: { timeframe },
      });
      return data.liquidityMetrics;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};

export const useCreateLiquidityPool = () => {
  const client = useApolloClient();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: any) => {
      const { data } = await client.mutate({
        mutation: CREATE_LIQUIDITY_POOL,
        variables: { input },
      });
      return data.createLiquidityPool;
    },
    onSuccess: () => {
      // Invalidate and refetch liquidity pools
      queryClient.invalidateQueries({ queryKey: ['liquidityPools'] });
    },
  });
};
