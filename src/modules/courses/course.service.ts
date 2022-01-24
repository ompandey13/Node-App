import { Course } from "./course";

const courses: Course[] = [
  {
    id: 1,
    name: "Course 1",
  },
  {
    id: 2,
    name: "Course 2",
  },
  {
    id: 3,
    name: "Course 2",
  },
];

function getById(id: number): Course | undefined {
  return courses.find((c: any) => c.id === id);
}

function getAll(): Course[] {
  return courses;
}

function insert(name: string): Course[] {
  const course = {
    id: courses.length + 1,
    name: name,
  };
  courses.push(course);
  return courses;
}

function update(id: number, name: string): Course {
  const course = getById(id);
  if (!course) throw new Error("The Course with given ID was not found.");
  course.name = name;
  return course;
}

function remove(id: number): Course {
  const course = getById(id);
  if (!course) throw new Error("The Course with given ID was not found.");

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  return course;
}

const courseService = {
  getById,
  getAll,
  insert,
  remove,
  update,
};

export = courseService;
