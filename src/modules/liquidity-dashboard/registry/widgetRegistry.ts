
import { WidgetConfig } from '../types/widget';
import { LiquiditySnapshotWidget } from '../components/LiquiditySnapshotWidget';
import { LiquidityMetricsWidget } from '../components/LiquidityMetricsWidget';
import { AIForecastWidget } from '../components/AIForecastWidget';
import { QuickActionsWidget } from '../components/QuickActionsWidget';
import { SettlementStatusWidget } from '../components/SettlementStatusWidget';

export const widgetRegistry: Record<string, WidgetConfig> = {
  'liquidity-snapshot': {
    id: 'liquidity-snapshot',
    component: LiquiditySnapshotWidget,
    title: 'Liquidity Snapshot',
    description: 'Total liquidity overview with multi-currency breakdown and account drill-down',
    defaultSize: { cols: 2, rows: 1 },
    category: 'cash',
    roles: ['treasury-manager', 'cfo'],
    isVisible: true,
  },
  'liquidity-metrics': {
    id: 'liquidity-metrics',
    component: LiquidityMetricsWidget,
    title: 'Liquidity Metrics Overview',
    description: 'Comprehensive liquidity metrics including transfers, efficiency, and risk indicators',
    defaultSize: { cols: 4, rows: 1 },
    category: 'analytics',
    roles: ['treasury-manager', 'cfo'],
    isVisible: true,
  },
  'ai-forecast': {
    id: 'ai-forecast',
    component: AIForecastWidget,
    title: 'AI Cash Forecast',
    description: 'Machine learning powered cash flow predictions',
    defaultSize: { cols: 1, rows: 1 },
    category: 'analytics',
    roles: ['treasury-manager', 'analyst'],
    isVisible: true,
  },
  'quick-actions': {
    id: 'quick-actions',
    component: QuickActionsWidget,
    title: 'Quick Actions',
    description: 'One-click treasury operations and pending tasks',
    defaultSize: { cols: 1, rows: 1 },
    category: 'actions',
    roles: ['treasury-manager'],
    isVisible: true,
  },
  'settlement-status': {
    id: 'settlement-status',
    component: SettlementStatusWidget,
    title: 'Live Settlement Status',
    description: 'Real-time payment and settlement monitoring',
    defaultSize: { cols: 1, rows: 1 },
    category: 'risk',
    roles: ['treasury-manager', 'bank-lead'],
    isVisible: true,
  },
};

export const getWidgetById = (id: string): WidgetConfig | undefined => {
  return widgetRegistry[id];
};

export const getWidgetsByCategory = (category: string): WidgetConfig[] => {
  return Object.values(widgetRegistry).filter(widget => widget.category === category);
};

export const getWidgetsForRole = (role: string): WidgetConfig[] => {
  return Object.values(widgetRegistry).filter(widget => widget.roles.includes(role));
};
