import TaskCalendarView from "../../../components/personal/student/calendar/TasksCalendarView";
import { v4 as uuidv4 } from "uuid";

const teacherTasks = {
  "Class 12B - History": [
    {
      id: uuidv4(),
      title: "Exercises",
      date: "2025-05-10T23:59:00",
      done: false,
      xp: 20,
      priority: "Chill",
      description: "Complete worksheet 3"
    },
    {
      id: uuidv4(),
      title: "Trench Document",
      date: "2025-05-27T23:59:00",
      done: false,
      xp: 50,
      priority: "Urgent",
      description: "Final presentation"
    },
  ],
  "Class 11A - Math": [
    {
      id: uuidv4(),
      title: "Derivatives Worksheet",
      date: "2025-05-15T22:00:00",
      done: false,
      xp: 25,
      priority: "Chill",
      description: "Complete solution of Worksheet 5"
    },
    {
      id: uuidv4(),
      title: "Functions - Extra",
      date: "2025-05-20T18:00:00",
      done: false,
      xp: 15,
      priority: "Chill",
      description: "Explore quadratic functions using Geogebra"
    }
  ]
};

function TeacherCalendar() {
  return <TaskCalendarView tasks={teacherTasks} />;
}

export default TeacherCalendar;