interface SkillProgressProps {
  category: string;
  items: string[];
}

function SkillProgress({ category, items }: SkillProgressProps) {
  return (
    <div className="min-w-0">
      <div className="group h-full relative overflow-hidden rounded-xl border border-gray-800 bg-white/[0.03] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-color/60">
        {/* Accent line */}
        <span className="absolute top-0 left-0 h-[3px] w-12 bg-primary-color transition-all duration-300 group-hover:w-full" />
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">{category}</h3>
          <span className="text-xs text-gray-500">{items.length}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 text-xs sm:px-3 sm:text-sm break-words text-gray-300 rounded-md bg-white/5 border border-gray-700 transition-colors hover:border-primary-color hover:text-primary-color"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillProgress;
