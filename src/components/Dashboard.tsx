
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { LiquidityChart } from "@/components/LiquidityChart";
import { RecentActivity } from "@/components/RecentActivity";
import { Droplets, TrendingUp, DollarSign, Activity } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Dashboard</h2>
        <p className="text-slate-600">Monitor your liquidity positions and market performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Liquidity"
          value="$2,847,392"
          change="+12.4%"
          icon={Droplets}
          trend="up"
        />
        <MetricCard
          title="24h Volume"
          value="$1,239,847"
          change="+8.2%"
          icon={TrendingUp}
          trend="up"
        />
        <MetricCard
          title="Total Value Locked"
          value="$8,923,741"
          change="+5.7%"
          icon={DollarSign}
          trend="up"
        />
        <MetricCard
          title="Active Pools"
          value="127"
          change="+3"
          icon={Activity}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-800">Liquidity Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <LiquidityChart />
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-800">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
