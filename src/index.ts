import express from "express";

const app = express();

app.use(express.json());
const courses: any = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(courses);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c: any) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The Course with given ID was not found.");

  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c: any) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The Course with given ID was not found.");

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c: any) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The Course with given ID was not found.");
  res.send(course);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
