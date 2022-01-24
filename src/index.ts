import express from "express";
import coursesRouter from "./modules/courses/cources.routes";

const app = express();

app.use(express.json());
app.use("/api/courses", coursesRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
