const Students = require("../models/Students");

exports.createStudents = async (req, res) => {
  const { name, parents, phone,parentsPhone ,profession} = req.body;
  const { imageName: image } = req;

  await Students.create({
    name, parents, phone,parentsPhone ,profession,image
  });

  res.status(201).json({ message: "Successfully create Students" });
};

exports.editStudents = async (req, res) => {
  const {name, parents, phone,parentsPhone ,profession } = req.body;
  const { imageName: image } = req;
  const { id } = req.params   ;

  await Students.findByIdAndUpdate(id, {
    $set: {
        name, parents,phone,parentsPhone,profession,image
    },
  });

  res.status(201).json({ message: "Success Updated Students" });
};

exports.getStudents = async (_, res) => {
  const client = await Students.find();
  res.status(200).json(client);
};

exports.deleteStudents = async (req, res) => {
  const { id } = req.params;

  await Students.findByIdAndDelete(id);

  res.status(202).json({ message: "Success Deleted Students" });
};
