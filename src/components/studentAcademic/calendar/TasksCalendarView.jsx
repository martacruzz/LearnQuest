import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameMonth, isSameDay } from "date-fns";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

function flattenTasks(tasksObj) {
  const allTasks = [];
  for (const [projectName, taskList] of Object.entries(tasksObj)) {
    taskList.forEach((task) => {
      allTasks.push({ 
        ...task,
        project: projectName,
        date: task.dueDate
      });
    });
  }
  return allTasks;
}

function TaskCalendarView({ tasks = {} }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskList, setTaskList] = useState(flattenTasks(tasks));
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "d";
  const rows = [];
  let days = [];
  let day = startDate;

  const onDragEnd = (result) => {
    const { destination, draggableId } = result;
    if (!destination) return;

    const destinationDate = destination.droppableId;

    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === draggableId ? { 
          ...task, 
          date: destinationDate,
          dueDate: destinationDate
        } : task
      )
    );
  };

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const resetToToday = () => setCurrentMonth(new Date());

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, dateFormat);
      const isoDate = day.toISOString();
      const dayTasks = taskList.filter((task) => 
        task.date && isSameDay(new Date(task.date), day)
      );

      days.push(
        <Droppable key={isoDate} droppableId={isoDate}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-28 border border-gray-200 p-2 rounded-md flex flex-col gap-1 ${
                isSameMonth(day, monthStart) 
                  ? "bg-gray-100" 
                  : "bg-gray-100 text-slate-500"
              } ${snapshot.isDraggingOver ? "bg-gray-300" : ""}`}
            >
              <div className="text-xs text-slate-400">{formattedDate}</div>

              {dayTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.7 : 1,
                      }}
                    >
                      <TaskCard
                        title={task.title}
                        subject={task.subject}
                        priority={task.priority || "Chill"}
                        onClick={() => setSelectedTask(task)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      );

      day = addDays(day, 1);
    }

    rows.push(
      <div key={day.toISOString()} className="grid grid-cols-7 gap-2">
        {days}
      </div>
    );
    days = [];
  }

  return (
    <div className="ml-16 p-10 relative">
      <div className="flex items-center justify-between mb-6 border-b border-slate-200">
        <h2 className="text-xl font-semibold text-slate-500">
          {format(currentMonth, "MMMM yyyy")}
        </h2>

        <div className="flex items-center">
          <button
            onClick={prevMonth}
            className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 px-3 py-1 rounded"
          >
            &lt;
          </button>
          <button
            onClick={resetToToday}
            className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 px-4 py-1 rounded"
          >
            Today
          </button>
          <button
            onClick={nextMonth}
            className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 px-3 py-1 rounded"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-slate-400 text-sm mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col gap-2">{rows}</div>
      </DragDropContext>

      {/* Popup com overlay ajustado */}
      {selectedTask && (
        <div className="fixed inset-0 z-50">
          <div 
            className="inset-0 bg-black bg-opacity-20"
            onClick={() => setSelectedTask(null)}
          />
          
          <div className="relative flex items-center justify-center h-full">
            <div className="bg-white border border-slate-200 rounded-lg shadow-2xl p-6 w-full max-w-2xl mx-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-800">
                  {selectedTask.title}
                </h3>
                <button
                  onClick={() => setSelectedTask(null)}
                  className="text-slate-500 hover:text-slate-700 text-2xl leading-none"
                >
                  &times;
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-500 font-medium">Subject</p>
                  <p className="text-slate-800">{selectedTask.subject}</p>
                </div>
                
                <div>
                  <p className="text-slate-500 font-medium">Due Date</p>
                  <p className="text-slate-800">
                    {selectedTask.dueDate} • {selectedTask.dueTime}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 font-medium">Status</p>
                  <p className={`font-medium ${
                    selectedTask.status === 'completed' 
                      ? 'text-green-600' 
                      : selectedTask.status === 'overdue' 
                        ? 'text-red-600' 
                        : 'text-blue-600'
                  }`}>
                    {selectedTask.status}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 font-medium">XP</p>
                  <p className="text-emerald-600 font-medium">{selectedTask.xp}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-slate-500 font-medium">Instructions</p>
                <p className="text-slate-800 mt-1">{selectedTask.instructions}</p>
              </div>

              <div className="mt-4">
                <p className="text-slate-500 font-medium">Resources</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedTask.resources.map((resource, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 rounded-md text-slate-700 text-sm"
                    >
                      {resource}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskCalendarView;