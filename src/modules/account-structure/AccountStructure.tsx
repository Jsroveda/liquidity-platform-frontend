
export const AccountStructure = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Account Structure</h2>
        <p className="text-slate-600">View and manage your corporate account hierarchy</p>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-8">
        <div className="text-center">
          <h3 className="text-lg font-medium text-slate-800 mb-2">Account Structure Module</h3>
          <p className="text-slate-600">This micro-frontend module will contain hierarchical account views and management.</p>
          <div className="mt-4 text-sm text-slate-500">
            <p>Planned features:</p>
            <ul className="mt-2 space-y-1">
              <li>• Hierarchical tree view of accounts</li>
              <li>• Account details and balances</li>
              <li>• Currency and entity grouping</li>
              <li>• Account relationship mapping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
