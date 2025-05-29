
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LiquidityDashboard } from "@/modules/liquidity-dashboard/LiquidityDashboard";
import { LiquidityPools } from "@/modules/liquidity-pools/LiquidityPools";
import { AccountStructure } from "@/modules/account-structure/AccountStructure";

export const Overview = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const subTabs = [
    { id: "liquidity-summary", label: "Liquidity Summary", path: "/overview/liquidity-summary" },
    { id: "liquidity-pools", label: "Liquidity Pools", path: "/overview/liquidity-pools" },
    { id: "account-structure", label: "Account Structure", path: "/overview/account-structure" }
  ];

  const getActiveTab = () => {
    if (location.pathname === "/" || location.pathname === "/overview") return "liquidity-summary";
    if (location.pathname.includes("liquidity-pools")) return "liquidity-pools";
    if (location.pathname.includes("account-structure")) return "account-structure";
    return "liquidity-summary";
  };

  const activeTab = getActiveTab();

  const handleTabClick = (tab: any) => {
    navigate(tab.path);
  };

  return (
    <div className="space-y-6">
      {/* Sub-navigation for Overview */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex space-x-1">
          {subTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              onClick={() => handleTabClick(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Sub-route content */}
      <Routes>
        <Route path="/" element={<Navigate to="/overview/liquidity-summary" replace />} />
        <Route path="/liquidity-summary" element={<LiquidityDashboard />} />
        <Route path="/liquidity-pools" element={<LiquidityPools />} />
        <Route path="/account-structure" element={<AccountStructure />} />
      </Routes>
    </div>
  );
};
