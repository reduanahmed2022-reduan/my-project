
import { FaStar } from "react-icons/fa";
import type { TechItem } from "../Types/tech";

interface TechCardProps {
  tech: TechItem;
  onAdd: (tech: TechItem) => void;
  isAdded: boolean;
}

const TechCard = ({ tech, onAdd, isAdded }: TechCardProps) => {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">

      <div className="flex justify-between items-center">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-8 h-8"
        />

        <span className="text-xs bg-blue-50 text-blue-500 px-2 py-1 rounded">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold mt-4">
        {tech.name}
      </h3>

      <p className="text-gray-500 text-sm mt-1">
        {tech.description}
      </p>

      <div className="flex justify-between text-xs text-gray-400 mt-4 pt-3 border-t">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-yellow-500">
          <FaStar />
           {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full mt-4 py-2 rounded ${
          isAdded
            ? 'bg-gray-200 text-gray-400'
            : 'bg-slate-900 text-white'
        }`}
      >
        {isAdded ? 'Added' : 'Add to Stack'}
      </button>

    </div>
  );
};

export default TechCard;