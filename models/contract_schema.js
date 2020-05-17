var Client = require('./client');

const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
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
  client: {
    type: mongoose.Schema.Schema.ObjectId,
    ref: Client
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

ContractSchema.pre("save", function (next) {
  this.updated = new Date();

  next();
});

let ConSchema = mongoose.model("Contract", ContractSchema);

module.exports = ConSchema;
