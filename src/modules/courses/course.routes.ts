import express, { Request, Response } from "express";
import { Course } from "./course";
import courseService from "./course.service";

let router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const courses: Course[] = courseService.getAll();
  res.send(courses);
});

router.post("/", (req: Request, res: Response) => {
  const name: string = req.body.name;
  const courses: Course[] = courseService.insert(name);
  res.send(courses);
});

router.put("/:id", (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const name: string = req.body.name;
    const course: Course = courseService.update(id, name);
    res.send(course);
  } catch (err) {
    res.status(404).send((<Error>err).toString());
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const course: Course = courseService.remove(id);
    res.send(course);
  } catch (err) {
    res.status(404).send((<Error>err).toString());
  }
});

router.get("/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const course: Course | undefined = courseService.getById(id);
  if (!course)
    return res.status(404).send("The Course with given ID was not found.");
  res.send(course);
});

export = router;
