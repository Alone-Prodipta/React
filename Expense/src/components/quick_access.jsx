import React from "react";

function QuickAccess() {
  return (
    <div className="quick-access-container bg-[#1E1E1E] p-4 rounded-lg shadow-md">
      <h2 className="text-gray-300 text-lg font-semibold mb-4">Quick Access</h2>
      <div className="flex flex-wrap gap-4 justify-between">
        <button className="bg-[#3B1E47] text-white px-6 py-3 rounded-md hover:bg-[#5A2E6E] transition">
          + New expense
        </button>
        <button className="bg-[#2E3A59] text-white px-6 py-3 rounded-md hover:bg-[#445A7A] transition">
          + Add receipt
        </button>
        <button className="bg-[#1E4B47] text-white px-6 py-3 rounded-md hover:bg-[#2E6E6A] transition">
          + Create report
        </button>
        <button className="bg-[#4B1E1E] text-white px-6 py-3 rounded-md hover:bg-[#6E2E2E] transition">
          + Create trip
        </button>
      </div>
    </div>
  );
}

export default QuickAccess;
