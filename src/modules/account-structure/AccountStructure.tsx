
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, DollarSign, Globe, ChevronRight, ChevronDown, Plus } from "lucide-react";
import { useState } from "react";

const accountData = [
  {
    id: "ACC-001",
    name: "North America Operations",
    type: "Regional Hub",
    currency: "USD",
    balance: "$45,200,000",
    status: "Active",
    entity: "Corp USA LLC",
    children: [
      { id: "ACC-001-01", name: "US Treasury", balance: "$32,100,000", currency: "USD" },
      { id: "ACC-001-02", name: "Canada Operations", balance: "$13,100,000", currency: "CAD" }
    ]
  },
  {
    id: "ACC-002",
    name: "European Operations", 
    type: "Regional Hub",
    currency: "EUR",
    balance: "€38,750,000",
    status: "Active",
    entity: "Corp Europe GmbH",
    children: [
      { id: "ACC-002-01", name: "Germany Treasury", balance: "€22,500,000", currency: "EUR" },
      { id: "ACC-002-02", name: "UK Operations", balance: "£8,900,000", currency: "GBP" },
      { id: "ACC-002-03", name: "Switzerland Office", balance: "CHF 5,200,000", currency: "CHF" }
    ]
  },
  {
    id: "ACC-003",
    name: "Asia Pacific",
    type: "Regional Hub", 
    currency: "USD",
    balance: "$28,400,000",
    status: "Active",
    entity: "Corp APAC Pte Ltd",
    children: [
      { id: "ACC-003-01", name: "Singapore Hub", balance: "$18,200,000", currency: "USD" },
      { id: "ACC-003-02", name: "Japan Operations", balance: "¥1,200,000,000", currency: "JPY" }
    ]
  }
];

export const AccountStructure = () => {
  const [expandedAccounts, setExpandedAccounts] = useState<string[]>(["ACC-001"]);

  const toggleExpanded = (accountId: string) => {
    setExpandedAccounts(prev => 
      prev.includes(accountId) 
        ? prev.filter(id => id !== accountId)
        : [...prev, accountId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Account Structure</h2>
          <p className="text-slate-600">View and manage your corporate account hierarchy</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Add Account
        </Button>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Assets</p>
                <p className="text-2xl font-bold text-slate-900">$112.4M</p>
                <p className="text-sm text-green-600">+2.3% this month</p>
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
                <p className="text-sm font-medium text-slate-600">Active Accounts</p>
                <p className="text-2xl font-bold text-slate-900">9</p>
                <p className="text-sm text-slate-500">Across 3 regions</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Currencies</p>
                <p className="text-2xl font-bold text-slate-900">5</p>
                <p className="text-sm text-slate-500">USD, EUR, GBP, CHF, JPY</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Entities</p>
                <p className="text-2xl font-bold text-slate-900">3</p>
                <p className="text-sm text-slate-500">Legal entities</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account Structure Tabs */}
      <Tabs defaultValue="hierarchy" className="space-y-4">
        <TabsList>
          <TabsTrigger value="hierarchy">Account Hierarchy</TabsTrigger>
          <TabsTrigger value="balances">Balance Summary</TabsTrigger>
          <TabsTrigger value="entities">Entity Mapping</TabsTrigger>
        </TabsList>

        <TabsContent value="hierarchy" className="space-y-4">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-800">Hierarchical Account Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {accountData.map((account) => (
                  <div key={account.id} className="border border-slate-200 rounded-lg">
                    <div 
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50"
                      onClick={() => toggleExpanded(account.id)}
                    >
                      <div className="flex items-center space-x-3">
                        {expandedAccounts.includes(account.id) ? (
                          <ChevronDown className="h-4 w-4 text-slate-500" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-slate-500" />
                        )}
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-slate-900">{account.name}</p>
                          <p className="text-sm text-slate-500">{account.entity}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {account.currency}
                        </Badge>
                        <span className="font-medium text-slate-900">{account.balance}</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {account.status}
                        </Badge>
                      </div>
                    </div>
                    
                    {expandedAccounts.includes(account.id) && (
                      <div className="border-t border-slate-200 bg-slate-50">
                        {account.children.map((child) => (
                          <div key={child.id} className="flex items-center justify-between p-4 pl-12">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4" />
                              <Building2 className="h-4 w-4 text-slate-400" />
                              <span className="text-slate-700">{child.name}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <Badge variant="outline" className="border-slate-300 text-slate-600 text-xs">
                                {child.currency}
                              </Badge>
                              <span className="text-slate-700">{child.balance}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="balances" className="space-y-4">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-800">Balance Summary by Currency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-slate-600">Currency-wise balance breakdown and analytics will be displayed here.</p>
                <p className="text-sm text-slate-500 mt-2">Including FX exposure, concentration analysis, and rebalancing suggestions.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="entities" className="space-y-4">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-800">Entity Relationship Mapping</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-slate-600">Legal entity structure and account relationships will be displayed here.</p>
                <p className="text-sm text-slate-500 mt-2">Including ownership structures, regulatory requirements, and compliance mapping.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
