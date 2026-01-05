import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  return res.status(200).json({ status: true, data: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
