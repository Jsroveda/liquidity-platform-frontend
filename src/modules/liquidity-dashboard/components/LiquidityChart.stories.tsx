
import type { Meta, StoryObj } from '@storybook/react';
import { LiquidityChart } from './LiquidityChart';

const meta: Meta<typeof LiquidityChart> = {
  title: 'Treasury Components/Liquidity Chart',
  component: LiquidityChart,
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
      <div className="max-w-2xl">
        <div className="h-64">
          <Story />
        </div>
      </div>
    ),
  ],
};
