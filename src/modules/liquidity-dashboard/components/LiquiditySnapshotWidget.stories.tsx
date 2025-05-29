
import type { Meta, StoryObj } from '@storybook/react';
import { LiquiditySnapshotWidget } from './LiquiditySnapshotWidget';

const meta: Meta<typeof LiquiditySnapshotWidget> = {
  title: 'Treasury Widgets/Liquidity Snapshot',
  component: LiquiditySnapshotWidget,
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
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};
