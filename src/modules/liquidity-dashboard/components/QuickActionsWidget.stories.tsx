
import type { Meta, StoryObj } from '@storybook/react';
import { QuickActionsWidget } from './QuickActionsWidget';

const meta: Meta<typeof QuickActionsWidget> = {
  title: 'Treasury Widgets/Quick Actions',
  component: QuickActionsWidget,
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
