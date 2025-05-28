
export interface WidgetConfig {
  id: string;
  component: React.ComponentType;
  title: string;
  description: string;
  defaultSize: {
    cols: number;
    rows: number;
  };
  category: 'cash' | 'risk' | 'actions' | 'analytics' | 'compliance';
  roles: string[];
  isVisible: boolean;
}

export interface DashboardLayout {
  widgets: WidgetPlacement[];
  gridCols: number;
}

export interface WidgetPlacement {
  id: string;
  position: {
    col: number;
    row: number;
    colSpan: number;
    rowSpan: number;
  };
  isVisible: boolean;
}
