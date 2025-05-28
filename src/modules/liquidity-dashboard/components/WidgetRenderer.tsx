
import React from 'react';
import { WidgetConfig, WidgetPlacement } from '../types/widget';
import { getWidgetById } from '../registry/widgetRegistry';

interface WidgetRendererProps {
  placement: WidgetPlacement;
  className?: string;
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ placement, className }) => {
  const widgetConfig = getWidgetById(placement.id);
  
  if (!widgetConfig || !placement.isVisible) {
    return null;
  }

  const WidgetComponent = widgetConfig.component;
  
  return (
    <div className={className}>
      <WidgetComponent />
    </div>
  );
};
