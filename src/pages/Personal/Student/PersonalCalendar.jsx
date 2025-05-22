import TaskCalendarView from "../../../components/personal/student/calendar/TasksCalendarView";
import { v4 as uuidv4 } from "uuid";

// just to test -> connect to actual backend tasks later
const dummyTasks = {
  review: [
    { id: uuidv4(), title: "review C lectures", date: "April 22, 2025", done: true },
    { id: uuidv4(), title: "catch up on cd lectures - flashcards for lec 7 forward", date: "April 24, 2025", done: true },
  ],
  ihc: [
    { id: uuidv4(), title: "implement personal home", date: "April 23, 2025", done: true },
    { id: uuidv4(), title: "implement personal tasks interface", date: "April 23, 2025", done: true },
    { id: uuidv4(), title: "implement personal calendar", date: "April 23, 2025", done: true },
    { id: uuidv4(), title: "implement personal clans interface", date: "April 23, 2025", done: true },
    { id: uuidv4(), title: "implement clan chat", date: "April 23, 2025", done: true },
  ],
  bd: [
    { id: uuidv4(), title: "check out how to implement forms with flask + python", date: "", done: false },
  ],
  cd: [
    { id: uuidv4(), title: "implement p2p network", date: "April 21, 2025", done: false },
    { id: uuidv4(), title: "connect http server with p2p network", date: "April 21, 2025", done: false },
    { id: uuidv4(), title: "finish http server endpoint implementation (abstract)", date: "April 21, 2025", done: false },
  ],
  labs: [
    { id: uuidv4(), title: "finish C lab", date: "April 22, 2025", done: true },
  ],
};

function PersonalCalendar() {
  return <TaskCalendarView tasks={dummyTasks} />;
}

export default PersonalCalendar