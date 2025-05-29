
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/modules/liquidity-dashboard/components/MetricCard";
import { LiquidityChart } from "@/modules/liquidity-dashboard/components/LiquidityChart";
import { RecentActivity } from "@/modules/liquidity-dashboard/components/RecentActivity";
import { ConfigurableDashboard } from "@/modules/liquidity-dashboard/components/ConfigurableDashboard";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Droplets, TrendingUp, DollarSign, Activity, ArrowRight, Bell, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserDashboardConfig } from "./config/dashboardConfig";
import { DashboardLayout } from "./types/widget";

export const LiquidityDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [dashboardLayout, setDashboardLayout] = useState<DashboardLayout>(
    getUserDashboardConfig("emma-li")
  );

  const handleLayoutChange = (newLayout: DashboardLayout) => {
    setDashboardLayout(newLayout);
    console.log('Dashboard layout updated:', newLayout);
  };

  const navigationTabs = [
    { id: "overview", label: "Overview", path: "/" },
    { id: "liquidity-pools", label: "Liquidity Pools", path: "/liquidity-pools" },
    { id: "account-structure", label: "Account Structure", path: "/account-structure" }
  ];

  const handleTabClick = (tab: any) => {
    setActiveTab(tab.id);
    navigate(tab.path);
  };

  return (
    <div className="space-y-6">
      {/* Top Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex space-x-1">
          {navigationTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              onClick={() => handleTabClick(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </Button>
          ))}
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
      </div>

      {/* Configurable Widgets Row */}
      <ConfigurableDashboard 
        layout={dashboardLayout}
        onLayoutChange={handleLayoutChange}
      />

      {/* Key Metrics Row with Hover Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="relative">
              <MetricCard
                title="Total Available Cash"
                value="$2,847M"
                change="+12.4%"
                icon={Droplets}
                trend="up"
              />
              <Info className="absolute top-2 right-2 h-4 w-4 text-slate-400" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Total Available Cash</h4>
              <p className="text-sm text-slate-600">
                Aggregated cash positions across all bank accounts and currencies. 
                This includes immediately available funds for operations and settlements.
              </p>
              <div className="text-xs text-slate-500">
                Last updated: 2 minutes ago • Source: Multi-bank API
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="relative">
              <MetricCard
                title="Nostro Optimization"
                value="73.2%"
                change="+8.2%"
                icon={TrendingUp}
                trend="up"
              />
              <Info className="absolute top-2 right-2 h-4 w-4 text-slate-400" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Nostro Optimization</h4>
              <p className="text-sm text-slate-600">
                Efficiency metric showing how well nostro accounts are optimized. 
                Higher percentages indicate better cash utilization and reduced idle funds.
              </p>
              <div className="text-xs text-slate-500">
                Target: 75% • Current trend: Improving
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="relative">
              <MetricCard
                title="FX Cost Savings"
                value="11.3bp"
                change="-2.1bp"
                icon={DollarSign}
                trend="up"
              />
              <Info className="absolute top-2 right-2 h-4 w-4 text-slate-400" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">FX Cost Savings</h4>
              <p className="text-sm text-slate-600">
                Foreign exchange cost savings achieved through netting and optimization. 
                Measured in basis points (bp) compared to standard market rates.
              </p>
              <div className="text-xs text-slate-500">
                Monthly average: 9.8bp • Annual target: 12bp
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="relative">
              <MetricCard
                title="Settlements Today"
                value="47"
                change="+12"
                icon={Activity}
                trend="up"
              />
              <Info className="absolute top-2 right-2 h-4 w-4 text-slate-400" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Settlements Today</h4>
              <p className="text-sm text-slate-600">
                Number of intercompany and external settlements processed today. 
                Includes both incoming and outgoing transactions across all entities.
              </p>
              <div className="text-xs text-slate-500">
                Pending: 3 • Failed: 0 • Success rate: 100%
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* Emma's Workflow Support Row */}
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
