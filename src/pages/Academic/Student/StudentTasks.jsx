import { useState } from "react";
import TaskTabs from "../../../components/studentAcademic/tasks/TaskTabs";
import TaskListByDate from "../../../components/studentAcademic/tasks/TaskListByDate";
import TaskDetailsPanel from "../../../components/studentAcademic/tasks/TaskDetailsPanel";

const sampleTasks = [
  {
    id: 1,
    title: "Portuguese Presention ",
    subject: "Portuguese",
    dueDate: "2025-05-28",
    dueTime: "23:50",
    dueLimit: "23:59",
    submissionTime: "09:50",
    status: "completed",
    instructions: "Present a book at your choice in a 10-minute presentation.",
    resources: ["Topics_to_be_covered.pdf"],
    mySubmission: "Book_Presentation.pptx",
    xp: 100
  },
  {
    id: 2,
    title: "History Paper",
    subject: "History",
    dueDate: "2025-05-01",
    dueTime: "10:30",
    dueLimit: "23:59",
    submissionTime: "10:46",
    status: "completed",
    instructions: "Write a paper about the events of April 25th and submit it here",
    resources: ["Papers_Guidelines.pdf"],
    mySubmission: "25_April_paper.pdf",
    xp: 250
  },
  {
    id: 3,
    title: "Final Project Report",
    subject: "Philosophy",
    dueDate: "2025-06-05",
    dueTime: "18:00",
    dueLimit: "23:59",
    submissionTime: "",
    status: "upcoming",
    instructions: "Submit the final report in PDF format along with any relevant files.",
    resources: ["Final_Report_Template.pdf"],
    mySubmission: "",
    xp: 300
  },
  {
    id: 4,
    title: "Lab Report",
    subject: "Physics and Chemistry",
    dueDate: "2025-05-05",
    dueTime: "20:00",
    dueLimit: "23:59",
    submissionTime: "",
    status: "overdue",
    instructions: "Present a report on the experiments carried out in the laboratory.",
    resources: ["Report_template.pdf"],
    mySubmission: "",
    xp: 80
  },
  {
    id: 5,
    title: "Math Exercises",
    subject: "Math A",
    dueDate: "2025-05-16",
    dueTime: "12:00",
    dueLimit: "23:59",
    submissionTime: "",
    status: "upcoming",
    instructions: "Upload the solution of all lab10 exercises.",
    resources: ["lab10_exercises.pdf"],
    mySubmission: "",
    xp: 65
  }
];

export default function StudentTasks() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [selectedTask, setSelectedTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "Completed") return task.status === "completed";
    if (activeTab === "Overdue") return task.status === "overdue";
    if (activeTab === "Upcoming") return task.status === "upcoming";
    return false;
  });

  const handleComplete = (taskId, files) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === taskId
          ? { ...t, status: "completed", submissionTime: new Date().toLocaleTimeString(), mySubmission: files }
          : t
      )
    );
  };
  

  const handleUndoSubmission = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          const due = new Date(`${task.dueDate}T${task.dueLimit}`);
          const now = new Date();
          const newStatus = now > due ? "overdue" : "upcoming";
          return { ...task, status: newStatus, submissionTime: "" };
        }
        return task;
      })
    );
    setSelectedTask(null);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {selectedTask ? (
        <TaskDetailsPanel
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onComplete={handleComplete}
          onUndo={handleUndoSubmission}
        />
      ) : (
        <>
          <TaskListByDate tasks={filteredTasks} onOpenDetails={setSelectedTask} />

          {activeTab === "Completed" && filteredTasks.length > 0 && (
            <p className="text-sm text-slate-500 mt-6 italic">
              To view older tasks, visit a specific course team.
            </p>
          )}
        </>
      )}
    </div>
  );
}
