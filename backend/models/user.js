import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: {
      type: Number,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,

      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    mobile: {
      type: Number,
    },
    status: {
      type: Boolean,
      default: true,
    },
    password: {
      type: String,
    },
    accountType: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
