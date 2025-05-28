
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
import { TrendingUp, Brain, AlertTriangle } from "lucide-react";

const forecastData = [
  { day: 'Today', forecast: 847, actual: 847 },
  { day: 'Mon', forecast: 723, actual: null },
  { day: 'Tue', forecast: 892, actual: null },
  { day: 'Wed', forecast: 756, actual: null },
  { day: 'Thu', forecast: 834, actual: null },
  { day: 'Fri', forecast: 678, actual: null },
];

export const AIForecastWidget = () => {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-800 flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            AI Cash Forecast (USD)
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-orange-600 border-orange-200">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Thu shortfall risk
            </Badge>
            <Badge className="bg-purple-100 text-purple-700">
              MAPE &lt;10%
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={forecastData}>
              <XAxis dataKey="day" fontSize={10} />
              <YAxis fontSize={10} tickFormatter={(value) => `$${value}M`} />
              <ReferenceLine y={700} stroke="#ef4444" strokeDasharray="2 2" />
              <Bar dataKey="forecast" fill="#8b5cf6" radius={2} />
              <Bar dataKey="actual" fill="#059669" radius={2} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            Scenario Analysis
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            What-If UI
          </Button>
        </div>
        
        <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded">
          <strong>Insight:</strong> Thursday forecast shows potential $56M shortfall. Consider advancing AR collections or delaying non-critical payments.
        </div>
      </CardContent>
    </Card>
  );
};
