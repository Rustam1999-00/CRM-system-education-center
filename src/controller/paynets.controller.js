const Paynets = require("../models/Paynets");

exports.createPaynets = async (req, res) => {
  const { name, profession, phone,teacher_name ,payment_date} = req.body;
  console.log( Paynets);

  await Paynets.create({
    name, profession, phone,teacher_name ,payment_date
  });

  res.status(201).json({ message: "Successfully create Paynets" });
};

exports.editPaynets = async (req, res) => {
  const {name, profession, phone,teacher_name ,payment_date } = req.body;
  const { id } = req.params   ;

  await Paynets.findByIdAndUpdate(id, {
    $set: {
      name, profession, phone,teacher_name ,payment_date
    },
  });

  res.status(201).json({ message: "Success Updated Paynets" });
};

exports.getPaynets = async (_, res) => {
  const client = await Paynets.find();

  res.status(200).json(client);
};

exports.deletePaynets = async (req, res) => {
  const { id } = req.params;

  await Paynets.findByIdAndDelete(id);

  res.status(202).json({ message: "Success Deleted Payments" });
};
