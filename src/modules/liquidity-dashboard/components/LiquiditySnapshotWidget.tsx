
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Droplets, TrendingUp, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const LiquiditySnapshotWidget = () => {
  const [expandedCurrency, setExpandedCurrency] = useState<string | null>(null);

  const currencies = [
    {
      code: "USD",
      name: "US Dollar",
      total: "847.2M",
      change: "+2.4%",
      trend: "up",
      color: "bg-blue-50",
      accounts: [
        { name: "Chase Operating", balance: "$234.5M", status: "normal" },
        { name: "BoA Treasury", balance: "$312.8M", status: "normal" },
        { name: "Wells Fargo", balance: "$189.2M", status: "normal" },
        { name: "Citi Sweep", balance: "$110.7M", status: "normal" }
      ]
    },
    {
      code: "EUR",
      name: "Euro",
      total: "234.8M",
      change: "+1.8%",
      trend: "up",
      color: "bg-purple-50",
      accounts: [
        { name: "Deutsche Bank", balance: "€89.4M", status: "normal" },
        { name: "BNP Paribas", balance: "€78.2M", status: "normal" },
        { name: "ING Direct", balance: "€67.2M", status: "normal" }
      ]
    },
    {
      code: "SGD",
      name: "Singapore Dollar",
      total: "189.5M",
      change: "-0.3%",
      trend: "down",
      color: "bg-orange-50",
      accounts: [
        { name: "DBS Treasury", balance: "S$98.7M", status: "low" },
        { name: "OCBC Operating", balance: "S$56.3M", status: "normal" },
        { name: "UOB Savings", balance: "S$34.5M", status: "normal" }
      ]
    }
  ];

  const totalLiquidityUSD = "$1,347.2M";

  const toggleCurrency = (currencyCode: string) => {
    setExpandedCurrency(expandedCurrency === currencyCode ? null : currencyCode);
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-800 flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-600" />
            Liquidity Snapshot
          </CardTitle>
          <Badge variant="outline" className="text-green-600 border-green-200">
            <Clock className="h-3 w-3 mr-1" />
            Updated 15s ago
          </Badge>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border">
          <p className="text-sm text-slate-600">Total Liquidity (USD Equivalent)</p>
          <p className="text-3xl font-bold text-slate-800">{totalLiquidityUSD}</p>
          <p className="text-sm text-green-600 flex items-center justify-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +2.1% overall today
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {currencies.map((currency) => (
          <div key={currency.code} className="border rounded-lg overflow-hidden">
            <div 
              className={`p-3 ${currency.color} cursor-pointer hover:opacity-80 transition-opacity`}
              onClick={() => toggleCurrency(currency.code)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-lg font-bold text-slate-800">{currency.code}</div>
                  <div className="text-sm text-slate-600">{currency.name}</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="font-bold text-slate-800">{currency.total}</p>
                    <p className={`text-xs flex items-center gap-1 ${
                      currency.trend === "up" ? "text-green-600" : currency.trend === "down" ? "text-red-600" : "text-slate-600"
                    }`}>
                      {currency.trend === "up" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : currency.trend === "down" ? (
                        <AlertTriangle className="h-3 w-3" />
                      ) : null}
                      {currency.change}
                    </p>
                  </div>
                  {expandedCurrency === currency.code ? (
                    <ChevronUp className="h-4 w-4 text-slate-600" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-600" />
                  )}
                </div>
              </div>
            </div>
            
            {expandedCurrency === currency.code && (
              <div className="p-3 bg-white border-t">
                <div className="space-y-2">
                  {currency.accounts.map((account, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                      <span className="text-sm font-medium text-slate-700">{account.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-800">{account.balance}</span>
                        {account.status === "low" && (
                          <AlertTriangle className="h-3 w-3 text-orange-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        
        <div className="flex gap-2 pt-2">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1">
            Multi-Bank Aggregation
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Refresh Balances
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
