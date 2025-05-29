
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/modules/liquidity-dashboard/components/MetricCard";
import { TrendingUp, DollarSign, Activity, AlertTriangle, Shield, Droplets, Target } from "lucide-react";

export const LiquidityMetricsWidget = () => {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-800">Liquidity Metrics Overview</CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Add Liquidity
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <MetricCard
            title="Net Transfer Volume"
            value="$12.5M"
            change="+8.2%"
            icon={TrendingUp}
            trend="up"
          />
          <MetricCard
            title="Cash Efficiency Ratio"
            value="1.42"
            change="+0.08"
            icon={TrendingUp}
            trend="up"
          />
          <MetricCard
            title="FX Cost Savings"
            value="11.3bp"
            change="-2.1bp"
            icon={DollarSign}
            trend="up"
          />
          <MetricCard
            title="Pending Settlements"
            value="$3.2M"
            change="+$0.8M"
            icon={Activity}
            trend="up"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard
            title="Liquidity Risk Index"
            value="14"
            change="Low Risk"
            icon={Shield}
            trend="up"
          />
          <MetricCard
            title="Available Liquidity"
            value="$2.1M"
            change="Unused & Ready"
            icon={Droplets}
            trend="neutral"
          />
          <MetricCard
            title="Liquidity Coverage"
            value="1.8x"
            change="vs. obligations"
            icon={Target}
            trend="up"
          />
        </div>
      </CardContent>
    </Card>
  );
};
