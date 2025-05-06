import TaskCalendarView from "../../../components/personal/calendar/TasksCalendarView";
import { v4 as uuidv4 } from "uuid";

const teacherTasks = {
  "Turma A - História": [
    {
      id: uuidv4(),
      title: "Exercícios",
      date: "2025-05-10T23:59:00",
      done: false,
    },
    {
      id: uuidv4(),
      title: "Documento trincheiras",
      date: "2025-05-27T23:59:00",
      done: false,
    },
  ],
};

function TeacherCalendar() {
  return <TaskCalendarView tasks={teacherTasks} />;
}

export default TeacherCalendar;
