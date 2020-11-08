import User from "./user.model";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const signUp = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user) {
      const hash = await bcrypt.hash(password, SALT_ROUNDS);
      const user = new User({ phone, password: hash });
      const savedUser = await user.save();
      return res.status(201).send(savedUser);
    }
    return res.status(409).json({ mes: "user exists" });
  } catch (error) {
    res.status(400).send(error);
  }
};
