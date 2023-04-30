const mongoose = require("mongoose");

const Balance = mongoose.model("Balance", {
  id: Number,
  userId: Number,
  balance: Number,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = Balance;
