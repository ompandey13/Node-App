import express from "express";

let router = express.Router();

const courses: any = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

router.post("/", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(courses);
});

router.put("/:id", (req, res) => {
  const course = courses.find((c: any) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The Course with given ID was not found.");

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((c: any) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The Course with given ID was not found.");

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c: any) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The Course with given ID was not found.");
  res.send(course);
});

export = router;
