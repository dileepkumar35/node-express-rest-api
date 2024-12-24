import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("Hello from home page"));

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
