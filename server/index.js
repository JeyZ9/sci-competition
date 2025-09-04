import express from "express";
import activityRouter from "./routers/activity.router.js";
import db from "./models/index.js";
import authRouter from "./routers/auth.router.js";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3000;
const FRONT_END_URL = process.env.FRONT_END_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// app.get("/hello", (req, res) => {
//     return res.send("Hello World!");
// });

db.sequelize.sync({ force: false }).then(() => {
  console.log("create table user_roles");
});

app.use("/api/v1/activity", activityRouter);
app.use("/api/v1/auth", authRouter);

app.use(
  cors({
    oring: ["http://localhost:5173", "127.0.0.1:5173", FRONT_END_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Athorization", "x-access-token"],
  })
);

app.listen(PORT, () => {
    console.log("Listening to http://localhost:" + PORT);
})