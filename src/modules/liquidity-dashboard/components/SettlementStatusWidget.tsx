
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle, Wifi } from "lucide-react";

const settlements = [
  {
    id: "PVP-001",
    pair: "USD/EUR",
    amount: "$1.2M",
    status: "completed",
    time: "< 3s",
    method: "Atomic PvP"
  },
  {
    id: "PVP-002", 
    pair: "EUR/SGD",
    amount: "€850K",
    status: "processing",
    time: "1.2s",
    method: "Lock Tokens"
  },
  {
    id: "NET-003",
    pair: "Multi-currency",
    amount: "$4.1M",
    status: "pending",
    time: "Waiting",
    method: "IC Netting"
  }
];

export const SettlementStatusWidget = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-orange-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 border-green-200';
      case 'processing':
        return 'text-blue-600 border-blue-200';
      case 'pending':
        return 'text-orange-600 border-orange-200';
      default:
        return 'text-gray-600 border-gray-200';
    }
  };

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-800 flex items-center gap-2">
            <Wifi className="h-5 w-5 text-green-600" />
            Live Settlement Status
          </CardTitle>
          <Badge className="bg-green-100 text-green-700">
            0 failures today
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {settlements.map((settlement) => (
          <div key={settlement.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-3">
              {getStatusIcon(settlement.status)}
              <div>
                <p className="font-medium text-sm text-slate-800">{settlement.pair}</p>
                <p className="text-xs text-slate-600">{settlement.method}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-sm text-slate-800">{settlement.amount}</p>
              <Badge variant="outline" className={`text-xs ${getStatusColor(settlement.status)}`}>
                {settlement.time}
              </Badge>
            </div>
          </div>
        ))}
        
        <div className="text-xs text-slate-600 bg-blue-50 p-2 rounded mt-3">
          <strong>Performance:</strong> Avg PvP finality: 2.1s (Target: &lt;3s) • Settlement success: 99.97%
        </div>
      </CardContent>
    </Card>
  );
};
