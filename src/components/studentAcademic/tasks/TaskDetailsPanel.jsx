import { useState } from "react";

export default function TaskDetailsPanel({ task, onClose, onComplete, onUndo }) {
  const [attachedFiles, setAttachedFiles] = useState(
    Array.isArray(task.mySubmission)
      ? task.mySubmission
      : task.mySubmission
      ? [task.mySubmission]
      : []
  );

  const [showPopup, setShowPopup] = useState(false);
  const [fileInput, setFileInput] = useState("");
  const [submitted, setSubmitted] = useState(task.status === "completed");
  const [submissionTime, setSubmissionTime] = useState(
    task.status === "completed" ? null : null
  );
  const [showXPMessage, setShowXPMessage] = useState(false);
  const [xpChange, setXpChange] = useState(null);
  const [downloadMessage, setDownloadMessage] = useState(false);
  const [showEmptySubmitError, setShowEmptySubmitError] = useState(false);

  const handleAttach = () => {
    if (fileInput.trim()) {
      setAttachedFiles((prev) => [...prev, fileInput.trim()]);
      setFileInput("");
      setShowPopup(false);
    }
  };

  const handleRemove = (filename) => {
    setAttachedFiles((prev) => prev.filter((file) => file !== filename));
  };

  const handleSubmit = () => {
    if (attachedFiles.length > 0) {
      const now = new Date();
      const nowISO = now.toISOString();
      onComplete(task.id, attachedFiles, nowISO); // Passa o tempo real
      setSubmitted(true);
      setSubmissionTime(nowISO);
      setXpChange(task.xp);
      setShowXPMessage(true);
      setTimeout(() => setShowXPMessage(false), 3000);
    } else {
      setShowEmptySubmitError(true);
      setTimeout(() => setShowEmptySubmitError(false), 3000);
    }
  };

  const formatSubmissionDisplay = () => {
    if (submitted && !submissionTime && task.status === "completed") {
      return `${task.dueDate} ${task.dueLimit}`;
    }

    if (submissionTime) {
      const date = new Date(submissionTime);
      const datePart = date.toLocaleDateString();
      const timePart = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `${datePart} ${timePart}`;
    }

    return null;
  };

  return (
    <div className="relative p-6">
      {showXPMessage && (
        <div className={`absolute top-10 left-1/2 transform -translate-x-1/2 text-lg font-bold px-6 py-3 rounded-full shadow-2xl z-50 border-4 animate-pulse ${
          xpChange > 0
            ? 'bg-green-200 text-green-900 border-green-500'
            : 'bg-red-200 text-red-900 border-red-500'
        }`}>
          {xpChange > 0 ? `+ ${xpChange} XP` : `- ${Math.abs(xpChange)} XP`}
        </div>
      )}

      {showEmptySubmitError && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-800 px-4 py-2 rounded shadow z-50">
          You must attach at least one file to submit the task!
        </div>
      )}

      {downloadMessage && (
        <div className="absolute top-4 right-4 bg-slate-100 border border-slate-100 text-slate-800 px-4 py-2 rounded shadow z-50">
          File downloaded successfully
        </div>
      )}

      <button onClick={onClose} className="text-slate-400 text-sm mb-4 hover:underline">← Back</button>

      <h1 className="text-2xl font-bold mb-2 text-slate-800 flex items-center justify-between">
        <span>{task.title}</span>
        <span className="ml-4 bg-slate-200 text-slate-800 text-sm font-semibold px-3 py-1 rounded-full shadow">
          {task.xp || 50} XP
        </span>
      </h1>

      <p className="text-sm text-slate-500 mb-2">
        {submitted ? (
          <>Submitted at: {formatSubmissionDisplay()}</>
        ) : (
          <>Deadline at {task.dueDate} {task.dueLimit}</>
        )}
      </p>

      {task.status === "overdue" && !submitted && (
        <div className="text-red-600 font-semibold text-sm mb-4">
          ⚠️ This task is overdue!
        </div>
      )}

      <div className="mt-6">
        <h2 className="font-semibold text-slate-700 mb-1">Overview</h2>
        <p className="text-slate-600 text-sm">
          This task belongs to the "{task.subject}" course. Please read all instructions carefully.
          Use the provided reference materials and submit before the deadline to avoid penalties.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold text-slate-700 mb-1">Instructions</h2>
        <p className="text-slate-600 text-sm whitespace-pre-line">{task.instructions}</p>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold text-slate-700 mb-1">Reference Materials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {task.resources.map((file, i) => (
            <div key={i} className="relative group bg-slate-50 p-3 rounded border border-slate-200 shadow hover:shadow-md">
              <p className="text-sm text-slate-800 font-medium">{file}</p>
              <button
                onClick={() => {
                  setTimeout(() => setDownloadMessage(true), 2000);
                  setTimeout(() => setDownloadMessage(false), 4000);
                }}
                className="absolute top-2 right-2 text-xs px-2 py-1 bg-slate-500 text-white rounded opacity-0 group-hover:opacity-100 transition"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold text-slate-700 mb-1">My Work</h2>
        {attachedFiles.length > 0 ? (
          <ul className="space-y-2 mt-2">
            {attachedFiles.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-2 bg-slate-100 text-slate-800 rounded border border-slate-300 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">📎</span>
                  <span className="text-sm font-medium">{file}</span>
                </div>
                {!submitted && (
                  <button
                    onClick={() => handleRemove(file)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-500">No files submitted yet.</p>
        )}
      </div>

      {showPopup && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[480px] p-6 rounded shadow-xl border border-slate-300 z-50">
          <h3 className="text-base font-semibold text-slate-700 mb-3">Attach a file</h3>
          <input
            type="text"
            value={fileInput}
            onChange={(e) => setFileInput(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded text-sm mb-4"
            placeholder="e.g. LabReport.pdf"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 text-sm bg-slate-200 rounded hover:bg-slate-300"
            >
              Cancel
            </button>
            <button
              onClick={handleAttach}
              className="px-4 py-2 text-sm bg-slate-600 text-white rounded hover:bg-slate-700"
            >
              Add File
            </button>
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-6">
        {submitted ? (
          <button
            className="px-4 py-2 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
            onClick={() => {
              setSubmitted(false);
              setSubmissionTime(null);
              setXpChange(-task.xp);
              setShowXPMessage(true);
              setTimeout(() => {
                setShowXPMessage(false);
                onUndo(task.id);
              }, 2000);
            }}
          >
            Undo Submission
          </button>
        ) : (
          <>
            <button
              className={`px-4 py-2 text-white text-sm rounded ${attachedFiles.length > 0 ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}
              onClick={handleSubmit}
            >
              Submit Task
            </button>
            <button
              onClick={() => setShowPopup(true)}
              className="px-4 py-2 text-sm bg-slate-100 rounded hover:bg-slate-200"
            >
              Attach
            </button>
          </>
        )}
      </div>
    </div>
  );
}
