import React, { useState, useRef } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isBefore,
  isAfter,
} from "date-fns";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import TaskDetailsModal from "../tasks/TaskDetailsModal";

function flattenTasks(tasksObj) {
  const allTasks = [];
  for (const [projectName, taskList] of Object.entries(tasksObj)) {
    taskList.forEach((task) => {
      allTasks.push({ ...task, project: projectName });
    });
  }
  return allTasks;
}

function TaskCalendarView({ tasks = {} }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskList, setTaskList] = useState(flattenTasks(tasks));
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const isDraggingToPrevMonth = useRef(false);
  const isDraggingToNextMonth = useRef(false);

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
        task.id === draggableId ? { ...task, date: destinationDate } : task
      )
    );

    // Reset dragging flags
    isDraggingToPrevMonth.current = false;
    isDraggingToNextMonth.current = false;
  };

  const onDragUpdate = (update) => {
    const { destination } = update;
    if (!destination) return;

    const destDate = new Date(destination.droppableId);

    if (isBefore(destDate, startOfWeek(monthStart))) {
      if (!isDraggingToPrevMonth.current) {
        setCurrentMonth((prev) => subMonths(prev, 1));
        isDraggingToPrevMonth.current = true;
        isDraggingToNextMonth.current = false;
      }
    } else if (isAfter(destDate, endOfWeek(monthEnd))) {
      if (!isDraggingToNextMonth.current) {
        setCurrentMonth((prev) => addMonths(prev, 1));
        isDraggingToNextMonth.current = true;
        isDraggingToPrevMonth.current = false;
      }
    }
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  const resetToToday = () => {
    setCurrentMonth(new Date());
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, dateFormat);
      const isoDate = day.toISOString();
      const dayTasks = taskList.filter(
        (task) => task.date && isSameDay(new Date(task.date), day)
      );

      days.push(
        <Droppable key={isoDate} droppableId={isoDate}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-28 border border-gray-200 p-2 rounded-md flex flex-col gap-1 ${isSameMonth(day, monthStart)
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
                        project={task.project}
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
      <div className="flex items-center justify-between mb-6 border-b border-slate-700">
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

      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
        <div className="flex flex-col gap-2">{rows}</div>
      </DragDropContext>

      {selectedTask && (
        <TaskDetailsModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  );
}

export default TaskCalendarView;
