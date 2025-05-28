
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Droplets, TrendingUp, AlertTriangle } from "lucide-react";

export const CashVisibilityWidget = () => {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-800 flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-600" />
            Real-Time Cash Position
          </CardTitle>
          <Badge variant="outline" className="text-green-600 border-green-200">
            <Clock className="h-3 w-3 mr-1" />
            Updated 15s ago
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-slate-600">USD Available</p>
            <p className="text-xl font-bold text-slate-800">$847.2M</p>
            <p className="text-xs text-green-600 flex items-center justify-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +2.4% today
            </p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <p className="text-sm text-slate-600">EUR Available</p>
            <p className="text-xl font-bold text-slate-800">€234.8M</p>
            <p className="text-xs text-green-600 flex items-center justify-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +1.8% today
            </p>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <p className="text-sm text-slate-600">SGD Available</p>
            <p className="text-xl font-bold text-slate-800">S$189.5M</p>
            <p className="text-xs text-red-600 flex items-center justify-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              Low buffer
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
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
