import React, { useState, useEffect, useRef } from "react";
import { ListFilter, Calendar, AlarmClock, CheckCircle, Plus, ChevronDown } from "lucide-react";

const filters = [
  { key: "all", label: "All", icon: ListFilter },
  { key: "today", label: "Today", icon: Calendar },
  { key: "dueSoon", label: "Due Soon", icon: AlarmClock },
  { key: "done", label: "Done", icon: CheckCircle },
];

const sortingOptions = [
  { key: "none", label: "None" },
  { key: "priority", label: "Priority" },
  { key: "date", label: "Date" },
  { key: "done", label: "Done" },
];


function TaskFilterBar({ selectedFilter, setSelectedFilter, selectedSort, setSelectedSort, onAddProject }) {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reference to the dropdown for detecting clicks outside
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-6 border-b border-slate-700 px-4 pb-2 text-sm font-medium items-center">
      {/* Filters Group */}
      {filters.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => setSelectedFilter(key)}
          className={`capitalize transition-colors flex items-center gap-1 ${selectedFilter === key
            ? "border-b-2 border-white text-slate-800"
            : "text-slate-400 hover:text-slate-800"
            }`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}

      {/* Spacer pushes the following to the right */}
      <div className="ml-auto flex items-center gap-6">
        {/* Sorting Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors"
          >
            Sort by
            <ChevronDown className="w-4 h-4" />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-8 left-0 z-50 bg-gray-200 rounded-md shadow-lg p-2">
              {sortingOptions.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedSort(key);
                    setIsDropdownOpen(false);
                  }}
                  className={`block text-slate-500 hover:text-slate-900 px-4 py-2 ${selectedSort === key ? "underline text-slate-900" : ""
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Add Task Button */}
        <button
          onClick={onAddProject}
          className="text-slate-400 hover:text-slate-800 transition-colors flex items-center gap-1"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>
    </div>

  );
}

export default TaskFilterBar;
