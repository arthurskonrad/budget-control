const express = require("express");

const transactionRouter = require("./routes/transaction");
const balanceRouter = require("./routes/balance");
const userRouter = require("./routes/user");

const createRouter = (app) => {
  const router = express.Router();

  app.use("/user", userRouter(router));
  app.use("/transaction", transactionRouter(router));
  app.use("/balance", balanceRouter(router));

  return router;
};

module.exports = createRouter;
