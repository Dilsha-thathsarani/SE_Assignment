import CreateUser from "../models/createUser.js";
import { nanoid } from "nanoid";
import sendMail from "./sendMail.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//create user to the system
export const createUser = async (req, res) => {
  try {
    const { name, email, accountType } = req.body;

    //Generate random password with 8 characters
    const temPassword = nanoid(8);

    if (!name || !email || !accountType) {
      return res.status(400).json({
        msg: "Please fill all the fields",
      });
    }
    //Check if email is valid
    if (!validateEmail(email)) {
      return res.status(400).json({
        msg: "Please enter valid email",
      });
    }

    //Check if email already exists
    const user = await CreateUser.findOne({ email });
    if (user) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }

    //Hash password
    const temPasswordHash = await bcrypt.hash(temPassword, 12);

    //Create new user
    await CreateUser.create({
      name,
      email,
      accountType,
      password: temPasswordHash,
    }).then((data) => {
      res.status(200).json(data);

      const url = `${process.env.CLIENT_URL}/login`;

      //Send temporary password and login url to user email
      sendMail(name, temPassword, email, url);
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//First Login user
export const firstLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        msg: "Please fill all the fields",
      });
    }

    //Check if email already exists
    const user = await CreateUser.findOne({ email });

    if (!user) {
      return res.status(400).json({
        msg: "User does not exist",
      });
    }
    //Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        msg: "Password is incorrect",
      });
    }

    //refresh token
    const refresh_token = createRefreshToken({ id: user._id });

    res.cookie("refreshtoken", refresh_token, {
      httpOnly: true,
      path: "/user/refresh_token",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(200).json({
      msg: "Login Success",
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//Reset password
export const resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "Please fill all the fields",
      });
    }
    //Check if email already exists
    const user = await CreateUser.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "User does not exist",
      });
    }

    //check password length
    if (password.length < 8) {
      return res.status(400).json({
        msg: "Password must be at least 8 characters long",
      });
    }
    //Hash password
    const passwordHash = await bcrypt.hash(password, 12);
    //Update password
    await CreateUser.findOneAndUpdate(
      { email },
      { password: passwordHash }
    ).then(() => {
      res.status(200).json({
        msg: "Password reset successfully",
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//Check if email is valid format
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
}

//Create refresh token
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

//get access token
export const getAccessToken = (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({ msg: "Please login now!" });

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Please login now!" });

      const access_token = createAccessToken({ id: user.id });
      console.log(user);
      res.json({ access_token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

//Create access token
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};
