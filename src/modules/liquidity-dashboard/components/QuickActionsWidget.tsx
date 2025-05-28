
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRightLeft, Calculator, RefreshCw, DollarSign, FileText } from "lucide-react";

export const QuickActionsWidget = () => {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-slate-800 flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-600" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Button size="sm" className="bg-green-600 hover:bg-green-700 justify-start">
            <Calculator className="h-4 w-4 mr-2" />
            Auto Netting
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 justify-start">
            <DollarSign className="h-4 w-4 mr-2" />
            One-Click FX
          </Button>
          <Button size="sm" variant="outline" className="justify-start">
            <ArrowRightLeft className="h-4 w-4 mr-2" />
            Sweep Funds
          </Button>
          <Button size="sm" variant="outline" className="justify-start">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh APIs
          </Button>
        </div>
        
        <div className="border-t pt-3">
          <p className="text-xs text-slate-600 mb-2">Pending Actions</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>IC Invoices Ready</span>
              <Badge variant="outline" className="text-orange-600">
                $2.4M
              </Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>FX Orders Pending</span>
              <Badge variant="outline" className="text-blue-600">
                3 trades
              </Badge>
            </div>
          </div>
        </div>
        
        <Button size="sm" variant="outline" className="w-full justify-start">
          <FileText className="h-4 w-4 mr-2" />
          Generate CFO Report
        </Button>
      </CardContent>
    </Card>
  );
};
