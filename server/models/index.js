import sequelize from "./db.js";
import Sequelize from "sequelize";

import Activity from "./activity.model.js";
import User from "./user.model.js";
import VerificationToken from "./verificationToken.model.js";

const db = {};

// S ตัวเล็ก
db.sequelize = sequelize;
// S ตัวใหญ่
db.Sequelize = Sequelize;

db.User = User;
db.Activity = Activity;
db.VerificationToken = VerificationToken;

// Association
db.VerificationToken.belongsTo(db.User, { foreignKey: "userId" });
db.User.hasMany(db.VerificationToken, { foreignKey: "userId" });

export default db;
