import CreateUser from "./createUser";
import { nanoid } from "nanoid";

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

      const url = `${process.env.CLIENT_URL}/user/firstLogin`;
      console.log("url", url);

      //Send temporary password and login url to user email
      sendMail(name, temPassword, email, url);
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//Check if email is valid format
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(regex.test(email));
  return regex.test(email);
}
