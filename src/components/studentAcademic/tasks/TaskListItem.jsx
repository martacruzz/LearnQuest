export default function TaskListItem({ task, onOpenDetails }) {
    return (
      <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <div>
          <h4 className="font-semibold text-slate-800 text-sm">{task.title}</h4>
          <p className="text-xs text-slate-500">
            {task.status === "completed"
              ? `Submitted at ${task.submissionTime}`
              : `Worth ${task.xp} XP`}
            <br />
            {task.subject}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {task.status === "completed" && (
            <span className="text-green-600 bg-green-100 text-xs px-2 py-1 rounded">
              ✓ Submitted
            </span>
          )}
          <button
            onClick={() => onOpenDetails(task)}
            className="text-sm text-slate-400 hover:underline"
          >
            Details
          </button>
        </div>
      </div>
    );
  }
  