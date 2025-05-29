
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down" | "neutral";
}

export const MetricCard = ({ title, value, change, icon: Icon, trend }: MetricCardProps) => {
  return (
    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
            <p className={`text-sm mt-1 ${
              trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-slate-600"
            }`}>
              {change}
            </p>
          </div>
          <div className={`p-3 rounded-lg ${
            trend === "up" ? "bg-green-100 text-green-600" : trend === "down" ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-600"
          }`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
