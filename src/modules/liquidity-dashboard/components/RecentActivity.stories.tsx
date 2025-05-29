
import type { Meta, StoryObj } from '@storybook/react';
import { RecentActivity } from './RecentActivity';

const meta: Meta<typeof RecentActivity> = {
  title: 'Treasury Components/Recent Activity',
  component: RecentActivity,
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
