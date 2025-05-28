
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/modules/liquidity-dashboard/components/MetricCard";
import { LiquidityChart } from "@/modules/liquidity-dashboard/components/LiquidityChart";
import { RecentActivity } from "@/modules/liquidity-dashboard/components/RecentActivity";
import { ConfigurableDashboard } from "@/modules/liquidity-dashboard/components/ConfigurableDashboard";
import { Droplets, TrendingUp, DollarSign, Activity, ArrowRight, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserDashboardConfig } from "./config/dashboardConfig";
import { DashboardLayout } from "./types/widget";

export const LiquidityDashboard = () => {
  const navigate = useNavigate();
  const [dashboardLayout, setDashboardLayout] = useState<DashboardLayout>(
    getUserDashboardConfig("emma-li")
  );

  const handleLayoutChange = (newLayout: DashboardLayout) => {
    setDashboardLayout(newLayout);
    // Future: Save to localStorage or API
    console.log('Dashboard layout updated:', newLayout);
  };

  return (
    <div className="space-y-6">
      {/* Header with Emma's context */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Treasury Dashboard</h2>
          <p className="text-slate-600">Real-time liquidity management for global treasury operations</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-slate-500">Welcome back, Emma Li</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Corporate Treasury Manager</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button 
            size="sm"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Bell className="mr-2 h-4 w-4" />
            CFO Report Due
          </Button>
          <Button 
            onClick={() => navigate('/liquidity-pools')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            View Liquidity Pools
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Configurable Widgets Row */}
      <ConfigurableDashboard 
        layout={dashboardLayout}
        onLayoutChange={handleLayoutChange}
      />

      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Available Cash"
          value="$2,847M"
          change="+12.4%"
          icon={Droplets}
          trend="up"
        />
        <MetricCard
          title="Nostro Optimization"
          value="73.2%"
          change="+8.2%"
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
          title="Settlements Today"
          value="47"
          change="+12"
          icon={Activity}
          trend="up"
        />
      </div>

      {/* Emma's Workflow Support Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">        
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-800">Liquidity Trends</CardTitle>
            <p className="text-sm text-slate-600">6-month cash position analysis</p>
          </CardHeader>
          <CardContent>
            <LiquidityChart />
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-800">Recent Treasury Activity</CardTitle>
            <p className="text-sm text-slate-600">Latest intercompany and settlement transactions</p>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      {/* Supporting Information Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-800">Integration Status</CardTitle>
            <p className="text-sm text-slate-600">Connected systems and data latency</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-green-50 rounded">
              <span className="text-sm font-medium">Multi-Bank APIs</span>
              <span className="text-xs text-green-600">✓ 4 banks connected</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-green-50 rounded">
              <span className="text-sm font-medium">ERP Integration</span>
              <span className="text-xs text-green-600">✓ SAP live feed</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
              <span className="text-sm font-medium">FX Rate Feed</span>
              <span className="text-xs text-blue-600">↻ 15s refresh</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
              <span className="text-sm font-medium">APAC Balances</span>
              <span className="text-xs text-orange-600">⚠ 45s delay</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
