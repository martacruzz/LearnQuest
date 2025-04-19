function SidebarItemAcademic({ icon, label }) {
  return (
    <div className="group relative flex justify-center items-center">
      {icon}
      <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-slate-700 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition z-10 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default SidebarItemAcademic;
