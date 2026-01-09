export default function SkillTag({ icon: Icon, label, colorClass }) {
  return (
    <div
      className={` flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ${colorClass}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </div>
  );
}
