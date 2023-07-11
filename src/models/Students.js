const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parents: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    parentsPhone: {
      type: Number,
      required: true,
    },
    profession: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

module.exports = model("Admin", schema);
