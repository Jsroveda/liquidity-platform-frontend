
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplets, TrendingUp, DollarSign, Plus, MoreHorizontal } from "lucide-react";

const poolData = [
  {
    id: "POOL-001",
    name: "USD/EUR Core Pool",
    composition: "50% USD, 50% EUR",
    totalValue: "$12,450,000",
    apy: "5.2%",
    volume24h: "$2,100,000",
    status: "Active",
    risk: "Low"
  },
  {
    id: "POOL-002", 
    name: "Multi-Currency Pool",
    composition: "40% USD, 30% EUR, 20% GBP, 10% JPY",
    totalValue: "$8,750,000",
    apy: "7.8%",
    volume24h: "$1,850,000",
    status: "Active",
    risk: "Medium"
  },
  {
    id: "POOL-003",
    name: "High Yield Pool",
    composition: "60% USD, 25% CHF, 15% CAD",
    totalValue: "$5,200,000",
    apy: "12.1%",
    volume24h: "$950,000",
    status: "Active",
    risk: "High"
  }
];

export const LiquidityPools = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Liquidity Pools</h2>
          <p className="text-slate-600">Manage and monitor your liquidity pool positions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Create New Pool
        </Button>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Pool Value</p>
                <p className="text-2xl font-bold text-slate-900">$26.4M</p>
                <p className="text-sm text-green-600">+8.2% from last month</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Average APY</p>
                <p className="text-2xl font-bold text-slate-900">8.4%</p>
                <p className="text-sm text-green-600">+0.5% from last week</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Pools</p>
                <p className="text-2xl font-bold text-slate-900">3</p>
                <p className="text-sm text-slate-500">All operational</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pool Management Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Pool Overview</TabsTrigger>
          <TabsTrigger value="composition">Composition</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-800">Pool Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pool ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Total Value</TableHead>
                    <TableHead>APY</TableHead>
                    <TableHead>24h Volume</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {poolData.map((pool) => (
                    <TableRow key={pool.id}>
                      <TableCell className="font-mono text-sm">{pool.id}</TableCell>
                      <TableCell className="font-medium">{pool.name}</TableCell>
                      <TableCell>{pool.totalValue}</TableCell>
                      <TableCell className="text-green-600 font-medium">{pool.apy}</TableCell>
                      <TableCell>{pool.volume24h}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {pool.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            pool.risk === "Low" ? "border-green-200 text-green-700" :
                            pool.risk === "Medium" ? "border-yellow-200 text-yellow-700" :
                            "border-red-200 text-red-700"
                          }
                        >
                          {pool.risk}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="composition" className="space-y-4">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-800">Pool Composition Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-slate-600">Detailed composition charts and analytics will be displayed here.</p>
                <p className="text-sm text-slate-500 mt-2">Including currency breakdowns, allocation percentages, and rebalancing recommendations.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-800">Performance Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-slate-600">Performance metrics, historical returns, and risk analytics will be displayed here.</p>
                <p className="text-sm text-slate-500 mt-2">Including APY trends, volatility measures, and comparative analysis.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
