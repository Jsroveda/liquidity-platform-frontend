
import type { Meta, StoryObj } from '@storybook/react';
import { AIForecastWidget } from './AIForecastWidget';

const meta: Meta<typeof AIForecastWidget> = {
  title: 'Treasury Widgets/AI Forecast',
  component: AIForecastWidget,
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
