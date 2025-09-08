import sequelize from "./db.js";
import Sequelize from "sequelize"

import Activity from "./activity.model.js";
import User from "./user.model.js"
import Admin from "./admin.model.js";
import Judge from "./judge.model.js";
import Teacher from "./teacher.model.js";
import VerificationToken from "./verificationToken.model.js";

const db = {};

// S ตัวเล็ก
db.sequelize = sequelize;
// S ตัวใหญ่
db.Sequelize = Sequelize;

db.User = User;
db.Activity = Activity;
db.Admin = Admin;
db.Teacher = Teacher;
db.Judge = Judge;
db.VerificationToken = VerificationToken;

// Association
db.VerificationToken.belongTo(db.User, {foreignKey: "userId"});
db.User.belongTo(db.VerificationToken, { foreignKey: "userId" });

export default db;