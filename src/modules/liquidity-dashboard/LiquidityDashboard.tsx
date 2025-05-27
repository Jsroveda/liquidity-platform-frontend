import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/modules/liquidity-dashboard/components/MetricCard";
import { LiquidityChart } from "@/modules/liquidity-dashboard/components/LiquidityChart";
import { RecentActivity } from "@/modules/liquidity-dashboard/components/RecentActivity";
import { Droplets, TrendingUp, DollarSign, Activity, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LiquidityDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Liquidity Dashboard</h2>
          <p className="text-slate-600">Monitor your liquidity positions and market performance</p>
        </div>
        <div className="flex space-x-3">
          <Button 
            onClick={() => navigate('/liquidity-pools')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            View Liquidity Pools
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            onClick={() => navigate('/account-structure')}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Account Structure
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
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
