const mongoose = require("mongoose");
const { Schema } = mongoose;

const threadsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    created: {
      date: String,
    },
    info: {
      editable: {
        type: Boolean,
        default: false,
      },
      removeable: {
        type: Boolean,
        default: false,
      },
      mustbeseen: {
        type: Boolean,
        default: false,
      },
      alwaysreminder: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true }
);

const Threads = mongoose.model("Threads", threadsSchema);
module.exports = Threads;
