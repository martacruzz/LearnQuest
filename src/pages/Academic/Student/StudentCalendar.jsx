import TaskCalendarView from "../../../components/studentAcademic/calendar/TasksCalendarView";
import { v4 as uuidv4 } from "uuid";

const taskData = {
  review: [
    { 
      id: uuidv4(),
      title: "Portuguese Presentation",
      dueDate: "2025-05-28",
      status: "Completed",
      xp: 100,
      subject: "Portuguese",
      dueTime: "23:50",
      dueLimit: "23:59",
      instructions: "Present a book of your choice in a 10-minute presentation.",
      resources: ["Topics_to_be_covered.pdf"],
      mySubmission: "Book_Presentation.pptx"
    },
    { 
      id: uuidv4(),
      title: "History Paper", 
      dueDate: "2025-05-01",
      status: "Completed",
      xp: 250,
      subject: "History",
      dueTime: "10:30",
      dueLimit: "23:59",
      instructions: "Write a paper about the events of April 25th and submit it here",
      resources: ["Papers_Guidelines.pdf"],
      mySubmission: "25_April_paper.pdf"
    }
  ],
  ihc: [
    { 
      id: uuidv4(),
      title: "Final Project Report",
      dueDate: "2025-06-05",
      status: "Upcoming",
      xp: 300,
      subject: "Philosophy",
      dueTime: "18:00",
      dueLimit: "23:59",
      instructions: "Submit the final report in PDF format along with any relevant files.",
      resources: ["Final_Report_Template.pdf"],
      mySubmission: ""
    }
  ],
  bd: [
    { 
      id: uuidv4(),
      title: "Lab Report",
      dueDate: "2025-05-05",
      status: "Overdue",
      xp: 80,
      subject: "Physics and Chemistry",
      dueTime: "20:00",
      dueLimit: "23:59",
      instructions: "Present a report on the experiments carried out in the laboratory.",
      resources: ["Report_template.pdf"],
      mySubmission: ""
    },
    { 
      id: uuidv4(),
      title: "Math Exercises",
      dueDate: "2025-05-16",
      status: "Upcoming",
      xp: 65,
      subject: "Math A",
      dueTime: "12:00",
      dueLimit: "23:59",
      instructions: "Upload the solution of all lab10 exercises.",
      resources: ["lab10_exercises.pdf"],
      mySubmission: ""
    }
  ]
};

function StudentCalendar() {
  return <TaskCalendarView tasks={taskData} />;
}

export default StudentCalendar;