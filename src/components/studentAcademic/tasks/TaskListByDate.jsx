import TaskListItem from "./TaskListItem";

export default function TaskListByDate({ tasks, onOpenDetails }) {
  const grouped = tasks.reduce((acc, task) => {
    const date = new Date(task.dueDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      weekday: "long",
    });
    acc[date] = acc[date] || [];
    acc[date].push(task);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([date, group]) => (
        <div key={date}>
          <h3 className="text-slate-500 font-semibold mb-2">{date}</h3>
          <div className="space-y-2">
            {group.map((task) => (
              <TaskListItem key={task.id} task={task} onOpenDetails={onOpenDetails} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
