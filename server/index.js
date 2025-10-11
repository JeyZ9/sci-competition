import express from "express";
import activityRouter from "./routers/activity.router.js";
import db from "./models/index.js";
import authRouter from "./routers/auth.router.js";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3000;
const FRONT_END_URL = process.env.FRONT_END_URL;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// app.get("/hello", (req, res) => {
//     return res.send("Hello World!");
// });

// db
const initDatabase = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("database connection established successfully");
    if (NODE_ENV === "development") {
      await db.sequelize.sync({ after: true });
      console.log("database Synced in development");
    }
  } catch (error) {
    console.log("Unable to connect to database", error);
  }
};

initDatabase();

app.use(
  cors({
    oring: ["http://localhost:5173", "http://127.0.0.1:5173", FRONT_END_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Athorization", "x-access-token"],
  })
);


app.use("/api/v1/activity", activityRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
    console.log("Listening to http://localhost:" + PORT);
})