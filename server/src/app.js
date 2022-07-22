import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.set("port", process.env.PORT);
app.use(express.json());

export default app;
