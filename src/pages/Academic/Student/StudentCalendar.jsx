import TaskCalendarView from "../../../components/studentAcademic/calendar/TasksCalendarView";
import { v4 as uuidv4 } from "uuid";

const taskData = {
  review: [
    { 
      id: uuidv4(),
      title: "Assignment 3 - Article Presentation",
      dueDate: "2025-06-05",
      status: "Completed",
      xp: 300,
      subject: "Human-Computer Interaction",
      dueTime: "23:50",
      dueLimit: "23:59",
      instructions: "Present a scientific article from a top HCI conference in a 10-minute presentation.",
      resources: ["Article_Presentation_Guidelines.pdf"],
      mySubmission: "Presentation_Article.pptx",
    },
    { 
      id: uuidv4(),
      title: "Assignment 1 - Context and Requirement Analysis", 
      dueDate: "2025-05-01",
      status: "Completed",
      xp: 250,
      subject: "Human-Computer Interaction",
      dueTime: "10:30",
      dueLimit: "23:59",
      instructions: "Prepare a 15-minute group presentation on the context and requirements of your project.",
      resources: ["Assignment1_Guidelines.pdf"],
      mySubmission: "Presentation_Context.pptx",
    },
  ],
  ihc: [
    { 
      id: uuidv4(),
      title: "Final Project Report",
      dueDate: "2025-06-15",
      status: "Upcoming",
      xp: 400,
      subject: "Distributed Computing",
      dueTime: "18:00",
      dueLimit: "23:59",
      instructions: "Submit the final report in PDF format along with any relevant files.",
      resources: ["Final_Report_Template.pdf"],
      mySubmission: "",
    },
    { 
      id: uuidv4(),
      title: "SQL Practice Exercises",
      dueDate: "2025-05-05",
      status: "Overdue",
      xp: 200,
      subject: "Databases",
      dueTime: "20:00",
      dueLimit: "23:59",
      instructions: "Submit a .sql file with the solution for all provided queries.",
      resources: ["SQL_Exercises.pdf"],
      mySubmission: "",
    },
  ],
  bd: [
    { 
      id: uuidv4(),
      title: "Lab10 Exercises",
      dueDate: "2025-05-15",
      status: "Upcoming",
      xp: 150,
      subject: "PDS",
      dueTime: "12:00",
      dueLimit: "23:59",
      instructions: "Upload the solution of all lab10 exercises.",
      resources: ["lab10_exercises.pdf"],
      mySubmission: "",
    },
  ]
};

function StudentCalendar() {
  return <TaskCalendarView tasks={taskData} />;
}

export default StudentCalendar;