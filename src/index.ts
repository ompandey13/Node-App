import express, { Request, Response } from "express";
import coursesRouter from "./modules/courses/course.routes";

const app = express();

app.use(express.json());
app.use("/api/courses", coursesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
