
import { BarChart3, TrendingUp, Droplets, Building2, Settings, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const navigationItems = [
  { icon: BarChart3, label: "Dashboard", path: "/" },
  { icon: Droplets, label: "Liquidity Pools", path: "/liquidity-pools" },
  { icon: Building2, label: "Account Structure", path: "/account-structure" },
];

const secondaryItems = [
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help", path: "/help" },
];

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-[calc(100vh-73px)]">
      <nav className="p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant={isActive(item.path) ? "default" : "ghost"}
              className={`w-full justify-start ${
                isActive(item.path)
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
              onClick={() => navigate(item.path)}
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
                onClick={() => navigate(item.path)}
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
