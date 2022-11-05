import { useState } from "react";

export default function TabSwitcher({ tabIds, getHeader, renderContent }) {
  const [selectedId, setSelectedId] = useState(tabIds[0]);
  return (
    <div className="px-6 pt-8 pb-16">
      <div className="flex items-center gap-4">
        {tabIds.map((tabId) => (
          <button
            key={tabId}
            onClick={() => setSelectedId(tabId)}
            className="bg-purple-500 px-6 py-3 text-purple-50 border-t rounded-t-lg"
          >
            {getHeader(tabId)}
          </button>
        ))}
      </div>

      <hr />
      <div key={selectedId} className="px-3 py-4 bg-purple-500">
        <h3 className="text-xl text-purple-50 mb-4 font-bold">
          {getHeader(selectedId)}
        </h3>
        {renderContent(selectedId)}
      </div>
    </div>
  );
}
