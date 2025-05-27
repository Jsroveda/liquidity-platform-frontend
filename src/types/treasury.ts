
export interface LiquidityPool {
  id: string;
  name: string;
  baseCurrency: string;
  quoteCurrency: string;
  totalLiquidity: number;
  volume24h: number;
  apy: number;
  status: 'active' | 'inactive' | 'maintenance';
  createdAt: string;
  updatedAt: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'nostro' | 'vostro' | 'internal' | 'client';
  parentId?: string;
  balance: number;
  currency: string;
  status: 'active' | 'inactive' | 'blocked';
  children?: Account[];
}

export interface RiskMetrics {
  var95: number;
  var99: number;
  sharpeRatio: number;
  maxDrawdown: number;
  exposureLimit?: number;
  currentExposure?: number;
  utilizationRatio?: number;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'debit' | 'credit';
  description: string;
  timestamp: string;
  counterparty: string;
}

export interface LiquidityMetrics {
  totalLiquidity: number;
  volume24h: number;
  totalValueLocked: number;
  activePools: number;
  timestamp: string;
}
