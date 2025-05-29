
import React from 'react';
import { WidgetConfig, WidgetPlacement } from '../types/widget';
import { getWidgetById } from '../registry/widgetRegistry';

interface WidgetRendererProps {
  placement: WidgetPlacement;
  className?: string;
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ placement, className }) => {
  console.log('WidgetRenderer - rendering widget:', placement.id);
  
  const widgetConfig = getWidgetById(placement.id);
  console.log('WidgetRenderer - widget config found:', !!widgetConfig);
  
  if (!widgetConfig || !placement.isVisible) {
    console.log('WidgetRenderer - widget not visible or config missing for:', placement.id);
    return null;
  }

  const WidgetComponent = widgetConfig.component;
  console.log('WidgetRenderer - rendering component for:', placement.id);
  
  return (
    <div className={className}>
      <WidgetComponent />
    </div>
  );
};
