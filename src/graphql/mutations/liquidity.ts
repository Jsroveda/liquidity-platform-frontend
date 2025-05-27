
import { gql } from '@apollo/client';

export const CREATE_LIQUIDITY_POOL = gql`
  mutation CreateLiquidityPool($input: CreateLiquidityPoolInput!) {
    createLiquidityPool(input: $input) {
      id
      name
      baseCurrency
      quoteCurrency
      status
    }
  }
`;

export const UPDATE_LIQUIDITY_POOL = gql`
  mutation UpdateLiquidityPool($id: ID!, $input: UpdateLiquidityPoolInput!) {
    updateLiquidityPool(id: $id, input: $input) {
      id
      name
      status
    }
  }
`;

export const ADD_LIQUIDITY = gql`
  mutation AddLiquidity($poolId: ID!, $amount: Float!) {
    addLiquidity(poolId: $poolId, amount: $amount) {
      success
      transactionId
      newBalance
    }
  }
`;
