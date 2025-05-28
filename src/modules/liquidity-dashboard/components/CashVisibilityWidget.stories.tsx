
import type { Meta, StoryObj } from '@storybook/react';
import { CashVisibilityWidget } from './CashVisibilityWidget';

const meta: Meta<typeof CashVisibilityWidget> = {
  title: 'Treasury Widgets/Cash Visibility',
  component: CashVisibilityWidget,
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
        <Story />
      </div>
    ),
  ],
};
