
import { Header } from "@/shell/components/Header";
import { Navigation } from "@/shell/components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Overview } from "@/modules/overview/Overview";
import { Transfers } from "@/modules/transfers/Transfers";
import { Analytics } from "@/modules/analytics/Analytics";
import { Reports } from "@/modules/reports/Reports";
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
              <Route path="/" element={<Overview />} />
              <Route path="/overview/*" element={<Overview />} />
              <Route path="/transfers" element={<Transfers />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};
