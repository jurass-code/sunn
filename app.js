import express from "express";
import config from "config";
import mongoose from "mongoose";
import router from "./routes/product.routes.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json({ extended: true }));
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json("Сервер работает");
});
const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`server poletel on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}
start();
