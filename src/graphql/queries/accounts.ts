
import { gql } from '@apollo/client';

export const GET_ACCOUNT_STRUCTURE = gql`
  query GetAccountStructure {
    accountStructure {
      id
      name
      type
      parentId
      balance
      currency
      status
      children {
        id
        name
        type
        balance
        currency
        status
      }
    }
  }
`;

export const GET_ACCOUNT_DETAILS = gql`
  query GetAccountDetails($id: ID!) {
    account(id: $id) {
      id
      name
      type
      balance
      currency
      status
      transactions {
        id
        amount
        type
        description
        timestamp
        counterparty
      }
      riskMetrics {
        exposureLimit
        currentExposure
        utilizationRatio
      }
    }
  }
`;
