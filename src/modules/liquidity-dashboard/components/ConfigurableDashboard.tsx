
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Eye, EyeOff } from 'lucide-react';
import { DashboardLayout, WidgetPlacement } from '../types/widget';
import { WidgetRenderer } from './WidgetRenderer';
import { widgetRegistry } from '../registry/widgetRegistry';

interface ConfigurableDashboardProps {
  layout: DashboardLayout;
  onLayoutChange?: (layout: DashboardLayout) => void;
}

export const ConfigurableDashboard: React.FC<ConfigurableDashboardProps> = ({ 
  layout, 
  onLayoutChange 
}) => {
  const [isConfigMode, setIsConfigMode] = useState(false);

  const toggleWidgetVisibility = (widgetId: string) => {
    const updatedLayout = {
      ...layout,
      widgets: layout.widgets.map(widget =>
        widget.id === widgetId
          ? { ...widget, isVisible: !widget.isVisible }
          : widget
      ),
    };
    onLayoutChange?.(updatedLayout);
  };

  const getGridClasses = (placement: WidgetPlacement) => {
    const colStart = placement.position.col;
    const colSpan = placement.position.colSpan;
    
    // Map column positions to Tailwind classes
    const colStartClass = `col-start-${colStart}`;
    const colSpanClass = colSpan === 2 ? 'xl:col-span-2' : 'col-span-1';
    
    return `${colStartClass} ${colSpanClass}`;
  };

  return (
    <div className="space-y-4">
      {/* Configuration Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={isConfigMode ? "default" : "outline"}
            onClick={() => setIsConfigMode(!isConfigMode)}
          >
            <Settings className="h-4 w-4 mr-2" />
            {isConfigMode ? 'Exit Config' : 'Configure Dashboard'}
          </Button>
        </div>
        
        {isConfigMode && (
          <div className="flex gap-2">
            <span className="text-sm text-slate-600">Toggle widgets:</span>
            {layout.widgets.map((placement) => {
              const widget = widgetRegistry[placement.id];
              if (!widget) return null;
              
              return (
                <Button
                  key={placement.id}
                  size="sm"
                  variant="outline"
                  onClick={() => toggleWidgetVisibility(placement.id)}
                  className={placement.isVisible ? 'border-green-200' : 'border-red-200'}
                >
                  {placement.isVisible ? (
                    <Eye className="h-3 w-3 mr-1" />
                  ) : (
                    <EyeOff className="h-3 w-3 mr-1" />
                  )}
                  {widget.title}
                </Button>
              );
            })}
          </div>
        )}
      </div>

      {/* Widget Grid */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-${layout.gridCols} gap-6`}>
        {layout.widgets.map((placement) => (
          <WidgetRenderer
            key={placement.id}
            placement={placement}
            className={getGridClasses(placement)}
          />
        ))}
      </div>
    </div>
  );
};
