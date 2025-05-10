import { useState } from "react";
import TaskTabs from "../../../components/studentAcademic/tasks/TaskTabs";
import TaskListByDate from "../../../components/studentAcademic/tasks/TaskListByDate";
import TaskDetailsPanel from "../../../components/studentAcademic/tasks/TaskDetailsPanel";

const sampleTasks = [
  {
    id: 1,
    title: "Assignment 3 - Article Presentation",
    subject: "Human-Computer Interaction",
    dueDate: "2025-06-05",
    dueTime: "23:50",
    dueLimit: "23:59",
    submissionTime: "09:50",
    status: "completed",
    instructions: "Present a scientific article from a top HCI conference in a 10-minute presentation.",
    resources: ["Article_Presentation_Guidelines.pdf"],
    mySubmission: "Presentation_Article.pptx",
    xp: 100
  },
  {
    id: 2,
    title: "Assignment 1 - Project Context and Requirements",
    subject: "Human-Computer Interaction",
    dueDate: "2025-05-01",
    dueTime: "10:30",
    dueLimit: "23:59",
    submissionTime: "10:46",
    status: "completed",
    instructions: "Prepare a 15-minute group presentation on the context and requirements of your project.",
    resources: ["Assignment1_Guidelines.pdf"],
    mySubmission: "Presentation_Context.pptx",
    xp: 250
  },
  {
    id: 3,
    title: "Final Project Report",
    subject: "Distributed Computing",
    dueDate: "2025-06-15",
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
    title: "SQL Practice Exercises",
    subject: "Databases",
    dueDate: "2025-05-05",
    dueTime: "20:00",
    dueLimit: "23:59",
    submissionTime: "",
    status: "overdue",
    instructions: "Submit a .sql file with the solution for all provided queries.",
    resources: ["SQL_Exercises.pdf"],
    mySubmission: "",
    xp: 80
  },
  {
    id: 5,
    title: "Lab10 Exercises",
    subject: "PDS",
    dueDate: "2025-05-15",
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
