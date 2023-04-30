const mongoose = require("mongoose");

const Transaction = mongoose.model("Transaction", {
  id: Number,
  userId: Number,
  description: String,
  amount: Number,
  type: String,
  category: String,
  date: Date,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = Transaction;
