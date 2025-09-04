import express from "express";
import activityRouter from "./routes/activity.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/hello", (req, res) => {
    return res.send("Hello World!");
});

app.use("/api/v1/activity", activityRouter);

app.listen(PORT, () => {
    console.log("Listening to http://localhost:" + PORT);
})