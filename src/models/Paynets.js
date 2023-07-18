const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    teacher_name: {
      type: String,
      required: true,
    },
    
    payment_date: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Payments", schema);
