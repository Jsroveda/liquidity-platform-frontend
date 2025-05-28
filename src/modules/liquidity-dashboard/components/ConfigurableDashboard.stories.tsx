
import type { Meta, StoryObj } from '@storybook/react';
import { ConfigurableDashboard } from './ConfigurableDashboard';
import { emmaDashboardConfig } from '../config/dashboardConfig';

const meta: Meta<typeof ConfigurableDashboard> = {
  title: 'Treasury Widgets/Configurable Dashboard',
  component: ConfigurableDashboard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    layout: emmaDashboardConfig,
  },
};

export const ConfigMode: Story = {
  args: {
    layout: emmaDashboardConfig,
  },
  play: async ({ canvasElement }) => {
    // Automatically enable config mode for this story
    const configButton = canvasElement.querySelector('button');
    if (configButton) {
      configButton.click();
    }
  },
};
