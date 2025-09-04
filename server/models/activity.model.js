import { DataTypes } from "sequelize";
import sequelize from "./db.js";
import Status from "../contants/Status.js";

const Activity = sequelize.define("activity", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team_size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reg_open: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  reg_close: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  contact_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(...Object.values(Status)),
    allowNull: false,
  },
});

Activity.sync({ force: false })
.then(() => {
    console.log("Table created or already exists");
})
.catch((error) => {
    console.error("Error createing table", error);
});

export default Activity;