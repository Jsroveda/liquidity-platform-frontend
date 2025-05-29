
import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';
import { TrendingUp, DollarSign, Activity, AlertTriangle } from 'lucide-react';

const meta: Meta<typeof MetricCard> = {
  title: 'Treasury Components/Metric Card',
  component: MetricCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    trend: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
    },
    icon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TrendingUp: Story = {
  args: {
    title: 'Net Transfer Volume',
    value: '$12.5M',
    change: '+8.2%',
    icon: TrendingUp,
    trend: 'up',
  },
};

export const TrendingDown: Story = {
  args: {
    title: 'Available Liquidity',
    value: '$2.1M',
    change: '-5.3%',
    icon: DollarSign,
    trend: 'down',
  },
};

export const Neutral: Story = {
  args: {
    title: 'Pending Settlements',
    value: '$3.2M',
    change: 'No change',
    icon: Activity,
    trend: 'neutral',
  },
};

export const WithAlert: Story = {
  args: {
    title: 'Risk Alert',
    value: 'High',
    change: 'Requires attention',
    icon: AlertTriangle,
    trend: 'down',
  },
};
