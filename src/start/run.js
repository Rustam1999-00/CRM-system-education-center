const { connect } = require("mongoose");
const Admins = require("../models/Admin");
const config = require("config");

const run = async (app) => {
  await connect(config.get("MONGO_URL"));

  const admin = await Admins.findOne();

  if (!admin) {
    Admins.create({
      username: "admin",
      password: "$2a$10$9H3Wv6ro2gIhyK/6ghgGleeSztwtM0W.V8m/TeisE/gsnwCeS0kG6",
    });
  }

  const PORT = config.get("PORT");
  app.listen(PORT, () => {
    console.log(PORT);
  });
};

module.exports = run;
