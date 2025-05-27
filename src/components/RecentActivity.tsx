
import { ArrowUpRight, ArrowDownLeft, Plus, Minus } from "lucide-react";

const activities = [
  {
    type: "add",
    pool: "ETH/USDC",
    amount: "$12,450",
    time: "2 minutes ago",
    icon: Plus,
    color: "text-green-600"
  },
  {
    type: "remove",
    pool: "BTC/USDT",
    amount: "$8,320",
    time: "15 minutes ago",
    icon: Minus,
    color: "text-red-600"
  },
  {
    type: "swap",
    pool: "LINK/ETH",
    amount: "$3,720",
    time: "1 hour ago",
    icon: ArrowUpRight,
    color: "text-blue-600"
  },
  {
    type: "add",
    pool: "UNI/USDC",
    amount: "$5,680",
    time: "2 hours ago",
    icon: Plus,
    color: "text-green-600"
  },
];

export const RecentActivity = () => {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-slate-100 ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="font-medium text-slate-800">{activity.pool}</p>
              <p className="text-sm text-slate-600 capitalize">{activity.type} liquidity</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium text-slate-800">{activity.amount}</p>
            <p className="text-sm text-slate-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
