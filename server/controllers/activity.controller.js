import Status from "../contants/Status.js";
import Activity from "../models/activity.model.js";

const activityController = {};

activityController.create = async (req, res) => {
    const { name, description, type, level, team_size, date, location, reg_open, reg_close, contact_name, contact_email, contact_phone, status } = req.body;

    if (
      (!name ||
        !description ||
        !type ||
        !level ||
        !team_size ||
        !date ||
        !location ||
        !reg_open ||
        !reg_close ||
        !contact_name ||
        !contact_email ||
      !contact_phone || !status)
    ) {
      res.status(400).send({ message: "Name, Type, or Img can not be empty!" });
      return;
    }

    if (!Object.values(Status).includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    await Activity.findOne({ where: {name:name} }).then((ac) => {
        if(ac) {
            res.status(400).send({ message: "Activity already exists!" });
            return;
        }

        const newActivity = {
          name,
          description,
          type,
          level,
          team_size,
          date,
          location,
          reg_open,
          reg_close,
          contact_name,
          contact_email,
          contact_phone,
          status,
        };

        Activity.create(newActivity).then((data) => {
            res.send(data)
        }).catch((err) => {
            res.status(500).send({ message: err.message || "Something error" })
        });
    })
}

export default activityController;