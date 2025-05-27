
import { gql } from '@apollo/client';

export const GET_LIQUIDITY_POOLS = gql`
  query GetLiquidityPools($limit: Int, $offset: Int) {
    liquidityPools(limit: $limit, offset: $offset) {
      id
      name
      baseCurrency
      quoteCurrency
      totalLiquidity
      volume24h
      apy
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_LIQUIDITY_POOL_DETAILS = gql`
  query GetLiquidityPoolDetails($id: ID!) {
    liquidityPool(id: $id) {
      id
      name
      baseCurrency
      quoteCurrency
      totalLiquidity
      volume24h
      apy
      status
      riskMetrics {
        var95
        var99
        sharpeRatio
        maxDrawdown
      }
      positions {
        id
        amount
        entryPrice
        currentPrice
        pnl
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_LIQUIDITY_METRICS = gql`
  query GetLiquidityMetrics($timeframe: String!) {
    liquidityMetrics(timeframe: $timeframe) {
      totalLiquidity
      volume24h
      totalValueLocked
      activePools
      timestamp
    }
  }
`;
