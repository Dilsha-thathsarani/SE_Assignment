import Admin from "../models/user.js";
import bcrypt from "bcrypt";

const temPasswordHash = await bcrypt.hash("12345678", 12);

const Admins = [
  {
    name: "Sanjula",
    email: "sdulshan10@gmail.com",
    accountType: "admin",
    password: temPasswordHash,
  },
  {
    name: "Dilsha",
    email: "dilsha@gmail.com",
    accountType: "student",
    password: temPasswordHash,
  },
];

const seedAdmin = async () => {
  try {
    await Admin.deleteMany({});
    await Admin.create(Admins);
    console.log("Admin Created...");
  } catch (err) {
    console.log("Admin Creation Failed...", err.message);
  }
};

export default seedAdmin;
