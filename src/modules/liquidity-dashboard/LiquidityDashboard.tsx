
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LiquidityChart } from "@/modules/liquidity-dashboard/components/LiquidityChart";
import { RecentActivity } from "@/modules/liquidity-dashboard/components/RecentActivity";
import { ConfigurableDashboard } from "@/modules/liquidity-dashboard/components/ConfigurableDashboard";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Bell, Info } from "lucide-react";
import { useState } from "react";
import { getUserDashboardConfig } from "./config/dashboardConfig";
import { DashboardLayout } from "./types/widget";

export const LiquidityDashboard = () => {
  const [dashboardLayout, setDashboardLayout] = useState<DashboardLayout>(
    getUserDashboardConfig("emma-li")
  );

  console.log('LiquidityDashboard - dashboard layout:', dashboardLayout);
  console.log('LiquidityDashboard - widgets:', dashboardLayout.widgets);

  const handleLayoutChange = (newLayout: DashboardLayout) => {
    setDashboardLayout(newLayout);
    console.log('Dashboard layout updated:', newLayout);
  };

  return (
    <div className="space-y-6">
      {/* Header with timestamp and time period selector */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Liquidity Dashboard</h2>
          <p className="text-slate-600">Real-time liquidity management for global treasury operations</p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm text-slate-500">Welcome back, Emma Li</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Corporate Treasury Manager</span>
            <span className="text-xs text-slate-500">Last Updated: Today, 10:45 AM</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Button 
            size="sm"
            variant="outline"
            className="border-slate-300 text-slate-600"
          >
            Last 7 days
          </Button>
          <Button 
            size="sm"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-50"
          >
            <Bell className="mr-2 h-4 w-4" />
            CFO Report Due
          </Button>
        </div>
      </div>

      {/* Configurable Widgets Row */}
      <ConfigurableDashboard 
        layout={dashboardLayout}
        onLayoutChange={handleLayoutChange}
      />

      {/* Liquidity Trends - moved to be under the configurable widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card className="border-slate-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-800">Liquidity Trends</CardTitle>
                  <Info className="h-4 w-4 text-slate-400" />
                </div>
                <p className="text-sm text-slate-600">6-month cash position analysis</p>
              </CardHeader>
              <CardContent>
                <LiquidityChart />
              </CardContent>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Liquidity Trends Analysis</h4>
              <p className="text-sm text-slate-600">
                Historical view of cash positions across major currencies and entities. 
                Helps identify seasonal patterns and plan for future liquidity needs.
              </p>
              <div className="text-xs text-slate-500">
                Data refresh: Daily • Forecast horizon: 90 days
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Card className="border-slate-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-800">Recent Treasury Activity</CardTitle>
                  <Info className="h-4 w-4 text-slate-400" />
                </div>
                <p className="text-sm text-slate-600">Latest intercompany and settlement transactions</p>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Treasury Activity Feed</h4>
              <p className="text-sm text-slate-600">
                Real-time feed of treasury operations including settlements, transfers, 
                and FX transactions. Click any item for detailed transaction information.
              </p>
              <div className="text-xs text-slate-500">
                Auto-refresh: 30s • Filter options available
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* Supporting Information Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card className="border-slate-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-800">Integration Status</CardTitle>
                  <Info className="h-4 w-4 text-slate-400" />
                </div>
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
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">System Integration Health</h4>
              <p className="text-sm text-slate-600">
                Monitor the status and performance of all connected systems. 
                Green indicates healthy connections, orange/red indicate issues requiring attention.
              </p>
              <div className="text-xs text-slate-500">
                SLA target: 99.5% uptime • Monitoring: 24/7
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};
