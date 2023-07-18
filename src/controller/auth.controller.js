const Admins = require("../models/Admin");
const jwt = require("../utils/jwt");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admins.findOne({ username });
  console.log(admin);
  if (!admin)
    return res.status(403).json({ message: "Invalid username or password" });

  const compare = await bcrypt.compare(password, admin.password);

  if (!compare)
    return res.status(403).json({ message: "Invalid username or password" });

  const token = jwt.sign({ id: admin.id });

  res.status(200).json({ message: "Ok", data: token });
};

exports.addAdmin = async (req, res) => {
  const { username, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  await Admins.create({
    username,
    password: hashedPass,
  });

  res.status(201).json({ message: "Successfully create Admin" });
};
