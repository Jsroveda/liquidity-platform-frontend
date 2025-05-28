
import type { Meta, StoryObj } from '@storybook/react';
import { SettlementStatusWidget } from './SettlementStatusWidget';

const meta: Meta<typeof SettlementStatusWidget> = {
  title: 'Treasury Widgets/Settlement Status',
  component: SettlementStatusWidget,
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
