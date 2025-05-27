
import { BarChart3, TrendingUp, Droplets, PieChart, Settings, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: Droplets, label: "Liquidity Pools", active: false },
  { icon: TrendingUp, label: "Markets", active: false },
  { icon: PieChart, label: "Portfolio", active: false },
];

const secondaryItems = [
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-[calc(100vh-73px)]">
      <nav className="p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start ${
                item.active 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="space-y-2">
            {secondaryItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};
