
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftRight } from "lucide-react";

export const Transfers = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Transfers</h2>
        <p className="text-slate-600">Manage intercompany and external transfers</p>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-slate-800 flex items-center gap-2">
            <ArrowLeftRight className="h-5 w-5 text-blue-600" />
            Transfer Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <ArrowLeftRight className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600">Transfer functionality coming soon...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
