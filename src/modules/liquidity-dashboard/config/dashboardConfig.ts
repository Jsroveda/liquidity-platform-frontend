
import { DashboardLayout } from '../types/widget';

export const emmaDashboardConfig: DashboardLayout = {
  gridCols: 4,
  widgets: [
    {
      id: 'liquidity-snapshot',
      position: { col: 1, row: 1, colSpan: 2, rowSpan: 1 },
      isVisible: true,
    },
    {
      id: 'quick-actions',
      position: { col: 3, row: 1, colSpan: 1, rowSpan: 1 },
      isVisible: true,
    },
    {
      id: 'ai-forecast',
      position: { col: 4, row: 1, colSpan: 1, rowSpan: 1 },
      isVisible: true,
    },
    {
      id: 'settlement-status',
      position: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      isVisible: true,
    },
  ],
};

export const getUserDashboardConfig = (userId: string): DashboardLayout => {
  return emmaDashboardConfig;
};
