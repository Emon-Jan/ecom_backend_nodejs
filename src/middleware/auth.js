import jwt from "jsonwebtoken";
import constant from "../../config/constants";

export const auth = (req, res, next) => {
  const headerWithtoken = req.header("x-autentication-token");
  if (!headerWithtoken)
    return res.status(401).send("Access denied. No token provided");

  const bearer = headerWithtoken.split(" ");
  const token = bearer[1];
  try {
    const decoded = jwt.verify(token, constant.SECRET_KEY);
    if (decoded.scope === "admin") {
      req.user = decoded;
      next();
    } else {
      res.status(401).send("Access denied for non-admin users");
    }
  } catch (err) {
    res.status(400).send("Access Denied");
  }
};
