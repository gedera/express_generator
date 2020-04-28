const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  fname: {
    type: String,
    trim: true,
    required: "Nombre es requerido"
  },
  lname: {
    type: String,
    trim: true,
    required: "Apellido es requerido"
  },
  gender: {
    type: Boolean,
    default: true
  },
  birthday: {
    type: Date,
    required: "Fecha de nacimiento es requerido"
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

ClientSchema.pre("save", function (next) {
  this.updated = new Date();

  next();
});

let CliSchema = mongoose.model("Client", ClientSchema);

module.exports = CliSchema;
