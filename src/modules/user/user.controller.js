import User from "./user.model";
import bcrypt from "bcrypt";
import shortid from "shortid";
import _ from "lodash";

const SALT_ROUNDS = 10;

export const signUp = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user) {
      const salt = await bcrypt.genSalt(SALT_ROUNDS);
      const hash = await bcrypt.hash(password, salt);
      const user = new User({
        userId: "User_" + shortid.generate(),
        phone,
        password: hash,
      });
      const savedUser = await user.save();
      return res.status(201).send(_.pick(savedUser, ["userId", "role"]));
    }
    return res.status(409).send("Already exists");
  } catch (error) {
    res.status(400).send(error);
  }
};

export const loginForAdmin = async (req, res) => {
  const { userId, password } = req.body;
  try {
    const user = await User.findOne({ userId });
    if (!user) return res.status(401).send("Login Failed");
    if (user.role !== "admin")
      return res.status(401).send("Login Failed. Access denied");

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send("Invalid user ID or password");

    const loggedInUser = _.pick(user, ["userId", "role"]);
    const token = user.generateAuthToken();
    res
      .header("x-authentication-token", "bearer " + token)
      .status(201)
      .send({ loggedInUser, token });
  } catch (error) {
    res.status(400).send(error);
  }
};
