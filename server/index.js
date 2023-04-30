const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB database:", err);
    process.exit(1);
  });

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

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

app.get("/transaction/:id", (req, res) => {
  Transaction.find({ id: req.params.id })
    .then((user) => {
      if (!user) {
        res.status(404);
      } else {
        res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

const Balance = mongoose.model("Balance", {
  id: Number,
  userId: Number,
  balance: Number,
  createdAt: Date,
  updatedAt: Date,
});

app.get("/balance/:id", (req, res) => {
  Balance.find({ id: req.params.id })
    .then((user) => {
      if (!user) {
        res.status(404);
      } else {
        res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

const User = mongoose.model("User", {
  id: Number,
  name: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
});

app.get("/users/:id", (req, res) => {
  User.find({ id: req.params.id })
    .then((user) => {
      if (!user) {
        res.status(404);
      } else {
        res.status(200).send(user);
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
