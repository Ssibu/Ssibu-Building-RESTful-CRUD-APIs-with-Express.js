import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
