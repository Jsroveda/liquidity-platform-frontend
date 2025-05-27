
import { Header } from "@/shell/components/Header";
import { Navigation } from "@/shell/components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LiquidityDashboard } from "@/modules/liquidity-dashboard/LiquidityDashboard";
import { LiquidityPools } from "@/modules/liquidity-pools/LiquidityPools";
import { AccountStructure } from "@/modules/account-structure/AccountStructure";
import NotFound from "@/pages/NotFound";

export const Shell = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <div className="flex">
          <Navigation />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<LiquidityDashboard />} />
              <Route path="/liquidity-pools" element={<LiquidityPools />} />
              <Route path="/account-structure" element={<AccountStructure />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};
