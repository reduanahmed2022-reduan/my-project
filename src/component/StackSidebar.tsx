import type { TechItem } from '../Types/tech';
interface StackSidebarProps {
  stack: TechItem[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onClearAll }: StackSidebarProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm sticky top-24">
      <div className="mb-4">
        <h2 className="font-bold text-sm text-gray-900">Your Stack</h2>
        <p className="text-xs text-gray-400 mt-0.5">{stack.length} Technology Selected</p>
      </div>

      {/* Conditional Rendering for Empty Stack */}
      {stack.length === 0 ? (
        <div className="text-center py-10 border border-dashed border-gray-200 rounded-lg">
          <p className="text-xs text-gray-400">No technology added yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 bg-gray-50 border border-gray-100 rounded"
              >
                <div className="flex items-center space-x-2">
                  <img src={item.icon} alt={item.name} className="w-4 h-4 object-contain" />
                  <span className="text-xs font-semibold text-gray-800">{item.name}</span>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-red-500 text-xs px-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onClearAll}
            className="w-full text-xs font-semibold py-2 border border-red-200 text-red-500 rounded hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;