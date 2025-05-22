import TaskCalendarView from "../../../components/personal/teacher/calendar/TasksCalendarView";
import { v4 as uuidv4 } from "uuid";

// just to test -> connect to actual backend tasks later

const dummyTasks = {
  math_12C: [
    {
      id: uuidv4(),
      title: "Correct Worksheet on Trigonometric Identities",
      date: "May 8, 2025",
      done: true,
      note: "Math Project – Class 12A"
    },
    {
      id: uuidv4(),
      title: "Prepare revision material for final test",
      date: "May 20, 2025",
      done: true,
      note: "Math Project – Class 12A"
    },
    {
      id: uuidv4(),
      title: "Enter final test grades",
      date: "June 5, 2025",
      done: true,
      note: "Math Project – Class 12A"
    },
  ],
  math_11A: [
    {
      id: uuidv4(),
      title: "Grade exercises on functions and graphs",
      date: "May 10, 2025",
      done: true,
      note: "Math Project – Class 11B"
    },
    {
      id: uuidv4(),
      title: "Create challenge problems for algebra topic",
      date: "May 24, 2025",
      done: false,
      note: "Math Project – Class 11B"
    },
    {
      id: uuidv4(),
      title: "Analyze midterm results and give feedback",
      date: "June 3, 2025",
      done: false,
      note: "Math Project – Class 11B"
    },
  ],
  math_10B: [
    {
      id: uuidv4(),
      title: "Review basic geometry worksheet",
      date: "May 7, 2025",
      done: true,
      note: "Math Project – Class 10C"
    },
    {
      id: uuidv4(),
      title: "Prepare class for logic and reasoning test",
      date: "May 21, 2025",
      done: false,
      note: "Math Project – Class 10C"
    },
    {
      id: uuidv4(),
      title: "Upload missing grades to portal",
      date: "June 12, 2025",
      done: false,
      note: "Math Project – Class 10C"
    },
  ],
  history_12B: [
    {
      id: uuidv4(),
      title: "Correct essays on Revolutions of the 20th century",
      date: "May 9, 2025",
      done: true,
      note: "History Project – Class 12B"
    },
    {
      id: uuidv4(),
      title: "Evaluate final presentations on Dictatorships in Europe",
      date: "May 25, 2025",
      done: false,
      note: "History Project – Class 12B"
    },
    {
      id: uuidv4(),
      title: "Compile final participation reports",
      date: "June 14, 2025",
      done: false,
      note: "History Project – Class 12B"
    },
  ],
  history_11C: [
    {
      id: uuidv4(),
      title: "Mark tests on Industrial Revolution",
      date: "May 13, 2025",
      done: true,
      note: "History Project – Class 11A"
    },
    {
      id: uuidv4(),
      title: "Create visual timeline activity for Imperialism",
      date: "May 29, 2025",
      done: false,
      note: "History Project – Class 11A"
    },
    {
      id: uuidv4(),
      title: "Prepare review worksheet on early modern Europe",
      date: "June 6, 2025",
      done: false,
      note: "History Project – Class 11A"
    },
  ],
  history_10A: [
    {
      id: uuidv4(),
      title: "Correct quizzes on Portuguese Discoveries",
      date: "May 11, 2025",
      done: true,
      note: "History Project – Class 10B"
    },
    {
      id: uuidv4(),
      title: "Supervise group project on Medieval Europe",
      date: "May 22, 2025",
      done: true,
      note: "History Project – Class 10B"
    },
    {
      id: uuidv4(),
      title: "Archive end-of-term results",
      date: "June 10, 2025",
      done: true,
      note: "History Project – Class 10B"
    },
  ]
};


function PersonalCalendar() {
  return <TaskCalendarView tasks={dummyTasks} />;
}

export default PersonalCalendar