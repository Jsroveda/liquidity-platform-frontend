
import type { Meta, StoryObj } from '@storybook/react';
import { LiquidityMetricsWidget } from './LiquidityMetricsWidget';

const meta: Meta<typeof LiquidityMetricsWidget> = {
  title: 'Treasury Widgets/Liquidity Metrics',
  component: LiquidityMetricsWidget,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InCard: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-6xl">
        <Story />
      </div>
    ),
  ],
};
