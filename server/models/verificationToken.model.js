import sequelize from "./db.js";
import { DataTypes } from "sequelize";

const VerificationToken = sequelize.define("verificationToken", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    referance: {
      model: "users",
      key: "id",
    },
  },
  expiredAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
VerificationToken.sync({ force: false })
  .then(() => {
    console.log("Table created or already exists");
  })
  .catch((error) => {
    console.error("Error createing table", error);
  });
export default VerificationToken;
